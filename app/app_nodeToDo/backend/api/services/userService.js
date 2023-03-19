const jwt = require('jsonwebtoken');
const secretKey = 'secret_key';
const crypto = require("crypto");

// public members
const users = [];

const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Unauthorized' })
    };

    const bearerToken = extractBearerToken(req);

    if (bearerToken) {

        jwt.verify(bearerToken, secretKey, (err, decodedToken) => {

            if (err) {
                return res.sendStatus(403);
            }

            // Set current user in session object
            req.session.currentUser = decodedToken.username;

            console.log("user assigned to session " + decodedToken.username)
            next();
        });
    } else {
        next();
    }
}

const getCurrentUser = (req, res) => {

    const currentUser = req.session.currentUser;

    if (!currentUser) {
        res.sendStatus(401);
    }

    // TO DO getUser should never return password
    const user = getUser(currentUser);

    return user;
}

const handleLogin = (username, password, req, res) => {

    const users = getUsers();

    if (!users.find(x => x.username === username)) {
        res.status(401).json({ message: 'User not found!' });
    };

    const user = getUser(username);

    if (user === undefined) {
        res.status(401).json({ message: 'Username or password does not match.' });
    }

    const reHashedPassword = createHash(password);

    if (user.password !== reHashedPassword) {
        res.status(401).json({ message: 'Username or password does not match.' });
    }

    const payload = {
        username: username
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    req.session.regenerate((err) => {
        if (err) next(err)

        req.session.currentUser = username;

        req.session.save((err) => {
            if (err) return next(err)
        })
    })

    return token;
}

const registerUser = (username, password, res) => { 

    const users = getUsers();

    if (users.find(u => u.username === username)) {
        return res.status(409).json({ message: 'User already exists!' });
    }

    const hashedPassword = createHash(password);

    const user = { username, password: hashedPassword };

    users.push(user);
};

const getUsers =  () => users;

const getUser = (username) => users.find(x => x.username === username);

// private members
const createHash = (password) => {

    const hash = crypto.createHash("sha512");

    hash.update(password);

    const hashedPassword = hash.digest("hex");
    return hashedPassword;
}

const extractBearerToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

module.exports = {
    isAuthenticated,
    getCurrentUser,
    handleLogin,
    registerUser
};