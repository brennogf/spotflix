import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.json());
app.use(routes);

app.use(express.static(path.join(__dirname, "../../frontend/build")))

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});
