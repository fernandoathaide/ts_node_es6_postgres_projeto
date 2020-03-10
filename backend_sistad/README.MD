# ESTRUTURA DO PROJETO
    - API Server em NODE JS 
    - Modelo em camadas MVC 
    - SEQUELIZE: Mapeamento Relacional e Migrations - Object Relational Mapper (ORM) para NodeJS baseado em promises que tem como principal objetivo unir a orientação objeto com a parte relacional, onde faz um mapeamento dos tipos de dados relacional gerando o objeto com a mesma representação dos dados.
    - EXPRESS: Estrutura de aplicativo da web para Node.js, lançada como software livre e de código aberto sob a licença MIT. Ele foi projetado para criar aplicativos da Web e APIs.

    ## FERRAMENTAS PARA TESTES DE Integração e Unitários:
        - MOCA: framework Javascript que roda em aplicações Node. js e no browser para realizar testes assíncronos de uma maneira simples e fácil
        - CHAI: biblioteca BDD/TDD de assertions para node e navegadores, que pode ser deliciosamente combinada com qualquer framework de testes em Javascript.
        - SUPERTEST: - TESTDOUBLE:

    ## FERRAMENTA PARA GERAÇÃO DE TOKEN DE SEGURANÇA:
     - PASSPORT PASSPORT-JWT e JWT-SIMPLE: middleware para Node. js que faz a implementação de autenticação em um aplicativo de maneira rápida e fácil.

    ## GERAÇÃO DE CRIPTOGRAFIA

    ## CARREGAMENTO SWAGGER PARA APRESENTAÇÃO DA API
    projeto composto por algumas ferramentas que auxiliam o desenvolvedor de APIs REST em algumas tarefas como: Modelagem da API. Geração de documentação (legível) da API. Geração de códigos do Cliente e do Servidor, com suporte a várias linguagens de programação.
    
# Comandos iniciais arquitetura do projeto
npm i body-parser express http morgan pg -S
npm install npm     //Atualizando o NPM  New minor version of npm available! 6.13.7 → 6.14.2
npm i ts-node -D    //DEPENDÊNCIA DE DESENVOLVIMENTO

npm i @types/express @types/body-parser @types/morgan -D //ou --save-dev
npm i sequelize sequelize-cli -S 
npm i @types/sequelize -D

npm install @types/node --save-dev

npm install -D ts-node && npm install -D typescript

## Ferramentas para teste unitários
npm i mocha chai supertest testdouble -D
npm i @types/mocha @types/chai @types/supertest -D

## Inicializando o Sequelize dentro da pasta server
cd server
sequelize init
### Caso de erro
npm install -g sequelize-cli
npm i sequelize-cli -S

## Biblioteca HTTP Status
npm i http-status -S
npm i @types/http-status -D

## Biblioteca BLUEBIRD
npm i bluebird -S
npm i @types/bluebird -D

## Biblioteca LODASH
npm i lodash -S
npm i @types/lodash -D

## Bibliotecas JWT Passport jwt-simple
npm i passport passport-jwt jwt-simple -S
npm i @types/passport @types/passport-jwt @types/jwt-simple -D

## Swagger para apresentação da API
npm i swagger-ui-express -S