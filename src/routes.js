const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/Products", ProductController.get);
routes.get("/Products/:id", ProductController.getById);
routes.post("/Products", ProductController.post);
routes.put("/Products/:id", ProductController.put);
routes.delete("/Products/:id", ProductController.delete);

module.exports = routes;
