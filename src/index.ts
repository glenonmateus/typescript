// tipos básicos, o tipo pode ser atribuido por inferência
// const nome: string = "Glenon";
// const idade: number = 30;
// const adulto: boolean = true;
// const simbolo: symbol = Symbol("qualquer-symbol");
// const bigInt: bigint = 1n;

// console.log(nome, idade, adulto, simbolo, bigInt);

// arrays
// const arrayDeNumeros1: Array<number> = [1, 2, 3];
// const arrayDeNumeros2: number[] = [1, 2, 3];
// const arrayDeStrings1: Array<string> = ["a", "b", "c"];
// const arrayDeStrings2: string[] = ["a", "b", "c"];
//
// console.log(arrayDeNumeros1, arrayDeNumeros2, arrayDeStrings1, arrayDeStrings2);

//objetos
// const pessoa: { nome: string; idade: number; adulto?: boolean } = {
// 	nome: "Glenon",
// 	idade: 40,
// 	adulto: true,
// };
//
// console.log(pessoa);

//funções
// function soma1(x: number, y: number): number {
// 	return x + y;
// }
//
// const soma2: (x: number, y: number) => number = (x, y) => x + y;
//
// const resultado1 = soma1(2, 2);
// const resultado2 = soma2(2, 2);
//
// console.log(resultado1, resultado2);

//void (sem retorno)
function semRetorno(...args: string[]): void {
	console.log(args.join(" "));
}

semRetorno("Glenon", "Mateus");

const pessoa = {
	nome: "Glenon",
	sobrenome: "Mateus",

	exibirNome(): void {
		console.log(`${this.nome} ${this.sobrenome}`);
	},
};

pessoa.exibirNome();
