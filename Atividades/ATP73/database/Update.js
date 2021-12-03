import DataBase from "./DataBase.js";
import Cliente from "./ClienteTable.js"

DataBase
    .sync()
    .then( ()=> console.log('Sincronizando o banco de dados'))
    .catch( ()=> console.log("Erro"))