const mongoose = require("mongoose");
require("dotenv/config");

async function removeIndex() {
  try {
    await mongoose.connect(process.env.SECRET_BD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection.db;
    await db.collection('filmes').dropIndex('titulo_1');
    console.log('Índice titulo_1 removido com sucesso!');

    await mongoose.disconnect();
  } catch (err) {
    console.error('Erro ao remover índice:', err);
    await mongoose.disconnect();
  }
}

removeIndex();
