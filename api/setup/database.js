import databaseConf from '../config/database';
import mysql from 'mysql2'

const connexion = {
	create: mysql.createConnection,
	conf: {
		host: databaseConf.development.host,
		user: databaseConf.development.username,
		password: databaseConf.development.password,
		database: databaseConf.development.database
	}
}

export default connexion;