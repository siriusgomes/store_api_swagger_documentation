'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.rootGet = function rootGet (req, res, next) {
  Default.rootGet(req.swagger.params, res, next);
};

module.exports.productsGet = function productsGet (req, res, next) {
  Default.productsGet(req.swagger.params, res, next);
};
