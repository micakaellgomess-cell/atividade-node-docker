const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, "O título é obrigatório"],
      trim: true,
      minlength: 3,
      maxlength: 100
    },

    descricao: {
      type: String,
      trim: true,
      maxlength: 500,
      default: ""
    },

    concluida: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Tarefa", tarefaSchema);