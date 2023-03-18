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
    createHash,
    getUsers
} = require("./services/userService");

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

    const users = getUsers();

    if (users.find(u => u.username === username)) {
        return res.status(409).json({ message: 'User already exists!' });
    }

    const hashedPassword = createHash(password);

    registerUser({ username, password: hashedPassword });

    res.status(200).json({ message: 'User created!' });
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

const getItems = (username) => items.filter(x => x.username === username);

const getItem = (id, username) => items.filter(x => x.id === id && x.username === username);

const deleteItem = (id, username) => {
    const index = items.findIndex(x => x.id === id && x.username === username);
    if (index !== -1) {
        items.splice(index, 1);
    }
};

const createItem = (item, username) => {
    item.username = username;
    item.modifiedOn = new Date();
    item.createdOn = new Date();
    items.push(item);
};

const updateItem = (item, username) => {
    const index = items.findIndex(x => x.id === item.id, item.username === username);
    if (index !== -1) {
        const existing = items.find(x => x.id === item.id, item.username === username);
        if (existing) {
            item.modifiedOn = new Date();
            items.splice(index, 1, { ...existing, ...item });
        }
    }
};

const items = [
    {
        id: "abcd",
        username: "user1",
        description: "some item to do 1",
        done: false,
        modifiedOn: undefined
    },
    {
        id: "efg",
        username: "user1",
        description: "some item to do 2",
        done: false,
        modifiedOn: undefined
    },
    {
        id: "hij",
        username: "user1",
        description: "some item to do 3",
        done: false,
        modifiedOn: undefined
    },
    {
        id: "abcd",
        username: "user2",
        description: "some item to do 1",
        done: false,
        modifiedOn: undefined
    },
    {
        id: "efg",
        username: "user2",
        description: "some item to do 2",
        done: false,
        modifiedOn: undefined
    },
    {
        id: "hij",
        username: "user2",
        description: "some item to do 3",
        done: false,
        modifiedOn: undefined
    }
]