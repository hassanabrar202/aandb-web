export function setLocalData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function to get data from local storage
export function getLocalData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
export function removeLocalData(key) {
    localStorage.removeItem(key);
}