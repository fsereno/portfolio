const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const secretKey = 'secret_key';
const app = express();
const crypto = require("crypto");

app.use(bodyParser.json());

// login
app.post('/login', (req, res) => {

    const { username, password } = req.body;

    handleLogin(username, password, res);

    const payload = {
        username: username
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    loginUser(username, token);

    res.send(token);
});

//register
app.post('/register', (req, res) => {

    const { username, password } = req.body;

    if (users.find(u => u.username === username)) {
        return res.status(409).json({ message: 'User already exists!' });
    }

    const hashedPassword = createHash(password);

    registerUser({ username, password: hashedPassword });

    res.status(200).json({ message: 'User created!' });
});

// get user
app.get('/user', (req, res) => {

    const { username } = handleAuthorization(req, res);

    const user = getCurrentUser(username);

    res.send(user);
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

    const items = getItems(username);

    res.send(items);
});

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});

const handleAuthorization = (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Unauthorized' })
    };

    const bearerToken = extractBearerToken(req);

    return jwt.verify(bearerToken, secretKey, (err, decodedToken) => {

        if (err) {
            return res.status(401).json({ message: 'Invalid bearer token' });
        }

        const { username } = decodedToken;

        if (username === undefined) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const loggedInUser = getCurrentUser(username);

        if (loggedInUser === undefined || username !== loggedInUser.username) {
            return res.status(401).json({ message: 'Unauthorized!' });
        }

        return { username };
    });
}

const handleLogin = (username, password, res) => {
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
}

const extractBearerToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    }
    return null;
}

const registerUser = (user) => users.push(user)

const getUsers = () => users;

const getUser = (username) => users.find(x => x.username === username);

const getCurrentUser = (username) => {
    if (user.username === username) {
        return user;
    } else {
        return undefined;
    }
}

const loginUser = (username, token) => {
    user = { username, token }
}

const createHash = (password) => {
    // Create a new Hash object with the "sha512" algorithm
    const hash = crypto.createHash("sha512");
    // Update the Hash object with the password
    hash.update(password);
    // Get the hashed password as a hexadecimal string
    const hashedPassword = hash.digest("hex");
    return hashedPassword;
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
    item.modifiedOn = new Date();
    item.createdOn = new Date();
    items.push(item);
};

const updateItem = (item, username) => {
    const index = items.findIndex(x => x.id === item.id, item.username === username);
    if (index !== -1 ) {
        const existing = items.find(x => x.id === item.id, item.username === username);
        item.modifiedOn = new Date();
        items.splice(index, 1, {...existing, ...item});
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