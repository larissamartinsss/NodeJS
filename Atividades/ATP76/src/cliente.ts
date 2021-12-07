export class Cliente{
    private _id:number;
    private _nome:string;
    
    constructor(id:number,nome:string){
        this._id=id
        this._nome=nome
    }
    
    public get id() : number {
        return this.id;
    }  
    public set id(v : number) {
        this.id = v;
    }
    public get nome() : string {
        return this.nome;
    }
    public set nome(v : string) {
        this.nome = v;
    }   
}