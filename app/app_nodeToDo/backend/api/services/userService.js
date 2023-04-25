const jwt = require('jsonwebtoken');
const crypto = require("crypto");
const { v4: uuidv4 } = require('uuid');

// public members
const users = [];

// private members
const _tokenBlacklist = [];
const secretKey = process.env.SECRET_KEY || 'secret_key';

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

      getUser(decodedToken.username);

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

  const bearerToken = extractBearerToken(req);

  if (bearerToken) {

    return jwt.verify(bearerToken, secretKey, (err, decodedToken) => {

      if (err) {
        throw new Error('No user found!');
      }

      const user = getUser(decodedToken.username);

      return user;

    });

  } else {
    throw new Error('Unauthorized.');
  }
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

  return token;
};

/**
 * Handles user logout
 * @param {Object} req - Request object
 * @returns {string} - The hashed password.
 */
const handleLogout = (req) => {

  const bearerToken = extractBearerToken(req);

  _tokenBlacklist.push(bearerToken);

  return true;
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

  const id = uuidv4();
  const hashedPassword = createHash(password);
  const user = { id, username, password: hashedPassword };

  users.push(user);
};

/**
 * Retrieves all users.
 * @returns {array} - Returns and array of all users
 */
const getUsers = () => users;


const getUser = (username) => {

  if (isUserExists(username)) {

    return users.find(x => x.username === username);

  } else {

    throw new Error('User not found!');
  }
}

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