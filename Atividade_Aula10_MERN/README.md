\# Atividade Aula 10 — API REST com Node.js, Express e MongoDB



\## Objetivo

Desenvolver uma API REST utilizando Node.js, Express, Mongoose e MongoDB Atlas, implementando as operações CRUD de uma entidade chamada Tarefa.



\## Tecnologias utilizadas

\- Node.js

\- Express

\- MongoDB Atlas

\- Mongoose

\- dotenv

\- Thunder Client



\## Funcionalidades

\- POST /tarefas — Cadastrar uma tarefa.

\- GET /tarefas — Listar todas as tarefas.

\- PUT /tarefas/:id — Atualizar uma tarefa.

\- DELETE /tarefas/:id — Excluir uma tarefa.



\## Validações

O Model Tarefa utiliza campos obrigatórios, limites de caracteres e valores padrão.



A API também trata erros de validação do Mongoose, incluindo ValidationError e CastError, e utiliza `runValidators: true` durante a atualização.



\## Como executar

1\. Instale as dependências com `npm install`.

2\. Crie um arquivo `.env` baseado no `.env.example`.

3\. Configure a variável `MONGO\_URI` com sua conexão do MongoDB Atlas.

4\. Execute `node server.js`.

5\. Acesse `http://localhost:3000/tarefas`.



\## Testes realizados

\- Cadastro de tarefas: 201 Created.

\- Listagem de tarefas: 200 OK.

\- Atualização de tarefas: 200 OK.

\- Exclusão de tarefas: 200 OK.

\- Cadastro com dados inválidos: 400 Bad Request.

\- Identificador inválido: 400 Bad Request.

\- Atualização com título inválido: 400 Bad Request.



\## Resultado

O CRUD foi implementado e testado, com persistência dos dados no MongoDB Atlas e validação das informações enviadas à API.

