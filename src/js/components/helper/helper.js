const host = 'http://api.tabassum.site';

function localStorageGetItem(key) {
    return localStorage.getItem(key);
}

function localStorageSetItem(key, value) {
    localStorage.setItem(key, value);
}

function localStorageRemoveItem(key) {
    return localStorage.removeItem(key);
}