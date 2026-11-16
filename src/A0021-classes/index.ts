export class Empresa {
	public readonly nome: string;
	protected readonly colaboradores: Array<Colaborador>;
	private readonly cnpj: string;

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

	public getCnpj(): string {
		return this.cnpj;
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

export class Udemy extends Empresa {
	constructor() {
		super("Udemy", "11.111.111/0001-11");
	}

	public removeUltimoColaborador(): Colaborador | undefined {
		const colaborador = this.colaboradores.pop();
		if (colaborador) return colaborador;
	}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador("glenon", "mateus");

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador1);

const ultimo = empresa1.removeUltimoColaborador();

console.log(empresa1.getColaboradores());
console.log(ultimo);
