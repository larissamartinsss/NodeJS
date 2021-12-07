import { Router } from 'express';
import Cliente from './../model/Cliente.js'
import ClienteRepository from './../repository/ClienteRepository.js'

const ClienteApi = Router(); 
const rep = new ClienteRepository();

ClienteApi.get('/', async (req, resp)=>{
    const lista = await rep.findAll(); 
    resp.send(lista);
});

ClienteApi.post('/', async (req, resp)=>{
    let{nome, sobrenome} = req.body;
    const c1 = new Cliente(nome, sobrenome);

    const retorno = await rep.create(c1); 
    resp.send(retorno);
});

ClienteApi.put('/:id', async (req, resp)=>{
    let id = req.params.id;
    let{nome, sobrenome} = req.body;
    const c1 = new Cliente(nome, sobrenome, id);

    const retorno = await rep.update(c1); 
    resp.send(retorno);
});

ClienteApi.delete('/:id', async (req, resp)=>{
    const id = req.params.id;
    const retorno = await rep.delete(id); 
    resp.send(JSON.stringify(retorno));
});

export default ClienteApi;