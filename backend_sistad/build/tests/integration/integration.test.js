"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var helpers_1 = require("./config/helpers");
var model = require('../../server/models');
describe('Testes de Integração', function () {
    'use strict';
    var config = require('../../server/config/env/config')();
    var id_user;
    var userTest = {
        id_user: 100,
        name: 'Default User',
        email: 'default@gmail.com',
        password: 'default'
    };
    var userDefault = {
        id_user: 1,
        name: 'Usuário Teste',
        email: 'teste@gmail.com',
        password: 'teste'
    };
    beforeEach(function (done) {
        model.User.destroy({
            where: {} //Todos os registros serão deletados
        })
            .then(function () {
            return model.User.create(userDefault);
        })
            .then(function (user) {
            model.User.create(userTest)
                .then(function () {
                done();
            });
        });
    });
    describe('GET /api/users/all', function () {
        it('Deve retornar um Json com todos os usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .set('Content-Type', 'application/json')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload).to.be.an('array');
                helpers_1.expect(res.body.payload[0].name).to.be.equal(userDefault.name);
                helpers_1.expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                done(error); // Caso retorne error se não apenas finaliza
            });
        });
    });
    describe('GET /api/users/:id_user', function () {
        it('Deve retornar um Json com um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + userDefault.id_user)
                .set('Content-Type', 'application/json')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id_user).to.equal(userDefault.id_user);
                helpers_1.expect(res.body.payload).to.have.all.keys(['id_user', 'name', 'email', 'password']);
                _this.id_user = res.body.payload.id_user;
                done(error);
            });
        });
    });
    describe('POST /api/users/create', function () {
        it('Deve inserir/Criar novo usuário, retorno 200', function (done) {
            var user = {
                id_user: 2,
                name: 'FernandoTeste',
                email: 'novo@gmail.com',
                password: 'novouser'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/create')
                .set('Content-Type', 'application/json')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id_user).to.eql(user.id_user);
                helpers_1.expect(res.body.payload.name).to.eql(user.name);
                helpers_1.expect(res.body.payload.email).to.eql(user.email);
                done(error);
            });
        });
    });
    describe('PUT /api/users/:id/update', function () {
        it('Deve atualizar um Usuário', function (done) {
            var user = {
                name: 'TesteUpdate',
                email: 'update@email.com'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + userTest.id_user + "/update")
                .set('Content-Type', 'application/json')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload[0]).to.eql(1);
                done(error);
            });
        });
    });
    describe('DELETE /api/users/:id/destroy', function () {
        it('Deve remover um usário', function (done) {
            helpers_1.request(helpers_1.app)
                .del("/api/users/" + userTest.id_user + "/destroy")
                .set('Content-Type', 'application/json')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload).to.eql(1);
                done(error);
            });
        });
    });
});
