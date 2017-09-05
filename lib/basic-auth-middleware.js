'use strict';

const createError = require('http-errors');
const debug = require('debug')('app:basic-auth-middleware');

module.exports = function (req, res, next) {
  debug('auth');

  let authHeader = req.headers.authorization;
  if(!authHeader) {
    return next(createError(401, 'authorization header is required'));
  }

  next();
};
