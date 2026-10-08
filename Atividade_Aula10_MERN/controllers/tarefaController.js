const Tarefa = require("../models/Tarefa");

// LISTAR TODAS AS TAREFAS
exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.find();
    res.status(200).json(tarefas);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
};

// CRIAR UMA TAREFA
exports.criarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.create(req.body);
    res.status(201).json(tarefa);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

// ATUALIZAR UMA TAREFA
exports.atualizarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!tarefa) {
      return res.status(404).json({
        mensagem: "Tarefa não encontrada"
      });
    }

    res.status(200).json(tarefa);
  } catch (erro) {
    res.status(
      erro.name === "CastError" || erro.name === "ValidationError"
        ? 400
        : 500
    ).json({ erro: erro.message });
  }
};

// EXCLUIR UMA TAREFA
exports.excluirTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndDelete(req.params.id);

    if (!tarefa) {
      return res.status(404).json({
        mensagem: "Tarefa não encontrada"
      });
    }

    res.status(200).json({
      mensagem: "Tarefa excluída com sucesso!"
    });
  } catch (erro) {
    res.status(erro.name === "CastError" ? 400 : 500)
      .json({ erro: erro.message });
  }
};