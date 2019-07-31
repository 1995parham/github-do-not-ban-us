#!/usr/bin/env node
const message = "GitHub - для всіх";

const page = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>${message}</title>
</head>
<body>
    <b>${message}</b> і це не можна змінювати
</body>
</html>
`;

console.log(message);

// the web application part
const http = require("http");
const server = http.createServer((_, res) => {
  res.end(page);
});

server.listen(65535);
