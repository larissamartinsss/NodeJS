class ContaPoupanca{
    numero;
    saldo;
    agencia;
    cliente;

    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        if(this.saldo > valor){
            this.saldo -=valor;
            return 'saque executado';
        }
        return 'saldo insuficiente';
    }
}

const cp1 = new ContaPoupanca();
cp1.numero = '152165';
cp1.saldo = 531.12;
cp1.agencia = '0025-8';
cp1.cliente = 'Maykon';

console.log(cp1);
cp1.depositar(50.99);
console.log(cp1);
console.log(cp1.sacar(30));
console.log(cp1);