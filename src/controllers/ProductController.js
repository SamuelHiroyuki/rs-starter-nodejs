const Product = require("../models/Product");

class ProductController {
    async get(req, res) {
        const products = await Product.find();

        return res.json(products);
    }

    async getById(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    }

    async post(req, res) {
        const product = await Product.create({
            title: req.body.title,
            description: req.body.description,
            url: req.body.url
        });

        return res.json(product);
    }

    async put(req, res) {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        return res.json(product);
    }

    async delete(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}

module.exports = new ProductController();
