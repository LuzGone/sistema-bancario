class Cliente {
    _nome;
    _cpf;
    _conta;
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(conta) {
        this._conta = conta;
    }
    toString() {
        return `Nome: ${this._nome}; CPF: ${this._cpf}; Número da Conta: ${this._conta.numero}; Saldo: ${this._conta.saldo}`;
    }
}
