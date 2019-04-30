const { When, Then, setDefaultTimeout, } = require("cucumber");
const { expect, } = require("chai");
const { CoffeeApi, } = require("../apis/coffeeApi");
const { resolve, } = require("promise");

setDefaultTimeout(10 * 1000);

When("a user registers a coffee with fields {string} and values {string}", async function (fields, values) {
    let coffee = {
        "name": "Cosi",
        "intensity": 4,
        "cupSize": 40,
        "aromaticProfile": "Balanceado",
        "aromaticNotes": "Cereais / Frutas",
        "bitterness": 2,
        "acidity": 3,
        "body": 2,
        "roasting": 2,
    };
    coffee[fields] = values;
    let promise = resolve(CoffeeApi.createCoffee(this.url, coffee).then((response) => {
        return response;
    }).catch((error) => {
        return error.response;
    }));
    let json = await promise;
    this.setTo("coffee", json);
});

Then("the status code returned is {int}", function (statusCode) {
    expect(this.context.coffee.status).to.eql(statusCode);
});
