const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const { isAuthenticated } = require('./services/userService');

const { handleHealthcheck } = require('./controllers/healthcheckController');

const {
    login,
    logout,
    register,
    getUser
} = require('./controllers/userController');

const {
    getAllItems,
    getItem,
    deleteItem,
    addItem,
    updateItem
} = require('./controllers/itemsController');

const SECRET_KEY = process.env.SECRET_KEY || 'secret_key';
const PORT = process.env.PORT || 3006;

// Middleware
const app = express();

app.use(session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());

// Routing

// healthcheck
app.get('/healthcheck', handleHealthcheck)

// login
app.post('/login', login);

// logout
app.get('/logout', isAuthenticated, logout);

// register
app.post('/register', register);

// get user
app.get('/user', isAuthenticated, getUser);

// get items
app.get('/', isAuthenticated, getAllItems);

// get item
app.get('/:id', isAuthenticated, getItem);

//delete item
app.delete('/:id', isAuthenticated, deleteItem);

// create item
app.post('/', isAuthenticated, addItem);

//update item
app.put('/', isAuthenticated, updateItem);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});