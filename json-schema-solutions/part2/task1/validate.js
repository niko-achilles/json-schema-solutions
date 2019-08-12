'use strict';

var Ajv = require('ajv');
var assert = require('assert');

var userData = require('./data');
var invalidUserData = require('./invalid_data');

var userSchema = require('./user');

var connectionSchema = require('./connection');
var connectionWithDefinitionsSchema = require('./connection-with-definitions');

var ajv = Ajv({allErrors: true});
ajv.addSchema(userSchema);
//ajv.addSchema(connectionSchema);
ajv.addSchema(connectionWithDefinitionsSchema);


var validate = ajv.getSchema('http://niko.achilles/schemas/user.json');
assert(validate(userData) === true, 'data.json should be valid');
assert(validate(invalidUserData) === false, 'invalid_data.json should be invalid');

console.log('You\'ve done task 1!');
