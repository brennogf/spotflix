import { Router } from "express";
import Categoria from "./controllers/Categoria.js";
import Filme from "./controllers/Filme.js";

const routes = Router();

routes.get("/categorias", Categoria.index);
routes.post("/categorias", Categoria.store);
routes.delete("/categorias/:id", Categoria.destroy);
routes.put("/categorias/:id", Categoria.update);

routes.get("/filmes", Filme.index);
routes.get("/filmes/:categoria", Filme.show);
routes.post("/filmes", Filme.store);
routes.put("/filmes/:id", Filme.update);
routes.delete("/filmes/:id", Filme.destroy);

export default routes;
