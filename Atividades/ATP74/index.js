import Cliente from './model/Cliente.js'
import ClienteTable from './db/ClienteTable.js'

console.log("============ Banco de Dados ===============")
const cliente = new Cliente();
cliente.id = 10;
cliente.nome = "Jojo";
cliente.sobrenome = "Todynho";


console.log(cliente.id, cliente.nome, cliente.sobrenome)


const resultado = await ClienteTable.create(cliente);
console.log(resultado);

const listar = await ClienteTable.findAll({raw:true});
console.log(listar);
