class Store {
    constructor() {
        this.container = {};
    }

    get(key) {
        return this.container[key];
    }

    set(key, val) {
        this.container[key] = val;
    }

    unset(key) {
        delete this.container[key];
    }
}