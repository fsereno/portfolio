/**
 * The items array
*/
const items = [
    {
        id: "example",
        username: "user1",
        description: "some item to do 1",
        done: false,
        modifiedOn: new Date(),
        createdOn: new Date()
    }
]

/**
* Returns an array of items filtered by the provided username.
* @param {string} username - The username to filter items by.
* @returns {Array} An array of items filtered by the provided username.
*/
const getItems = (username) => {

    if (!username) throw new Error("Invalid username provided");

    const filteredItems = items.filter(x => x.username === username);

    if (!filteredItems || filteredItems.length === 0) return [];

    return filteredItems;
};

/**
 * Get a specific item by its ID and the associated username
 * @param {string} id - The ID of the item to get
 * @param {string} username - The associated username for the item
 * @returns {object} - The item object that matches the given ID and username
 * @throws {Error} - Throws an error if the provided item ID or username is invalid, or if the item is not found
 */
const getItem = (id, username) => {

    if (!id) throw new Error("Invalid item ID provided");
    if (!username) throw new Error("Invalid username provided");

    const filteredItems = items.find(x => x.id === id && x.username === username);

    if (!filteredItems) throw new Error("Item not found for the given ID and username");

    return filteredItems;
};

/**
* Deletes an item from the list of items with the specified ID and username.
* @param {string} id - The ID of the item to delete.
* @param {string} username - The username associated with the item to delete.
* @throws {Error} If the ID or username provided are invalid or if the item is not found.
*/
const deleteItem = (id, username) => {

    if (!id) throw new Error("Invalid item ID provided");
    if (!username) throw new Error("Invalid username provided");

    const index = items.findIndex(x => x.id === id && x.username === username);

    if (index !== -1) {
        items.splice(index, 1);
    } else {
        throw new Error("Item not found for the given ID and username");
    }
};

/**
* Creates a new item and adds it to the list of items.
* @param {object} item - The item object to be created. It should have an 'id', 'description' and 'done' property.
* @param {string} username - The username of the item owner.
* @throws {Error} If the 'item' parameter is not a valid object or if it's missing the 'id', 'description' or 'done' properties.
* @throws {Error} If the 'username' parameter is not provided.
*/
const createItem = (item, username) => {

    if (!item || typeof item !== 'object') throw new Error('Invalid item');
    if (!item.id || !item.description) throw new Error('Item id and description are required');
    if (typeof item.done !== 'boolean') throw new Error('Item done must be a boolean');

    item.username = username;
    item.modifiedOn = new Date();
    item.createdOn = new Date();

    items.push(item);
};

/**
* Updates an existing item for the given username.
* @param {object} item - The item object to update.
* @param {string} username - The username of the user updating the item.
* @throws {Error} If the item object is invalid, item ID is missing, or username is missing.
* @throws {Error} If the item cannot be found for the given ID and username.
* @returns {void}
*/
const updateItem = (item, username) => {

    if (!item || typeof item !== 'object' || Array.isArray(item)) throw new Error("Invalid item object provided");
    if (!item.id) throw new Error("Invalid item ID provided");
    if (!username) throw new Error("Invalid username provided");

    const index = items.findIndex(x => x.id === item.id && x.username === username);

    if (index !== -1) {
        const existing = items.find(x => x.id === item.id && x.username === username);
        if (existing) {
            item.modifiedOn = new Date();
            items.splice(index, 1, { ...existing, ...item });
        } else {
            throw new Error("Item not found for the given ID and username");
        }
    } else {
        throw new Error("Item not found for the given ID and username");
    }
};

module.exports = {
    getItems,
    getItem,
    deleteItem,
    createItem,
    updateItem
}
