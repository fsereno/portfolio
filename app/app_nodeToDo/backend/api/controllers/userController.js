const userService = require('../services/userService');

// login
const login = (req, res) => {

    try {
        const { username, password } = req.body;

        const token = userService.handleLogin(username, password, req);

        res.send(token);

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// logout
const logout = (req, res) => {

    try {
        console.log("trying to logout")
        userService.handleLogout(req);

        console.log("all good")
        res.status(200).send();

    } catch (error) {
        console.log(error)
        res.status(400).send({ message: error.message });
    }
};

//register
const register = (req, res) => {

    try {
        const { username, password } = req.body;

        userService.registerUser(username, password);

        res.send(username);

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// get user
const getUser = (req, res) => {

    try {
        const user = userService.getCurrentUser(req);

        res.send(user);

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = {
    login,
    logout,
    register,
    getUser
}