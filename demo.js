"use strict";
exports.__esModule = true;
exports.EmailRegex = void 0;
var EmailRegex = /** @class */ (function () {
    function EmailRegex() {
        this.emailRegex = /^[_|a-z|0-9|A-Z]{6,}$/;
    }
    EmailRegex.prototype.validate = function (email) {
        return this.emailRegex.test(email);
    };
    return EmailRegex;
}());
exports.EmailRegex = EmailRegex;
