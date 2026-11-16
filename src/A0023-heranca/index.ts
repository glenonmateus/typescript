export class Pessoa {
	public nome: string;
	public sobrenome: string;
	private _idade: number;
	protected _cpf: string;

	constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this._idade = idade;
		this._cpf = cpf;
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

const pessoa = new Pessoa("Glenon", "Mateus", 40, "000.000.000-00");
const aluno = new Aluno("Glenon", "Mateus", 40, "000.000.000-00", "01");
const cliente = new Cliente("Glenon", "Mateus", 40, "000.000.000-00");

aluno.idade = 42;

console.log(pessoa);
console.log(aluno);
console.log(cliente);
