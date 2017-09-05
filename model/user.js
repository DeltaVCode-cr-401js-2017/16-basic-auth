'use strict';

const mongoose = require('mongoose');
const createError = require('http-errors');
const debug  = require('debug')('app:model/user');

const Schema = mongoose.Schema;

const userSchema = Schema({
  username: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  findHash: { type: String, unique: true},
});

userSchema.methods.generatePasswordHash = function(password) {
  debug('generatePasswordHash');

  return Promise.resolve(this);
};

userSchema.methods.comparePasswordHase = function (password) {
  debug('comparePasswordHash');

  return Promise.resolve(this);
};

userSchema.methods.generateFindHash = function () {
  debug('generateFindHash');
};

userSchema.methods.generateToken = function () {
  debug('generateToken');
};

module.exports = mongoose.models.user || mongoose.model('user', userSchema);
