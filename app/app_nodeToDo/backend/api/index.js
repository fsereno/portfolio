const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secretKey = 'secret_key';
const app = express();

app.use(bodyParser.json());

// login
app.post('/login', (req, res) => {

    const { username } = req.body;

    handleLogin(username, res);

    const payload = {
        username: username
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    loginUser(username);

    res.send(token);
});

//register
app.post('/register', (req, res) => {

    const { username } = req.body;

    if (users.find(u => u.username === username)) {
        return res.status(409).json({ message: 'User already exists!' });
    }

    registerUser({ username });

    res.status(200).json({ message: 'User created!' });
});

// get items
app.get('/', (req, res) => {

    const { username } = handleAuthorization(req, res);

    const items = getItems(username);

    res.send(items);
});

// get item
app.get('/:id', (req, res) => {

    const { username } = handleAuthorization(req, res);

    const id = req.params.id;

    const item = getItem(id, username);

    res.send(item);
});

//delete item
app.delete('/:id', (req, res) => {

    const { username } = handleAuthorization(req, res);

    const id = req.params.id;

    deleteItem(id, username);

    const itmes = getItems(username);

    res.send(itmes);
});

// create item
app.post('/', (req, res) => {

    const { username } = handleAuthorization(req, res);

    const { id, description, done } = req.body;
    const item = { id, description, done };

    createItem(item, username);

    const itmes = getItems(username);

    res.send(itmes);
});

//update item
app.put('/', (req, res) => {

    const { username } = handleAuthorization(req, res);

    const { id, description, done } = req.body;
    const item = { id, description, done };

    updateItem(item, username);

    const itmes = getItems(username);

    res.send(itmes);
});

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});

const handleAuthorization = (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).send('Unauthorized')
    };

    const bearerToken = extractBearerToken(req);

    return jwt.verify(bearerToken, secretKey, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid bearer token' });
        }

        const { username } = decodedToken;

        const loggedInUser = getLoggedInUser();

        if (username !== loggedInUser.username) {
            return res.status(401).json({ message: 'Unauthorized!' });
        }

        return { username };
    });
}

const handleLogin = (username, res) => {
    const users = getUsers();
    if (!users.find(x => x.username === username)) {
        res.status(401).send('User not found!')
    };
}

const extractBearerToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    }
    return null;
}

const registerUser = (user) => users.push(user)

const getUsers = () => users;

const getLoggedInUser = () => user;

const loginUser = (username) => {
    user = { username }
}

const getItems = (username) => items.filter(x => x.username === username);

const getItem = (id, username) => items.filter(x => x.id === id && x.username === username);

const deleteItem = (id, username) => {
    const index = items.findIndex(x => x.id === id && x.username === username);
    if (index !== -1 ) {
        items.splice(index, 1);
    }
};

const createItem = (item, username) => {
    item.username = username;
    items.push(item);
};

const updateItem = (item, username) => {
    const index = items.findIndex(x => x.id === item.id, item.username === username);
    if (index !== -1 ) {
        items.splice(index, 1, item);
    }
};

let user = {};

const users = [
    {
        username: "user1"
    },
    {
        username: "user2"
    }
]

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