const ProductServices = require("../services/product.services");


const createProduct = async (req, res, next)=>{
    try {
        const newProduct = req.body;
        const productCreated = await ProductServices.create(newProduct);
        res.status(201).json(productCreated)
    } catch (error) {
        next(error); 
        
    }
}

const updateProduct = async (req, res, next)=>{
    try {
        const {id} = req.params;   
        const {description} = req.body;
        await ProductServices.update(id, {description});
        res.status(204).send()
    } catch (error) {
        next(error);
    }
}


module.exports ={
    createProduct, 
    updateProduct 
}