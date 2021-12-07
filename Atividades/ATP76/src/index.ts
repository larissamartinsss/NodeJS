import {Cliente} from "./cliente";

const cliente= new Cliente(1,"Larissa");

let id= cliente.id
const nome=cliente.nome
const sobrenome=cliente.sobrenome

console.log(`ID ${id} Nome: ${nome} Sobrenome: ${sobrenome}`);