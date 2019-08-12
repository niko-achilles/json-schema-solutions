'use strict';

var Ajv = require('ajv');
var assert = require('assert');

var filterSchema = require("./filter_schema");

var users = require("./users.json")

var ajv = Ajv();

var validate = ajv.compile(filterSchema);
var filteredUsers = users.filter(function (user) {
  return validate(user);
});

assert.deepEqual(filteredUsers, [{
  "personal": {
    "name": "John Smith",
    "age": 65,
    "gender": "male"
  },
  "connections": [
    {
      "connType": "friend",
      "name": "Robert Jones"
    }
  ],
  "feeds": {
    "news": true,
    "sport": true,
  }
}]);

console.log('You\'ve done task 4!');
