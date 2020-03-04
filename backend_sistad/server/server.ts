import * as http from 'http';
import Api from './api/api';
import { errorHandlerApi } from './api/errorHandlerApi';

const config = require('./config/env/config')();//Função de invocação imediada

const server = http.createServer(Api);
const port = config.serverPort;

Api.use(errorHandlerApi);

server.listen(port, () => console.log(`server running on port ${port}`));