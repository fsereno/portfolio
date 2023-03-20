const userService = require('../services/userService');

// login
const login = (req, res) => {

    const { username, password } = req.body;

    const token = userService.handleLogin(username, password, req, res);

    res.send(token);
};

//register
const register = (req, res) => {

    const { username, password } = req.body;

    userService.registerUser(username, password, res);

    res.send(username);
};

// get user
const getUser = (req, res) => {

    const user = userService.getCurrentUser(req, res);

    res.send(user);
};

module.exports = {
    login,
    register,
    getUser
}