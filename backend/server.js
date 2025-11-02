import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import http from "http";
import path from "path";

import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// Middleware para poder leer JSON en las peticiones
app.use(express.json());

// Ruta base

app.use("/api/products", productRoutes);    

// obtener todos los productos de la base de datos
if (process.env.NODE_ENV === 'production') {
  // Sirve los archivos estáticos de la carpeta dist
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  // Redirige todas las rutas al index.html de Vite
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}


// Iniciar el servidor
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
