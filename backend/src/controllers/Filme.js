import Categoria from "../models/Categoria.js";
import Filme from "../models/Filme.js";

export default {
  async store(req, res) {
    try {
      const { categoriaName, titulo, url } = req.body;

      // Verificar se a categoria existe
      const categoriaExiste = await Categoria.findOne({ name: categoriaName });

      if (!categoriaExiste) {
        return res.status(400).json({ error: "Categoria não encontrada. Por favor, crie a categoria primeiro." });
      }

      const filmes = await Filme.create({
        categoriaName,
        titulo,
        url,
      });

      res.json(filmes);
    } catch (err) {
      res.json({ error: err.message || "Erro interno do servidor" });
    }
  },

  async index(req, res) {
    try {
      const categorias = await Categoria.find();
      const filmes = await Filme.find();
      const finalResponse = [];

      categorias.map((categoria) => {
        finalResponse.push({
          _id: categoria._id,
          name: categoria.name,
          filmes: [],
        });
      });

      finalResponse.map((atualFinal) => {
        filmes.map((atualFilme) => {
          if (atualFilme.categoriaName === atualFinal.name) {
            atualFinal.filmes.push({
              _id: atualFilme._id,
              titulo: atualFilme.titulo,
              url: atualFilme.url,
            });
          }
        });
      });

      res.json(finalResponse);
    } catch (err) {
      res.json({ error: err });
    }
  },

  async show(req, res) {
    try {
      const categorias = await Categoria.find({
        name: req.params.categoria,
      });
      const filmes = await Filme.find();
      const finalResponse = [];

      categorias.map((categoria) => {
        finalResponse.push({
          name: categoria.name,
          filmes: [],
        });
      });

      finalResponse.map((atualFinal) => {
        filmes.map((atualFilme) => {
          if (atualFilme.categoriaName === atualFinal.name) {
            atualFinal.filmes.push({
              titulo: atualFilme.titulo,
              url: atualFilme.url,
            });
          }
        });
      });

      res.json(finalResponse);
    } catch (err) {
      res.json({ error: err });
    }
  },

  async update(req, res) {
    try {
      const { titulo, url, categoriaName } = req.body;
      const { id } = req.params;

      console.log("Tentativa de update:", { id, titulo, url, categoriaName });

      // Verificar se a categoria existe
      console.log("Buscando categoria:", categoriaName);
      const categoriaExiste = await Categoria.findOne({ name: categoriaName });
      console.log("Categoria encontrada:", categoriaExiste);

      if (!categoriaExiste) {
        console.log("Categoria não encontrada:", categoriaName);
        return res.status(400).json({ error: "Categoria não encontrada. Por favor, crie a categoria primeiro." });
      }

      const filme = await Filme.findByIdAndUpdate(
        id,
        {
          titulo,
          url,
          categoriaName,
        },
        { new: true }
      );

      if (!filme) {
        return res.json({ error: "Filme não encontrado" });
      }

      console.log("Filme atualizado com sucesso:", filme);
      res.json(filme);
    } catch (err) {
      console.log("Erro no update:", err);
      res.json({ error: err.message || "Erro interno do servidor" });
    }
  },

  async destroy(req, res) {
    try {
      await Filme.findByIdAndDelete(req.params.id);

      return res.json({ success: true });
    } catch (err) {
      return res.json({ error: true });
    }
  },
};
