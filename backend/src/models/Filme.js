import mongoose from "mongoose";

const FilmeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    unique: true,
    require: true,
  },
  categoriaName: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

export default mongoose.model("Filme", FilmeSchema);
