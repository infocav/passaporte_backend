require("dotenv-safe").config({
    path: process.env.NODE_ENV === "development" ? ".env.development" : ".env"
});
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
var bodyParser = require('body-parser');


var jwt = require('jsonwebtoken');
console.log(process.env.PORT);
console.log(process.env.USERDB);
console.log(process.env.PASSWORD);
console.log(process.env.DATABASE);
console.log(process.env.DATABASE_URL);
console.log(process.env.DIALECT);
const app = express();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.use("/api", routes);
app.listen(process.env.PORT);