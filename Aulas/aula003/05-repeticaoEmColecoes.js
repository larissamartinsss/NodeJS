lista = new Array(0,5,8,9,48);

for(let cont=0; cont < lista.length; cont++){
    console.log(lista[cont]);
}

console.log("ForEach com arrow function")

lista.forEach(elemento=>console.log(elemento));