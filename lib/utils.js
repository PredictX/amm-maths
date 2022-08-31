"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ceilDiv = exports.divBN = exports.mulBN = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var constants_1 = require("@ethersproject/constants");
/**
 * Performs multiplication between a BigNumber and a decimal number while temporarily scaling the decimal to preserve precision
 * @param a - a BigNumber to multiply by b
 * @param b - a decimal by which to multiple a by.
 * @param scale - the factor by which to scale the numerator by before division
 */
exports.mulBN = function (a, b, scale) {
    if (scale === void 0) { scale = 10000; }
    return bignumber_1.BigNumber.from(a)
        .mul(Math.round(b * scale))
        .div(scale);
};
/**
 * Performs division between two BigNumbers while temporarily scaling the numerator to preserve precision
 * @param a - the numerator
 * @param b - the denominator
 * @param scale - the factor by which to scale the numerator by before division
 */
exports.divBN = function (a, b, scale) {
    if (scale === void 0) { scale = 10000; }
    return (bignumber_1.BigNumber.from(a)
        .mul(scale)
        .div(b)
        .toNumber() / scale);
};
/**
 * Peforms ceil(numerator/denominator)
 * @param a - the numerator
 * @param b - the denominator
 */
exports.ceilDiv = function (a, b) {
    var aBN = bignumber_1.BigNumber.from(a);
    return aBN.mod(b) === constants_1.Zero ? aBN.div(b) : aBN.div(b).add(1);
};
