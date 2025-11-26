const express = require("express");
const cors = require("cors");
const mysql = require("./database/mysql-pool");
const app = express();
const port = 3000;

require("dotenv").config();

// Configuración para subir límite de respuesta
app.use(express.json({ limit: "25mb" }));
// Para evitar errores de diferente origen cuando se hace la petición
app.use(cors());

// Configuración para escuchar en el puerto definido
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Endpoints

// COGER TODAS LAS RECETAS
app.get("/recipes", async (req, res) => {
    try {
        const query = "SELECT * FROM recipes WHERE deleted_at IS NULL";

        const connection = await mysql.getConnection();
        const data = await connection.query(query);
        res.json(data[0]);
    } catch {
        res.send("Algo ha ido mal");
    }
});

// COGER UNA RECETA ESPECÍFICA
app.get("/recipe/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const query = "SELECT * FROM recipes WHERE id = ?"

        const connection = await mysql.getConnection();
        const data = await connection.query(query, [id]);

        res.json(data[0]);
    } catch {
        res.send("Algo ha ido mal");
    }
});

// CREAR UNA RECETA
app.post("/recipe", async (req, res) => {
    try {
        const { name, ingredients, instructions } = req.body;

        const query = "INSERT INTO recipes (name, ingredients, instructions) VALUES ( ?, ?, ?)";

        const connection = await mysql.getConnection();
        await connection.query(query, [name, ingredients, instructions]);

        res.status(201).send("Receta creada");
    } catch {
        res.send("Algo ha ido mal");
    }
});
