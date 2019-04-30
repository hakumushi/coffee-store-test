const { setWorldConstructor, } = require("cucumber");
require("dotenv").config();

class CustomWorld {
    constructor() {
        this.context = {};
        this.url = process.env.URL;
    }

    setTo(key, value) {
        this.context[key] = value;
    }

}

setWorldConstructor(CustomWorld);
