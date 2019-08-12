"use strict";

var Ajv = require("ajv");
var assert = require("assert");

var navData = require("./data.json");

var navSchema = require("./navigation.json");
var pageSchema = require("./page.json");
var defSchema = require("./defs.json");

var ajv = Ajv({
  allErrors: true,
  schemas: [defSchema, pageSchema, navSchema]
});

// get compiled schema by id of the added schemas
var validate = ajv.getSchema("http://niko.achilles/schemas/navigation.json");

assert(test(validate));

console.log("Navigation schema OK");

function test(validate) {
  var valid = validate(navData);

  if (valid) {
    console.log("Navigation data is valid!");
  } else {
    console.log("Navigation data is INVALID!");
    console.log(validate.errors);
  }

  return valid;
}
