import { Pessoa } from "./Pessoa.js";

export class PessoaJuridica extends Pessoa{
    #cnpj;

    constructor(cnpj){
        super();
        this.#cnpj = cnpj;
    }
    get cnpj(){
        return this.#cnpj;
    }
    set cnpj(cnpj){
        this.#cnpj = cnpj;
    }
}