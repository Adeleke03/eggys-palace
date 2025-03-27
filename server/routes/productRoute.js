import express from "express";
import { allProducts, createProduct, product, products, searchProduct } from "../controllers/productController.js";
const router = express.Router();

// post request
router.post("/create",createProduct);

// insert many
router.post('/products', products );

//get all products
router.get("/all-products", allProducts);

// single product
router.get("/:productId", product)

// search 
router.get("/products/search",searchProduct)


export default router;