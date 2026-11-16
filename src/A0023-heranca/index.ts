export class Pessoa {
	public nome: string;
	public sobrenome: string;
	private idade: number;
	protected cpf: string;

	constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
		this.cpf = cpf;
	}

	public getIdade(): number {
		return this.idade;
	}

	public getCpf(): string {
		return this.cpf;
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

console.log(pessoa);
console.log(aluno);
console.log(cliente);
