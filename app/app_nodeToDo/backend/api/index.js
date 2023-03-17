const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const secretKey = 'secret_key';
const app = express();
const crypto = require("crypto");

const checkToken = (req, res, next) => {
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

app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());
//app.use(checkToken);

// login
app.post('/login', (req, res) => {

    const { username, password } = req.body;

    const token = handleLogin(username, password, req, res);

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
app.get('/user', checkToken, (req, res) => {

    const user = getCurrentUser(req, res);

    res.send(user);
});

// get items
app.get('/', checkToken, (req, res) => {

    const { username } = getCurrentUser(req, res);

    const items = getItems(username);

    res.send(items);
});

// get item
app.get('/:id', checkToken, (req, res) => {

    const { username } = getCurrentUser(req, res);

    const id = req.params.id;

    const item = getItem(id, username);

    res.send(item);
});

//delete item
app.delete('/:id', checkToken, (req, res) => {

    const { username } = getCurrentUser(req, res);

    const id = req.params.id;

    deleteItem(id, username);

    const itmes = getItems(username);

    res.send(itmes);
});

// create item
app.post('/', checkToken, (req, res) => {

    const { username } = getCurrentUser(req, res);

    const { id, description, done } = req.body;
    const item = { id, description, done };

    createItem(item, username);

    const itmes = getItems(username);

    res.send(itmes);
});

//update item
app.put('/', checkToken, (req, res) => {

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

const getCurrentUser = (req, res) => {
    const currentUser = req.session.currentUser;
    if (!currentUser) {
        res.sendStatus(401);
    }

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

    req.session.regenerate((err) =>  {
        if (err) next(err)

        req.session.currentUser = username;

        req.session.save((err) => {
            if (err) return next(err)
        })
    })

    return token;
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