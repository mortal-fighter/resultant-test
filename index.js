'use strict';

const express = require('express');
const app = express();
const config = require('./config.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const logger = require('log4js').getLogger();

logger.setLevel(config.logger.level);

// Prettyfing html output with indentation
app.locals.pretty = true;

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));
app.use(bodyParser.text());

app.use(cookieParser());

app.use(compression());


if (config.app.mode === 'development') {
	app.use(express.static('public'));
}
app.set('views', __dirname + '/views/');
app.set('view engine', 'pug');

app.use('/', require('./routes'));

app.all('*', function(req, res, next) {
	res.render('errors/404.pug');
});

app.listen(config.app.port, (err) => {
    if (err) {
        logger.error(`Couldn't start server: ${err.message} ${err.stack}`);
        return;
    }
    logger.info(`Server is listening on port ${config.app.port}`);
});