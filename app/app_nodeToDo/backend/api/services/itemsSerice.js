
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

module.exports = {
    getItems,
    getItem,
    deleteItem,
    createItem,
    updateItem
}