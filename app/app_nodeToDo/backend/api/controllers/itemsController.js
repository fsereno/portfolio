const itemsService = require('../services/itemsSerice');
const userService = require('../services/userService');

// get all items
const getAllItems = (req, res) => {

    const { username } = userService.getCurrentUser(req, res);

    const items = itemsService.getItems(username);

    res.send(items);
};

// get item
const getItem = (req, res) => {

    const { username } = userService.getCurrentUser(req, res);

    const id = req.params.id;

    const item = itemsService.getItem(id, username);

    res.send(item);
};

//delete item
const deleteItem = (req, res) => {

    const { username } = userService.getCurrentUser(req, res);

    const id = req.params.id;

    itemsService.deleteItem(id, username);

    const itmes = itemsService.getItems(username);

    res.send(itmes);
};

// create item
const addItem = (req, res) => {

    const { username } = userService.getCurrentUser(req, res);

    const { id, description, done } = req.body;
    const item = { id, description, done };

    itemsService.createItem(item, username);

    const itmes = itemsService.getItems(username);

    res.send(itmes);
};

//update item
const updateItem = (req, res) => {

    const { username } = userService.getCurrentUser(req, res);

    const { id, description, done } = req.body;
    const item = { id, description, done };

    itemsService.updateItem(item, username);

    const items = itemsService.getItems(username);

    res.send(items);
};

module.exports = {
    getAllItems,
    getItem,
    deleteItem,
    addItem,
    updateItem
}