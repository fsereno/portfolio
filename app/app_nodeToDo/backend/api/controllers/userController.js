const userService = require('../services/userService');

/**
 * Handles user login.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const login = (req, res) => {

    try {
        const { username, password } = req.body;

        console.log(username)
        console.log(password)

        const token = userService.handleLogin(username, password, req);

        console.log("user login matched!")

        console.log(token)

        res.send({ token });

    } catch (error) {
        console.log(error.message);
        res.status(400).send({ message: error.message });
    }
};

/**
 * Handles user logout.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const logout = (req, res) => {

    try {
        userService.handleLogout(req);

        res.status(200).send();

    } catch (error) {
        console.log(error)
        res.status(400).send({ message: error.message });
    }
};

/**
 * Handles user registration.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const register = (req, res) => {

    try {
        const { username, password } = req.body;

        userService.registerUser(username, password);

        res.send({ username });

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

/**
 * Gets the current user.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getUser = (req, res) => {

    try {
        const user = userService.getCurrentUser(req);

        console.log("got user")

        console.log("user");

        res.send({ user });

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = {
    login,
    logout,
    register,
    getUser
};
