const HOST = 'localhost';
const PORT = 80;

module.exports = {
	app: {
		mode: 'development',
		port: PORT,
		emailAdmin: 'kirillmybox@rambler.ru'
	},
	database: {
		host: '',
		port: 3306,
		user: '',
		password: '',
		database: ''
	},
	logger: {
		level: 'INFO'
	}
};