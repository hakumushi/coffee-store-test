const { setWorldConstructor, } = require("cucumber");
require("dotenv").config();

class CustomWorld {
    constructor() {
        this.context = {};
        this.url = process.env.BACKEND_URL + ":" + process.env.BACKEND_PORT + "/";
    }

    setTo(key, value) {
        this.context[key] = value;
    }

}

setWorldConstructor(CustomWorld);
