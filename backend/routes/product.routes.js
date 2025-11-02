import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/", getProducts);

// Crear un producto (POST)
router.post("/", createProduct);

router.put("/:id", updateProduct);

// borrar un producto
router.delete("/:id", deleteProduct);

export default router;