"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var serviceUser_1 = require("../../server/modules/User/serviceUser");
describe('Testes Unitários do userController', function () {
    describe('Método Create', function () {
        it('Deve Criar um novo Usuário', function () {
            var user = {
                id: 1,
                name: 'Teste Unitário',
                email: 'teste@unitario.com',
                password: 'teste'
            };
            return serviceUser_1.default.create(user)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id_user', 'name', 'password', 'updateAt', 'createdAt']);
            });
        });
    });
    /*
        describe('Método Update', () => {
            it('Deve Alterar um Usuário', () =>{
    
            });
        });
    
        describe('Método Buscar Usuários', () => {
            it('Deve Retornar Lista com os Usuários', () =>{
    
            });
        });
    
        describe('Método Delete', () => {
            it('Deve Deletar um Usuário', () =>{
    
            });
        });
    */
});