const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const secretKey = 'secret_key';
const app = express();

const {
    isAuthenticated,
    getCurrentUser,
    handleLogin,
    registerUser,
} = require('./services/userService');

const {
    getItems,
    getItem,
    deleteItem,
    createItem,
    updateItem
} = require('./services/itemsSerice');

app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());

// login
app.post('/login', (req, res) => {

    const { username, password } = req.body;

    const token = handleLogin(username, password, req, res);

    res.send(token);
});

//register
app.post('/register', (req, res) => {

    const { username, password } = req.body;

    registerUser(username, password, res);

    res.send(username);
});

// get user
app.get('/user', isAuthenticated, (req, res) => {

    const user = getCurrentUser(req, res);

    res.send(user);
});

// get items
app.get('/', isAuthenticated, (req, res) => {

    const { username } = getCurrentUser(req, res);

    const items = getItems(username);

    res.send(items);
});

// get item
app.get('/:id', isAuthenticated, (req, res) => {

    const { username } = getCurrentUser(req, res);

    const id = req.params.id;

    const item = getItem(id, username);

    res.send(item);
});

//delete item
app.delete('/:id', isAuthenticated, (req, res) => {

    const { username } = getCurrentUser(req, res);

    const id = req.params.id;

    deleteItem(id, username);

    const itmes = getItems(username);

    res.send(itmes);
});

// create item
app.post('/', isAuthenticated, (req, res) => {

    const { username } = getCurrentUser(req, res);

    const { id, description, done } = req.body;
    const item = { id, description, done };

    createItem(item, username);

    const itmes = getItems(username);

    res.send(itmes);
});

//update item
app.put('/', isAuthenticated, (req, res) => {

    const { username } = getCurrentUser(req, res);

    const { id, description, done } = req.body;
    const item = { id, description, done };

    updateItem(item, username);

    const items = getItems(username);

    res.send(items);
});

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});