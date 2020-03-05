"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
describe('Testes de Integração', function () {
    describe('GET /', function () {
        it('Deve retornar Ola você SISTAD!', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.text).to.equal('Ola você SISTAD!');
                done(error);
            });
        });
    });
    describe('GET /ola/:nome', function () {
        it('Deve retornar Ola você SISTAD!', function (done) {
            var nome = 'Fernando';
            helpers_1.request(helpers_1.app)
                .get("/ola/" + nome)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.text).to.equal('Ola Fernando SISTAD!');
                done(error);
            });
        });
    });
    describe('GET /api/users/all', function () {
        it('Deve retornar um Json com todos os usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Deve retornar um Json com um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('POST /api/users/new', function () {
        it('Deve inserir/Criar novo usuário, retorno 200', function (done) {
            var user = { nome: 'FernandoTeste' };
            helpers_1.request(helpers_1.app)
                .post('/api/users/new')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('PUT /api/users/:id/edit', function () {
        it('Deve Alterar/Atualizar usuário, retorno 200', function (done) {
            var user = { nome: 'FernandoTeste' };
            helpers_1.request(helpers_1.app)
                .put("/api/users/new/" + 1 + "/edit")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('DELETE /api/users/:id', function () {
        it('Deve deletar usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .put("/api/users/new/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
});
