export class Conta{
    #agencia;
    numero;
    _saldo;
    cliente;

    get agencia(){
        return this.#agencia;
    }
    
    set agencia(ag){
        console.log('Acessando o metodo como se fosse uma variavel');
        this.#agencia = ag;
    }

    depositar(valor){
        this._saldo += valor;
    }

    sacar(valor){
        if(this._saldo > valor){
            this._saldo -=valor;
            return 'saque executado';
        }
        return 'saldo insuficiente';
    }
}       