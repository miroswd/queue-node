require("dotenv/config"); // como não será executado através do server.js e precisa de credenciais

const Queue = require("./app/lib/Queue");

// process => como vai processar essa fila
Queue.process();
