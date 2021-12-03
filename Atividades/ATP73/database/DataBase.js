import Sequelize from "sequelize";

const DataBase = new Sequelize(
    'postgres', // database
    'postgres', // user
    '123456', // senha
    {
        host: 'localhost', // endereco do server
        port: 5432, // porta do postgres
        dialect: 'postgres'
    }
);

export default DataBase;