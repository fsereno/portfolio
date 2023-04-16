const itemsService = require('../services/itemsService');
const userService = require('../services/userService');

/**
* Retrieves all items belonging to the current user and sends them as a response
* @param {Object} req - Express request object
* @param {Object} res - Express response object
* @returns {Array} The updated list of items for the current user
*/
const getAllItems = (req, res) => {

    try {
        const { username } = userService.getCurrentUser(req, res);

        const items = itemsService.getItems(username);

        res.send(items);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

/**
* Get an item with the given ID and associated with the current user.
* @param {Object} req - The request object.
* @param {Object} res - The response object.
* @returns {Object} The object
*/
const getItem = (req, res) => {

    try {
        const { username } = userService.getCurrentUser(req, res);

        const id = req.params.id;

        const item = itemsService.getItem(id, username);

        res.send(item);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

/**
 * Deletes an item with the specified ID for the current user and returns the updated list of items
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Array} The updated list of items for the current user
 */
const deleteItem = (req, res) => {

    try {
        const { username } = userService.getCurrentUser(req, res);

        const id = req.params.id;

        itemsService.deleteItem(id, username);

        const itmes = itemsService.getItems(username);

        res.send(itmes);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

/**
 * Create a new item for the current user and return the updated list of items.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const addItem = (req, res) => {

    try {
        const { username } = userService.getCurrentUser(req, res);

        const { id, description, done } = req.body;
        const item = { id, description, done };

        itemsService.createItem(item, username);

        const itmes = itemsService.getItems(username);

        res.send(itmes);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

/**
 * Updates an item for the authenticated user.
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object returned to the client.
 * @returns {Object} - The updated items list for the authenticated user.
 */
const updateItem = (req, res) => {

    try {
        const { username } = userService.getCurrentUser(req, res);

        const { id, description, done } = req.body;
        const item = { id, description, done };

        itemsService.updateItem(item, username);

        const items = itemsService.getItems(username);

        res.send(items);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = {
    getAllItems,
    getItem,
    deleteItem,
    addItem,
    updateItem
}
