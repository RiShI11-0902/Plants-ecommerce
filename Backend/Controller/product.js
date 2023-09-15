const express = require("express")
const model = require("../Modal/product")
const Product = model.Product;

exports.createProduct = async (req,res)=>{
    const product =  new Product(req.body);
    try {
        await product.save()
        res.send(product);
    } catch (error) {
        res.send(error)
    }
}

exports.getAllProducts = async (req,res)=>{
    const product = await Product.find()
    res.json(product);
}

exports.getProductById = async (req,res) =>{
    console.log(req.params.id);
    try {
        const product = await Product.findById(req.params.id);
        res.json(product)
    } catch (error) {
        
    }
}