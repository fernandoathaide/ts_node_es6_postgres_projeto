import * as http from 'http';
import Api from './api/api';

const config = require('./config/env/config')();//Função de invocação imediada

const server = http.createServer(Api);

server.listen(config.serverPort);
server.on('listening', () => console.log(`server running on port ${config.serverPort}`));
server.on('error', (error: NodeJS.ErrnoException) => console.log(`Erro: ${error}`));