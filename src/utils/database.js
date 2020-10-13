const loadItems = () => {
    if (localStorage.getItem('items')) {
        return JSON.parse(localStorage.getItem('items'));
    }

    return []
}

const saveItems = (items) => {
    if (items.length === 0) {
        localStorage.removeItem('items');
    } else {
        localStorage.setItem('items', JSON.stringify(items));
    }
}

export default { loadItems, saveItems }