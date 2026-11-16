export class Empresa {
	public readonly nome: string;
	private readonly colaboradores: Array<Colaborador>;
	protected readonly cnpj: string;

	constructor(nome: string, cnpj: string) {
		this.nome = nome;
		this.cnpj = cnpj;
		this.colaboradores = [];
	}

	public adicionaColaborador(colaborador: Colaborador): void {
		this.colaboradores.push(colaborador);
	}

	public getColaboradores(): Array<Colaborador> {
		return this.colaboradores;
	}
}

export class Colaborador {
	public readonly nome: string;
	public readonly sobrenome: string;

	constructor(nome: string, sobrenome: string) {
		this.nome = nome;
		this.sobrenome = sobrenome;
	}
}

const empresa1 = new Empresa("Udemy", "9999999");
const colaborador1 = new Colaborador("glenon", "mateus");
const colaborador2 = new Colaborador("glenon", "mateus");

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);

console.log(empresa1);
console.log(empresa1.getColaboradores());
