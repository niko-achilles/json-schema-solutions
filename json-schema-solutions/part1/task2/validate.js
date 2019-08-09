'use strict';

var Ajv = require('ajv');
var assert = require('assert');

var humanData = require('./human.json');
var machineData = require('./machine.json');
var invalidData = require('./invalid.json');

//var humanMachineSchema = require('./human_machine.schema.2.json'); <-- second solutio approach schema dependency
var humanMachineSchema = require('./human_machine.schema.json');

var ajv = Ajv();

var validate = ajv.compile(humanMachineSchema);

assert(validate(humanData));
assert(validate(machineData));
invalidData.forEach(function (data, i) {
  assert(!validate(data), '#' + i + ' should be invalid: ' + JSON.stringify(data));
});

console.log('You\'ve done task 2!');
