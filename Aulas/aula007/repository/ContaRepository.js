import ContaTable from './../db/ContaTable.js'

class ContaRepository{

    async findAll(){
        const lista = await ContaTable.findAll({raw:true});
        return lista;
    }

    async create(model){
        return await ContaTable.create(model);
    }

    async update(model){
        return await ContaTable.update(model,{
            where:{id:model.id}
        });
    }

    async delete(id){
        return await ContaTable.destroy({
            where:{id:id}
        });        
    }
}


export default ContaRepository;