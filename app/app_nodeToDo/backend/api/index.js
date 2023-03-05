const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// get items
app.get('/', (req, res) => {

    handleAuthorization(req, res);

    const items = getItems();

    res.send(items);
});

// get item
app.get('/:id', (req, res) => {

    handleAuthorization(req, res);

    const id = req.params.id;

    const item = getItem(id);

    res.send(item);
});

//delete item
app.delete('/:id', (req, res) => {

    handleAuthorization(req, res);

    const id = req.params.id;

    deleteItem(id);

    const itmes = getItems();

    res.send(itmes);
});

// create item
app.post('/', (req, res) => {

    handleAuthorization(req, res);

    const { id, description, done } = req.body;
    const item = { id, description, done };

    createItem(item);

    const itmes = getItems();

    res.send(itmes);
});

//update item
app.put('/', (req, res) => {

    handleAuthorization(req, res);

    const { id, description, done } = req.body;
    const item = { id, description, done };

    updateItem(item);

    const itmes = getItems();

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
    return req;
}

const getItems = () => items;

const getItem = (id) => items.filter(x => x.id === id);

const deleteItem = (id) => {
    const index = items.findIndex(x => x.id === id);
    if (index !== -1 ) {
        items.splice(index, 1);
    }
};

const createItem = (item) => items.push(item);

const updateItem = (item) => {
    const index = items.findIndex(x => x.id === item.id);
    if (index !== -1 ) {
        items.splice(index, 1, item);
    }
};

const items = [
    {
        id: "abcd",
        description: "some item to do 1",
        done: false
    },
    {
        id: "efg",
        description: "some item to do 2",
        done: false
    },
    {
        id: "hij",
        description: "some item to do 3",
        done: false
    }
]