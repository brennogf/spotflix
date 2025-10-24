import Categoria from "../models/Categoria.js";

export default {
  async store(req, res) {
    try {
      const { name } = req.body;

      const categorias = await Categoria.create({
        name,
      });

      res.json(categorias);
    } catch (err) {
      res.json({ error: err });
    }
  },

  async index(req, res) {
    try {
      const categorias = await Categoria.find();

      res.json(categorias);
    } catch (err) {
      res.json({ error: err });
    }
  },

  async destroy(req, res) {
    try {
      await Categoria.findByIdAndDelete(req.params.id);

      return res.json({ success: true });
    } catch (err) {
      return res.json({ error: true });
    }
  },

  async update(req, res) {
    try {
      await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json({ success: true });
    } catch (err) {
      return res.json({ error: true });
    }
  },
};
