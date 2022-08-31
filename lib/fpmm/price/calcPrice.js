"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcPrice = void 0;
var big_js_1 = __importDefault(require("big.js"));
/**
 * Computes the price of each outcome token given their holdings. Returns an array of numbers in the range [0, 1]
 * @param poolBalances - the market maker's balances of outcome tokens
 */
exports.calcPrice = function (poolBalances) {
    var balances = poolBalances.map(function (h) { return new big_js_1.default(h.toString()); });
    var hasZeroBalances = balances.every(function (h) { return h.toString() === "0"; });
    if (hasZeroBalances) {
        return balances.map(function () { return 0; });
    }
    var product = balances.reduce(function (a, b) { return a.mul(b); });
    var denominator = balances.map(function (h) { return product.div(h); }).reduce(function (a, b) { return a.add(b); });
    var prices = balances.map(function (holding) { return product.div(holding).div(denominator); });
    return prices.map(function (price) { return +price.valueOf(); });
};
