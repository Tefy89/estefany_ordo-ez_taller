const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hola Estefany! Tu proyecto Node.js está funcionando correctamente ✅");
});

server.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
