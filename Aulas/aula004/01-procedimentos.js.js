function imprimirNome(){
    console.log("Nome qualquer");
}
function imprimirNomeEspecifico(nome){
    console.log("Nome: "+ nome);
}
function imprimirNomeEspecificoComInterpolacao(nome){
    console.log(`Nome: ${nome}`);
}
function imprimirNomeSobrenome(nome, sobrenome){
    console.log(`Nome:${nome} \nSobrenome:${sobrenome}`)
}

imprimirNome();
imprimirNomeEspecifico('Inex');
imprimirNomeEspecificoComInterpolacao('Jojo');
imprimirNomeSobrenome('Inex', 'Brazil');