const lista = ["Inex", "Jojo", "Guga"]
const lista2 = new Array("Inex", "Jojo", "Guga");

console.log(lista);
console.log(lista2);

// adicionando elemetos a lista
lista.push("Chimba");
console.log(lista);

console.log(lista.length);
console.log("Index da jojo:", lista.indexOf("Jojo"))
const valor = lista.pop();
console.log(valor);
console.log(lista);

const novaLista = lista.slice(0,2);
console.log(novaLista);

lista.splice(1,2);
console.log(lista);

// Elemento especifico pelo index
console.log(lista[0]);