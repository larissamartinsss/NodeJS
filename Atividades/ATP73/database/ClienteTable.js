import { Sequelize } from "sequelize";
import DataBase from "./DataBase.js";

const ClienteTable = DataBase.define('cliente', {
    id:{
        type: Sequelize.INTEGER,
        allownull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allownull: false,
    },
    sobrenome:{
        type: Sequelize.STRING,
        allownull: false,
    }
});

export default ClienteTable;