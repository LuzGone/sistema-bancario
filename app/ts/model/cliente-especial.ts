class ClienteEspecial extends Cliente{

    private dependentes:Cliente[] = []

    constructor(nome:string,cpf:string,conta:Conta){
        super(nome,cpf,conta)
    }

    adicionarDependente(cliente:Cliente):Cliente{
        this.dependentes.push(cliente)
        return cliente
    }
}