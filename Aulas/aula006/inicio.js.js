import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

console.log('Banco Bradesco');

const cc1 = new ContaCorrente(10);
cc1.agencia = 1563;
cc1.numero = 105;
cc1.depositar(50);
console.log(cc1);
console.log(cc1.agencia);

const cp1 =  new ContaPoupanca();
cp1.numero = 298;
cp1.depositar(159);
console.log(cp1);