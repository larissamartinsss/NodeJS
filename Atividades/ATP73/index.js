import Cliente from './model/Cliente.js'
import GerarDataBase from './repository/GerarDataBase.js';

console.log("============ Banco de Dados ===============")
const cliente = new Cliente();
cliente.id = 10;
cliente.nome = "Jojo";
cliente.sobrenome = "Todynho";


console.log("Nome completo",cliente.nome, cliente.sobrenome)

const repository = new GerarDataBase();
//const result = await ClienteTable.create(cliente);
//console.log(result);

const lista = await repository.findAll();
console.log(lista);