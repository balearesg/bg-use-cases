import {Sequelize} from 'sequelize';
import {Logs} from './logs';
import {initModels} from './tables/init-models';

const {DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_TIMEZONE} = process.env;
console.log("🚀 ~ file: index.ts:6 ~ DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_TIMEZONE:", DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_TIMEZONE)

class Model {
	_models;
	get models() {
		return this._models;
	}

	_sequelize;
	get sequelize() {
		return this._sequelize;
	}
	#logs: Logs = new Logs();
	constructor() {
		this.#logs.validate();
		this.connectDB();
	}

	registerLog = msg => {
		this.#logs.call(msg);
	};

	connectDB() {
		try {
			const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
				host: DB_HOST,
				dialect: 'mysql',
				timezone: DB_TIMEZONE,
				logging: this.registerLog,
			});

			this._models = initModels(sequelize);
			this._sequelize = sequelize;
			return {status: true};
		} catch (error) {
			return {status: false, error: error.message};
		}
	}

	refreshRelations() {
		this.createRelations();
	}

	createRelations() {
		/* Al heredar o antes de realizar la conexión se debe setear las relaciones extras */
		//this._models.AuditRequests.belongsTo(this._models.Users, { as: "user", foreignKey: "userId" });

	}
}

export /*bundle*/
const DataModel = new Model();
