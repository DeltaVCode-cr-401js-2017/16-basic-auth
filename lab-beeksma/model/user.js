'use strict';

const mongoose = require('mongoose');
const createError = require('http-errors');
const debug = require('debug')('app:model/user');

const Schema = mongoose.Schema

const userSchema = Schema({
  username: {type: String,required: true, unique: true}
  ,email: {type: String, required: true, unique: true}
  ,password: {type: String, required: true}
  ,findHash: {type: String, unique: true}
});

userSchema.methods.generatePassword = function (password){
  debug('generatePasswordHash');
  // TODO: implement
};

userSchema.methods.comparePasswordHash = function (password){
  debug('comparePasswordHash');
  // TODO; implement
};

userSchema.methods.generateFindHash = function (){
  debug('generateFindHash');
  // TODO; implement
};

userSchema.methods.generateToken = function (){
  debug('generateToken');
  // TODO; implement
};

module.exports = mongoose.models.user || mongoose.model('user', userSchema);
