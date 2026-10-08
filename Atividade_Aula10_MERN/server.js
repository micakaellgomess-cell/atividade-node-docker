require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const tarefaRoutes = require("./routes/tarefaRoutes");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rota inicial
app.get("/", (req, res) => {
  res.json({ mensagem: "API funcionando!" });
});

// Rotas das tarefas
app.use("/tarefas", tarefaRoutes);

// Conexão com MongoDB
async function iniciarServidor() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB conectado com sucesso!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (erro) {
    console.error("Erro de conexão:", erro.message);
    process.exit(1);
  }
}

iniciarServidor();