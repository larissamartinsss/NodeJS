import Cliente from './model/Cliente.js'
import ClienteTable from './database/ClienteTable.js'

console.log("============ Banco de Dados ===============")
const cliente = new Cliente();
cliente.nome = "Jojo";
cliente.sobrenome = "Todynho";

const result = await ClienteTable.create(cliente);
console.log(result);

const lista = await ClienteTable.findAll({raw:true});
console.log(lista);