import { app, request, expect } from './config/helpers';


describe('Testes de Integração',() => { 
    describe('GET /api/users/all', () =>{
        it('Deve retornar um Json com todos os usuários', done =>{
            request(app)
            .get('/api/users/all')
            .end((error, res)=>{
                expect(res.status).to.equal(200);
                done(error);// Caso retorne error se não apenas finaliza
            })
        });
    });
    describe('GET /api/users/:id', () =>{
        it('Deve retornar um Json com um usuário', done =>{
            request(app)
            .get(`/api/users/${1}`)
            .end((error, res)=>{
                expect(res.status).to.equal(200);
                done(error);
            })
        });
    });
    describe('POST /api/users/create', () =>{
        it('Deve inserir/Criar novo usuário, retorno 200', done =>{
            const user = {nome:'FernandoTeste'}
            request(app)
            .post('/api/users/create')
            .send(user)
            .end((error, res)=>{
                expect(res.status).to.equal(200);
                done(error);
            })
        });
    });
    describe('PUT /api/users/:id/update', () =>{
        it('Deve Alterar/Atualizar usuário, retorno 200', done =>{
            const user = {nome:'FernandoTeste'}
            request(app)
            .put(`/api/users/new/${1}/update`)
            .send(user)
            .end((error, res)=>{
                expect(res.status).to.equal(200);
                done(error);
            })
        });
    });
    describe('DELETE /api/users/:id/destroy', () =>{
        it('Deve deletar usuário', done =>{
            request(app)
            .delete(`/api/users/new/${1}/destroy`)
            .end((error, res)=>{
                expect(res.status).to.equal(200);
                done(error);
            })
        });
    });
});