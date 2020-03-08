import { testDouble, expect } from './config/helpers';
import ServiceUser from '../../server/modules/User/serviceUser';

describe('Testes Unitários do userController', () =>{
    describe('Método Create', () => {
        it('Deve Criar um novo Usuário', () =>{
            const user = { 
                id: 1, 
                name: 'Teste Unitário', 
                email: 'teste@unitario.com', 
                password: 'teste' 
            };
            return ServiceUser.create(user)
            .then(data =>{
                expect(data.dataValues).to.have.all.keys(
                    ['email','id_user','name','password','updatedAt','createdAt']
                )
            });
        });
    });
/*
    describe('Método Update', () => {
        it('Deve Alterar um Usuário', () =>{

        });
    });
*/
    describe('Método Buscar Usuários', () => {
        it('Deve Retornar Lista com os Usuários', () =>{
            return ServiceUser.getAll().then(data => {
                expect(data).to.be.an('array');
                expect(data[0]).to.have.all.keys(
                    ['email','id_user','name','password']
                );
            })
        });
    });
/*
    describe('Método Delete', () => {
        it('Deve Deletar um Usuário', () =>{

        });
    });
*/
});