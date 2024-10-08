// class Pessoa{
//     #idade
//     constructor(nome, idade, cpf){
//         this.nome = nome
//         this.#idade = idade
//         this.cpf = cpf
//     }

//     falar(){
//         console.log(`${this.nome} esta falando....`);
//     }

//     get idade(){
//         return this.#idade;
//     }

//     set idade(idadeNova){
//         return this.#idade = idadeNova;
//     }
// }

// pessoa1 = new Pessoa("Maria", 19, 1234567890);
// pessoa1.falar();
// pessoa1.idade = 20;
// console.log(pessoa1.idade);

// class Carro{
//     constructor(marca, modelo, ano){
//         this.marca = marca
//         this.modelo = modelo
//         this.ano = ano
//     }

//     buzinar(){
//         console.log("BIIIII BIIIII BIIIII")
//     }
// }

// carro1 = new Carro("Honda", "Civic", 2021);
// carro1.buzinar();

// class Livro{
//     #titulo
//     constructor(titulo, autor, anoPublicacao){
//         this.#titulo = titulo
//         this.autor = autor
//         this.anoPublicacao = anoPublicacao
//     }

//     resumo(){
//         console.log(`${this.titulo} é um livro de ${this.autor} publicado em ${this.anoPublicacao}`)
//     }

//     get titulo(){
//         return this.#titulo
//     }

//     set titulo(tituloNovo){
//         return this.#titulo = tituloNovo
//     }
// }

// livro1 = new Livro("Os Dois Morrem no Final", "Adam Silveira", 2017);
// livro1.resumo();
// livro1.titulo = "Os Dois Não Morrem no Final";
// livro1.resumo();

// class ContaBancaria{
//     #saldo;
//     constructor(nome, saldo){
//         this.nome = nome
//         this.#saldo = saldo
//     }

//     set saldo(saldoEmprestimo){
//         return this.#saldo = saldoEmprestimo
//     }

//     extrato(){
//         if(this.#saldo < 0){
//             console.log(`${this.nome} seu saldo está negativo!`)
//             this.#saldo =+ 1
//             console.log("Foi realizado um emprestimo em seu nome, pague-o em breve!")
//         }else{
//             console.log(`${this.nome} seu saldo está positivo!`)
//         }
//     }
// }

// conta1 = new ContaBancaria("Renata Almeida", 45);
// conta1.extrato();

// class DispositivoEletronico{
//     constructor(nome){
//         this.nome = nome;
//         this.ligado = false;
//     }

//     ligar(){
//         if(!this.ligado){
//             this.ligado = true;
//             console.log(`${this.nome} ligado`);
//         }else{
//             console.log(`${this.nome} ja esta ligado`);
//         }
//     }

//     desligar(){
//         if(!this.ligado){
//             this.ligado = true;
//             console.log(`${this.nome} já esta desligado`);
//         }else{
//             this.ligado = false
//             console.log(`${this.nome} acabou de desligar`);
//         }
//     }
// }

// lamp = new DispositivoEletronico("Celular");
// lamp.ligar();
// lamp.desligar();

// class Smartphone extends DispositivoEletronico{
//     constructor(nome, cor, modelo){
//         super(nome);
//         this.cor = cor
//         this.modelo = modelo
//     }

//     ligar(){
//         console.log("Sobrepor metodos")
//     }
// }

// cell = new Smartphone("Samsung", "Preto", "Galaxy S10");
// cell.ligar();
// cell.desligar();


// class Funcionario{
//     constructor(nome, salario){
//         this.nome = nome
//         this.salario = salario
//     }
// }

// chefe1 = new Funcionario("Renata Almeida", 1400);

// class Gerente extends Funcionario{
//     constructor(nome, salario, departamento){
//         super(nome, salario);
//         this.departamento = departamento
//     }

//     listar(){
//         console.log(`NOME: ${this.nome}`)
//         console.log(`SALARIO: ${this.salario}`)
//         console.log(`DEPARTAMENTO: ${this.departamento}`)
//     }
// }

// gerente1 = new Gerente("Renata Almdeida", 1400,"Gerente de UI/UX");
// gerente1.listar();