const LOCAL_STORAGE_KEY = 'HOHO';

export default {
    set(todos) {
        return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    },
    get() {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    }
}