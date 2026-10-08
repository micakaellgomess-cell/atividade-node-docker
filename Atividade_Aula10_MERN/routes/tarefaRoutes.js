const express = require("express");
const router = express.Router();

const {
  listarTarefas,
  criarTarefa,
  atualizarTarefa,
  excluirTarefa
} = require("../controllers/tarefaController");

// Listar tarefas
router.get("/", listarTarefas);

// Criar tarefa
router.post("/", criarTarefa);

// Atualizar tarefa
router.put("/:id", atualizarTarefa);

// Excluir tarefa
router.delete("/:id", excluirTarefa);

module.exports = router;