// let contaController = new ContaController();
let clienteController = new ClienteController();
let clientes = new Clientes();


clientes.inserir(new Cliente("Roberto Silva","123.456.789-01",new Conta("12",20)));
clientes.inserir(new Cliente("Rodrigo Silva","123.456.790-02",new Conta("13",30)));
clientes.inserir(new Cliente("Renata Silva","123.456.791-03",new Conta("14",40)));

console.log(clientes.listar());

console.log(clientes.pesquisar("123.456.789-01"));

clientes.remover("123.456.790-02");
console.log(clientes.listar());



clienteController.listar();

// contaController.listar();

// const c1 = new Conta('1', 100);
// const p1 = new Poupanca('2', 100);
// const cb1 = new ContaBonificada('3', 0);

// console.log('Conta: ' + c1.saldo);

// p1.atualizarSaldoAniversario();
// console.log('Poupanca: ' + p1.saldo);

// cb1.creditar(100);
// console.log('Conta Bonificada: ' + cb1.saldo);
