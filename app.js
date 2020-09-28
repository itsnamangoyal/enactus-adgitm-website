var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");
const serverless = require("serverless-http");

var app = express();

app.use(bodyParser.json());
app.use(express.static("."));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("view engine", "html");

const astitva = require("./Astitva/");
//astitva page
app.use("/project-astitva", astitva);

//home page
const homePage = require("./Home");
app.use("/", homePage);

module.exports.handler = serverless(app);
