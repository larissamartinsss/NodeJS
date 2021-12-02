import { Pessoa } from "./Pessoa.js";

export class PessoaFisica extends Pessoa{
    #cpf;

    constructor(cpf){
        super();
        this.#cpf = cpf;
    }

    get cpf(){
        return this.#cpf;
    }
    set cpf(cpf){
        this.#cpf = cpf;
    }
}