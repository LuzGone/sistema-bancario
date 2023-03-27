class Clientes{
    private _clientes:Cliente[];
    constructor(){
        this._clientes = []
    }
    
    listar():Cliente[]{
        return this._clientes;
    }

    inserir(cliente:Cliente):void{
        this._clientes.push(cliente)
    }

    remover(cpf:string): Cliente[]{
        let idexRemocao = this._clientes.findIndex((cliente:Cliente) => cliente.cpf === cpf);
        return this._clientes.splice(idexRemocao,1);
    }
    pesquisar(cpf:string): Cliente{
        let index = this._clientes.findIndex((cliente:Cliente) => cliente.cpf === cpf);
        return this._clientes[index];
    }

}