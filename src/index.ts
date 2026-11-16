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
// function semRetorno(...args: string[]): void {
// 	console.log(args.join(" "));
// }
//
// semRetorno("Glenon", "Mateus");
//
// const pessoa = {
// 	nome: "Glenon",
// 	sobrenome: "Mateus",
//
// 	exibirNome(): void {
// 		console.log(`${this.nome} ${this.sobrenome}`);
// 	},
// };
//
// pessoa.exibirNome();

//objetos
// const objetoA: {
// 	chaveA: string;
// 	chaveB: string;
// 	chaveC?: string;
// 	[key: string]: unknown;
// } = {
// 	chaveA: "Valor A",
// 	chaveB: "Valor B",
// };
//
// objetoA.chaveB = "Outro valor";
// objetoA.chaveC = "Valor C";
// objetoA.chaveD = "Valor D";
//
// console.log(objetoA);

//Array<T> - T[]
// export function multiplica(...args: Array<number>): number {
// 	return args.reduce((ac, valor) => ac * valor, 1);
// }
//
// export function concatena(...args: Array<string>): string {
// 	return args.reduce((ac, valor) => ac + valor, "");
// }
//
// const resultado = multiplica(1, 2, 3);
// const concatenacao = concatena("a", "b", "c");
//
// console.log(resultado, concatenacao);

// tuple

// const dados1: [number, string] = [1, "Glenon"];
// const dados2: [number, string, string?] = [1, "Glenon"];
// const dados3: [number, string, ...string[]] = [1, "Glenon"];
//
// dados1[0] = 10;
// dados2[1] = "Mateus";
//
// console.log(dados1, dados2, dados3);

// function addOrConcat(a: number | string, b: number | string) {
// 	if (typeof a === "number" && typeof b === "number") return a + b;
// 	return `${a}${b}`;
// }

// intersection types
// type TemNome = { nome: string };
// type TemSobrenome = { sobrenome: string };
// type TemIdade = { idade: number };
// type Pessoa = TemNome & TemSobrenome & TemIdade; // AND
//
// const pessoa: Pessoa = {
// 	nome: "glenon",
// 	sobrenome: "mateus",
// 	idade: 40,
// };
//
// console.log(pessoa);
