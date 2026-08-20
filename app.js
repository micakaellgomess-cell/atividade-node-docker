const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Servidor Node funcionando!');
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});