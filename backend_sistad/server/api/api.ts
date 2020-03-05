//Definição inicial da nossa aplicação API de entrada.
import * as express from 'express';
import { Application } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import Routes from './routes/routes';
import { errorHandlerApi } from './errorHandlerApi';

class Api{
    public aplicationExpress: Application;

    constructor(){
        this.aplicationExpress = express();
        this.middleware();
    }

    middleware(): void{
        this.aplicationExpress.use(morgan('dev')); //Toda requisição feita será gerada um log no console da aplicação para acompanhamento.
        this.aplicationExpress.use(bodyParser.urlencoded({extended: true})); // URLENCODED - Formato dos dados submetidas extended true vai ser capaz de interpretar mais informações do que o padrão.
        this.aplicationExpress.use(bodyParser.json());//Se o que for passado for um JSON transformando em um objeto para ser tratado aqui dentro
        this.aplicationExpress.use(errorHandlerApi);
        this.aplicationExpress.use('/api',function(req, res, next){
            console.log('Rodando API.');
            res.send('<h1>API no Ar!</h1>')
        });
        this.router(this.aplicationExpress);
    }

    private router(app: Application): void{
        new Routes(app);
    }
}

export default new Api().aplicationExpress; //Devolvendo a instância da Class juntamente com a sua propriédade 'aplicationExpress'. 