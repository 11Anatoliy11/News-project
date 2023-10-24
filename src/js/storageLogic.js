const saveToLocal = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error('Set state error: ', error.message);
    }
};

const loadFromLocal = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (error) {
        console.error('Get state error: ', error.message);
    }
};

export { saveToLocal, loadFromLocal };