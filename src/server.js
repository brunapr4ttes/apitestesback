import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Conexão
import conn from "./config/conn.js";

// Rotas


// Importação dos models


const PORT = process.env.PORT || 3333;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "public")));

conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Servidor rodando ON port:", PORT);
    });
  })
  .catch((err) => console.error(err));


app.use((request, response) => {
  response.status(404).json({ msg: "Rota não encontrada" });
});
