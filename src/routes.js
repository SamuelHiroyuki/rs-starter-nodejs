const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/Products", ProductController.get);

module.exports = routes;
