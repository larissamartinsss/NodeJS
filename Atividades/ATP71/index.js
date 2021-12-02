import { Produto } from "./Produto.js";
import { Categoria } from "./Categoria.js";

const p1 = new Produto();
const c1 = new Categoria();

p1.nome = "Smartphone"
p1.descricao = "Xiomi POCO"
p1.valor = 1.600;

c1.Categoria = "Eletronicos"

console.log(p1)
console.log("\nCategoria: ",c1)

