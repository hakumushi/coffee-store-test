"use strict";

const axios = require("axios");
const Promise = require("promise");

const CoffeeApi = {
    createCoffee(url, coffee) {
        return new Promise((resolve, reject) => {
            axios.post(url + "coffee", coffee)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
};

module.exports = {
    CoffeeApi,
};
