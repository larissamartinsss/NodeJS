import Conta from './model/Conta.js'
import ContaRepository from './repository/ContaRepository.js'

console.log('============Banco===========')

const conta1 = new Conta();
conta1.id = 2
conta1.numero = 88888;
conta1.agencia = 777777;
conta1.saldo = 5858.50;

console.log(conta1.numero, conta1.agencia, conta1.saldo);

const repository = new ContaRepository();
const lista = await repository.findAll();
console.log(lista);