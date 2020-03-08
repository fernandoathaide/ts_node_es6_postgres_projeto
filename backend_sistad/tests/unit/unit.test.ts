import { testDouble, expect } from './config/helpers';
import ServiceUser from '../../server/modules/User/serviceUser';
import { json } from 'body-parser';

describe('Testes Unitários do userController', () =>{
    describe('Método Create', () => {
        //CRIAR USER TESTE
        it('Deve Criar um novo Usuário', () =>{
            const user = { 
                id_user: 1, 
                name: 'Teste Unitário', 
                email: 'teste@unitario.com', 
                password: 'teste' 
            };
            return ServiceUser.create(user)
            .then(data =>{
                console.log('DATA CREATE data.dataValues == ');
                console.log(JSON.stringify(data.dataValues));
                expect(data.dataValues).to.have.all.keys(
                    ['email','id_user','name','password','updatedAt','createdAt']
                )
            });
        });
    });
    //UPDATE USER TESTE
    describe('Método Update', () => {
        it('Deve Alterar um Usuário', () =>{
            const userUpdate = { name:'UserUpdate', email: 'userUpdate@teste.com'}
            return ServiceUser.update(1, userUpdate).then(data => {
                expect(data[0]).to.be.equal(1);
            })
        });
    });
    //BUSCAR TODOS USER TESTE
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
    //EXCLUIR USER TESTE
    describe('Método Delete', () => {
        it('Deve Deletar um Usuário', () =>{
            return ServiceUser.delete(1).then(data => {
                //expect(data[0]).to.be.equal(1); a execução do comando em banco retorna uma Run afetada
                console.log('DATA NA TELA = ' + data[0]);
            })
        });
    });
});