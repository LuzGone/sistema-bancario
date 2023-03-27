class Clientes {
    _clientes;
    constructor() {
        this._clientes = [];
    }
    listar() {
        return this._clientes;
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        let idexRemocao = this._clientes.findIndex((cliente) => cliente.cpf === cpf);
        return this._clientes.splice(idexRemocao, 1);
    }
    pesquisar(cpf) {
        let index = this._clientes.findIndex((cliente) => cliente.cpf === cpf);
        return this._clientes[index];
    }
}
