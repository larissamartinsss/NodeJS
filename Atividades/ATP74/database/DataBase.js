import Sequelize from "sequelize";

const DataBase = new Sequelize(
    'postgres', 
    'postgres', 
    '123456', 
    {
        host: 'localhost', 
        port: 5432, 
        dialect: 'postgres'
    }
);

export default DataBase;