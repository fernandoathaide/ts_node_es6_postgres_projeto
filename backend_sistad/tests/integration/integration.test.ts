import { app, request, expect } from './config/helpers';


describe('Testes de Integração',() =>{
    describe('GET /', () =>{
        it('Deve retornar Ola você SISTAD!', done =>{
            request(app)
            .get('/')
            .end((error, res)=>{
                expect(res.status).to.equal(200);
                expect(res.text).to.equal('Ola você SISTAD!');
                done(error);                
            })
        });
    });
    describe('GET /ola/:nome', () =>{
        it('Deve retornar Ola você SISTAD!', done =>{
            const nome = 'Fernando';
            request(app)
            .get(`/ola/${nome}`)
            .end((error, res)=>{
                expect(res.status).to.equal(200);
                expect(res.text).to.equal('Ola Fernando SISTAD!');
                done(error);                
            })
        });
    });


    describe('GET /api/users/all', () =>{
        it('Deve retornar um Json com todos os usuários', done =>{
            request(app)
            .get('/api/users/all')
            .end((error, res)=>{
                expect(res.status).to.equal(200);
            })
        });
    });
    describe('GET /api/users/:id', () =>{
        it('Deve retornar um Json com um usuário', done =>{
            request(app)
            .get(`/api/users/${1}`)
            .end((error, res)=>{
                expect(res.status).to.equal(200);
            })
        });
    });
    describe('POST /api/users/new', () =>{
        it('Deve inserir/Criar novo usuário, retorno 200', done =>{
            const user = {nome:'FernandoTeste'}
            request(app)
            .post('/api/users/new')
            .send(user)
            .end((error, res)=>{
                expect(res.status).to.equal(200);
            })
        });
    });
    describe('PUT /api/users/:id/edit', () =>{
        it('Deve Alterar/Atualizar usuário, retorno 200', done =>{
            const user = {nome:'FernandoTeste'}
            request(app)
            .put(`/api/users/new/${1}/edit`)
            .send(user)
            .end((error, res)=>{
                expect(res.status).to.equal(200);
            })
        });
    });
    describe('DELETE /api/users/:id', () =>{
        it('Deve deletar usuário', done =>{
            request(app)
            .put(`/api/users/new/${1}`)
            .end((error, res)=>{
                expect(res.status).to.equal(200);
            })
        });
    });
});