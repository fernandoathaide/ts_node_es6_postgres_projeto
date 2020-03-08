"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var serviceUser_1 = require("../../server/modules/User/serviceUser");
describe('Testes Unitários do userController', function () {
    var userDefault = {
        id_user: 1,
        name: 'Teste Unitário',
        email: 'teste@unitario.com',
        password: 'teste'
    };
    //CRIAR USER TESTE
    describe('Método Create', function () {
        it('Deve Criar um novo Usuário', function () {
            return serviceUser_1.default.create(userDefault)
                .then(function (data) {
                console.log('DATA CREATE data.dataValues == ');
                console.log(JSON.stringify(data.dataValues));
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id_user', 'name', 'password', 'updatedAt', 'createdAt']);
            });
        });
    });
    //UPDATE USER TESTE
    describe('Método Update', function () {
        it('Deve Alterar um Usuário', function () {
            var userUpdate = { name: 'UserUpdate', email: 'userUpdate@teste.com' };
            return serviceUser_1.default.update(1, userUpdate).then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    //BUSCAR TODOS USER TESTE
    describe('Método Buscar Usuários', function () {
        it('Deve Retornar Lista com os Usuários', function () {
            return serviceUser_1.default.getAll().then(function (data) {
                helpers_1.expect(data).to.be.an('array');
                helpers_1.expect(data[0]).to.have.all.keys(['email', 'id_user', 'name', 'password']);
            });
        });
    });
    //BUSCAR POR ID USER TESTE
    describe('Método Buscar Usuários Por ID', function () {
        it('Deve Retornar um Usuário buscado', function () {
            return serviceUser_1.default.getById(userDefault.id_user).then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id_user', 'name', 'password']);
                console.log(JSON.stringify(data));
            });
        });
    });
    //BUSCAR POR EMAIL USER TESTE
    describe('Método Buscar Usuários Por EMAIL', function () {
        it('Deve Retornar um Usuário buscado por email', function () {
            return serviceUser_1.default.getByEmail(userDefault.email).then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id_user', 'name', 'password']);
                console.log(JSON.stringify(data));
            });
        });
    });
    //EXCLUIR USER TESTE
    describe('Método Delete', function () {
        it('Deve Deletar um Usuário', function () {
            return serviceUser_1.default.delete(1).then(function (data) {
                //expect(data[0]).to.be.equal(1); a execução do comando em banco retorna uma Run afetada
                console.log('DATA NA TELA = ' + data[0]);
            });
        });
    });
});
