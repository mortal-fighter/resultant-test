'use strict';

const router = require('express').Router();
const Promise = require('bluebird');
const logger = require('log4js').getLogger();
const fetch = require('isomorphic-fetch');


router.get('/', function(req, res, next) {
	Promise.resolve().then(function() {

		res.render('site/index.pug', {});
	
	}).catch(function(err) {
	
		logger.error(err.message, err.stack);
		res.render('errors/500.pug', {});
	
	});
});


router.get('/ajax_get_stocks', function(req, res, next) {
	var stocks = [];
	
	fetch('http://phisix-api3.appspot.com/stocks.json').then(function(response) {
		if (!response.ok) {
			return Promise.resolve(null);
		}

		return response.json();

	}).then(function(json) {

		if (json) {
			stocks = json.stock;
		}

		res.render('site/stocks.pug', {
			stocks: stocks
		});
	
	}).catch(function(err) {
	
		logger.error(err.message, err.stack);
		res.render('errors/500.pug', {});
	
	});
});

module.exports = router;