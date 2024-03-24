const addToLocalStorage = () => {
    const keyInput = document.getElementById('key');
    const key = keyInput.value;
    const valueInput = document.getElementById('value');
    const value = valueInput.value;
    if (key && value) {
        localStorage.setItem(key, value);
    }
    keyInput.value = '';
    valueInput.value = '';
};