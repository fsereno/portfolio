const jwt = require('jsonwebtoken');
const secretKey = 'secret_key';
const crypto = require("crypto");

// public members
const users = [];

// private members
const _tokenBlacklist = [];

/**
 * Middleware to check if user is authenticated
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next function
 */
const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const bearerToken = extractBearerToken(req);

    if (bearerToken) {

        const isBlacklisted = _tokenBlacklist.some(x => x === bearerToken);

        if (isBlacklisted) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        jwt.verify(bearerToken, secretKey, (err, decodedToken) => {

            if (err) {
                return res.sendStatus(403);
            }

            // Set current user in session object
            req.session.currentUser = { username: decodedToken.username, token: bearerToken };

            console.log("user assigned to session " + decodedToken.username)
            next();
        });
    } else {
        next();
    }
};

/**
 * Get current authenticated user
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} User object
 */
const getCurrentUser = (req) => {

    const currentUser = req.session.currentUser;

    if (!currentUser) {
      throw new Error('Unauthorized.');
    }

    const exists = isUserExists(currentUser.username);

    if (!exists) {
      throw new Error('Unauthorized.');
    }

    return currentUser;
};

/**
 * Handles user login
 * @param {string} username - User's username
 * @param {string} password - User's password
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {string} JWT token
 */
const handleLogin = (username, password, req) => {

    const users = getUsers();

    const user = users.find(x => x.username === username);

    if (!user) {
        throw new Error('Username or password does not match.');
    }

    const reHashedPassword = createHash(password);

    if (user.password !== reHashedPassword) {
      throw new Error('Username or password does not match.');
    }

    const payload = {
        username: username
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    req.session.regenerate((err) => {
        if (err) {
            throw new Error('Internal server error when regenerate.');
        }

        req.session.currentUser = { username, token };

        req.session.save((err) => {
            if (err) {
              throw new Error('Internal server error when saving.');
            }
        });
    });

    return token;
};

/**
 * Handles user logout
 * @param {Object} req - Request object
 * @returns {string} - The hashed password.
 */
const handleLogout = (req) => {

  req.session.currentUser = {};

  req.session.destroy((err) => {
    if (err) {

      throw new Error('Internal server error.');

    } else {

      const bearerToken = extractBearerToken(req);

      _tokenBlacklist.push(bearerToken);

      return true;
    }
  });
};

/**
 * Register new user
 * @param {string} username - User's username
 * @param {string} password - User's password
 * @param {Object} res - Response object
 */
const registerUser = (username, password) => {

    const users = getUsers();

    if (users.find(u => u.username === username)) {
      throw new Error('User already exists.');
    }

    const hashedPassword = createHash(password);
    const user = { username, password: hashedPassword };

    console.log("pushing user - reg success")
    console.log(user)

    users.push(user);
};

const getUsers =  () => users;

/**
 * Retrieves a user with the given username from the users array.
 * @param {string} username - The username to retrieve.
 * @returns {boolean} - True if the user exists, False is not found.
 */
const isUserExists = (username) => {
  try {
    return users.find(x => x.username === username) !== undefined;
  } catch (err) {
    throw new Error(`Failed to get user with username ${username}: ${err.message}`);
  }
};

/**
 * Creates a SHA512 hash of the given password.
 * @param {string} password - The password to hash.
 * @returns {string} - The hashed password.
 */
const createHash = (password) => {
  try {
    const hash = crypto.createHash("sha512");
    hash.update(password);
    return hash.digest("hex");
  } catch (err) {
    throw new Error(`Failed to create hash for password: ${err.message}`);
  }
};

/**
 * Extracts a JWT bearer token from the Authorization header of a request.
 * @param {Object} req - The request object.
 * @returns {string|null} - The bearer token, or null if no token was found.
 */
const extractBearerToken = (req) => {
  try {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    }
    return null;
  } catch (err) {
    throw new Error(`Failed to extract bearer token from request: ${err.message}`);
  }
};


module.exports = {
    isAuthenticated,
    getCurrentUser,
    handleLogin,
    handleLogout,
    registerUser
};