'use strict';

const router = require('express').Router();
const Promise = require('bluebird');
const logger = require('log4js').getLogger();

router.use(function(req, res, next) {
	logger.info(req.method, req.originalUrl, JSON.stringify(req.body));
	
	res.render('site/index.pug', {});
});

module.exports = router;