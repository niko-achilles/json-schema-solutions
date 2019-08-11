"use strict";

var Ajv = require("ajv");
var assert = require("assert");
var moment = require("moment");

var dateSchema = require("./date.schema.json");

const ajv = Ajv();

const validate = ajv.compile(dateSchema);

assert(validate("1976-02-24") && moment("1976-02-24").isAfter("1972-12-31"));

assert(validate("1980-01-21") && moment("1980-01-21").isAfter("1972-12-31"));

assert(validate("1995-03-14") && moment("1995-03-14").isAfter("1972-12-31"));

assert(validate("2015-11-05") && moment("2015-11-05").isAfter("1972-12-31"));

assert(validate(1976));
assert(validate(1986));

assert(validate("1975-07-11") && moment("1975-07-11").isAfter("1972-12-31"));

assert(validate("1970-02-14") && moment("1970-02-14").isBefore("1972-12-31"));

assert(validate(1975));
assert(!validate(1970));

console.log("You've done task 1!");
