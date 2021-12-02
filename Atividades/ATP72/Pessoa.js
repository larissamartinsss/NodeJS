export class Pessoa{
    #nome;
    
    get nome(){
        return this.#nome;
    }
    set nome(nome){
        this.#nome = nome;
    }
}