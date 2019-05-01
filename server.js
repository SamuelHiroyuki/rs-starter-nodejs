const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useNewUrlParser: true
});

requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(8080);
