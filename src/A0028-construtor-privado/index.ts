// Singleton - Factory Method - GoF
export class Database {
	private static database: Database;

	private _host: string;
	private _user: string;
	private _password: string;

	private constructor(host: string, user: string, password: string) {
		this._host = host;
		this._user = user;
		this._password = password;
	}

	public connect(): void {
		console.log(`Connected: ${this._host} ${this._user} ${this._password}`);
	}

	public static getDatabase(
		host: string,
		user: string,
		password: string,
	): Database {
		if (Database.database) return Database.database;
		Database.database = new Database(host, user, password);
		return Database.database;
	}
}

const db1 = Database.getDatabase("localhost", "root", "123456");
db1.connect();

const db2 = Database.getDatabase("localhost", "root", "123456");
db2.connect();

console.log(db1 === db2);
