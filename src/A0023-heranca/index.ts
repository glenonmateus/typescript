export class Pessoa {
	public nome: string;
	public sobrenome: string;
	private _idade: number;
	protected _cpf: string;

	constructor(
		nome: string,
		sobrenome: string,
		idade: number = 0,
		cpf: string = "000.000.000-00",
	) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this._idade = idade;
		this._cpf = cpf;
	}

	public static createInstance(nome: string, sobrenome: string): Pessoa {
		return new Pessoa(nome, sobrenome);
	}

	public get idade(): number {
		return this._idade;
	}

	public set idade(idade: number) {
		this._idade = idade;
	}

	public get cpf(): string {
		return this._cpf;
	}

	public getNomeCompleto(): string {
		return `${this.nome} ${this.sobrenome}`;
	}
}

export class Cliente extends Pessoa {
	public getNomeCompleto(): string {
		return `Cliente: ${this.nome} ${this.sobrenome}`;
	}
}

export class Aluno extends Pessoa {
	public sala: string;

	constructor(
		nome: string,
		sobrenome: string,
		idade: number,
		cpf: string,
		sala: string,
	) {
		super(nome, sobrenome, idade, cpf);
		this.sala = sala;
	}

	public getNomeCompleto(): string {
		return `Aluno: ${this.nome} ${this.sobrenome}`;
	}
}

const pessoa1 = new Pessoa("Glenon", "Mateus", 40, "000.000.000-00");
const pessoa2 = Pessoa.createInstance("Glenon", "Mateus");
const aluno = new Aluno("Glenon", "Mateus", 40, "000.000.000-00", "01");
const cliente = new Cliente("Glenon", "Mateus", 40, "000.000.000-00");

console.log(pessoa1);
console.log(pessoa2);
console.log(aluno);
console.log(cliente);
