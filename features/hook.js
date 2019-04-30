const { AfterAll, BeforeAll, } = require("cucumber");
const mongoose = require("mongoose");
require("dotenv").config();

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb://" + process.env.DATABASE_USER + ":" + process.env.DATABASE_PASSWORD + process.env.DATABASE_HOST, { useNewUrlParser: true, });
let Coffee = mongoose.model("Coffees", new mongoose.Schema({}));

BeforeAll(async () => {
    await Coffee.deleteMany({ _id: { $ne: null, }, }, () => { });
});

AfterAll( () => {
    mongoose.connection.close();
});
