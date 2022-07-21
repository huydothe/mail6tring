"use strict";
exports.__esModule = true;
var demo_1 = require("./demo");
var emailRegex = new demo_1.EmailRegex();
var validAccount = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
var invalidAccount = [".@", "12345", "1234_", "abcde"];
for (var _i = 0, validAccount_1 = validAccount; _i < validAccount_1.length; _i++) {
    var email = validAccount_1[_i];
    var isValid = emailRegex.validate(email);
    console.log("Email ".concat(email, " is valid: ").concat(isValid));
}
for (var _a = 0, invalidAccount_1 = invalidAccount; _a < invalidAccount_1.length; _a++) {
    var email = invalidAccount_1[_a];
    var isValid = emailRegex.validate(email);
    console.log("Email ".concat(email, " is valid: ").concat(isValid));
}
