const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useNewUrlParser: true
});

requireDir("./src/models");

const Product = mongoose.model("Product");

app.get("/", (req, res) => {
    Product.create({
        title: "Produto 1",
        description: "Descrição",
        url: "http://github.com/SamuelHiroyuki/rs-starter-nodejs"
    });
    return res.send("Hello World");
});

app.listen(8080);
