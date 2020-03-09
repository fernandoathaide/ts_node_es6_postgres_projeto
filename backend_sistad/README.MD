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

## Biblioteca HTTP Status
npm i http-status -S
npm i @types/http-status -D

## Biblioteca BLUEBIRD
npm i bluebird -S
npm i @types/bluebird -D

## Biblioteca LODASH
npm i lodash -S
npm i @types/lodash -D