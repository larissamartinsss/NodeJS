import { PessoaJuridica } from "./PessoaJuridica.js";
import { PessoaFisica } from "./PessoaFisica.js";

const pf = new PessoaFisica(2312131313);
pf.nome = "Luana";

const pj = new PessoaJuridica(54513131)
pj.nome = "Lariscode";

console.log(pf.nome);
console.log(pf.cpf);


console.log(pj.nome);
console.log(pj.cnpj);