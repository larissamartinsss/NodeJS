export class Cliente{
    private _id:number;
    private _nome:string;
    private _sobrenome:string;
    
    constructor(id:number,nome:string){
        this._id=id
        this._nome=nome
        this._sobrenome=this.sobrenome;
    }
    
    public get id() : number {
        return this.id;
    }  
    public set id(id : number) {
        this.id = id;
    }
    public get nome() : string {
        return this.nome;
    }
    public set nome(nome : string) {
        this.nome = nome;
    }   

    public get sobrenome() : string {
        return this.sobrenome;
    }
    public set sobrenome(sobrenome : string) {
        this.sobrenome = sobrenome;
    }   

  
}