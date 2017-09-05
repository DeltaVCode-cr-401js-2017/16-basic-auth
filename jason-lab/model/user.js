'use-strict';

const mongoose = require('mongoose');
const createErrror = require('http-errors');
const debug = require('debug')('app:user');

const userSchema = Schema({
  username: {type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  findhash: { type: String, required: true },
});

userSchema.methods.generatePasswordHash = function (password){
  debug('generatePasswordHash');

};

userSchema.methods.comparePasswordHash = function (password){
  debug('comparePasswordHash');

};

userSchema.methods.generateFindHash = function (){
  debug('generateFindHash');

};

userSchema.methods.generateToken = function (){
  debug('generateToken');

};

module.exports = mongoose.models.user || mongoose.model('user', userSchema);
