import PRODUCT from "../models/productModel.js";

// C -- for create in CRUD

export const createProduct = async (req,res)=>{
    const {title,image,description,rating,price,category,duration} = req.body;
    if(!title || !image || !rating || !description || !category || !price || !duration ){
        res.status(400).json({success:false,errMsg:"all fields are required"})
        return
    }
    try {
        const product = await PRODUCT.create(req.body);
        res.status(200).json({success:true,message:"product created successfully",product})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Insert many

export const products = async(req,res)=>{
    try {
      const products = await PRODUCT.insertMany(req.body);
      res.status(201).json({sucess:true,message:"products created sucessfully", products});
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  // get products

  export const allProducts = async(req,res)=> {
    try {
        const products = await PRODUCT.find();
        res.status(200).json({sucess:true,message:"all products", products})
    } catch (error) {
        res.status(500).json(error.message)
    }
  }

  // single products

export const product = async(req,res)=> {
    try {
        const product = await PRODUCT.findById(req.params.productId);
        if(!product){
            res.status(404).json({sucess:false,errMsg:"product not found"})
        }
        res.status(200).json({sucess:true,message:"product found",product})
    } catch (error) {
        res.status(500).json(error.message) 
    }
}

// search product

export const searchProduct = async(req,res)=> {
    try {
        const {query} = req.query;
        if(!query){
            res.status(400).json({success:false,errMsg:"Search query is required"})
            return;
        }
        const products = await PRODUCT.find({
            $or:[
                {title:{$regex: query, $options: "i"}},
                {category:{$regex: query, $options: "i"}},
            ]
           
        })
        if(!products || products.length === 0 ){
            res.status(400).json({success:false,errMsg:"No title or category found"});
            return
        }
        res.status(200).json({success:true,products})
    } catch (error) {
        res.status(500).json(error.message)  
    }
}