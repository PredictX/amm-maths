"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcDistributionHint = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var big_js_1 = __importDefault(require("big.js"));
/**
 * Computes the distribution hint that should be used for setting the initial odds to `initialOdds`
 * @param initialOdds - an array of numbers proportional to the initial estimate of the probability of each outcome
 */
exports.calcDistributionHint = function (initialOdds) {
    if (initialOdds.some(function (x) { return x === 0; })) {
        throw new Error("Invalid probability - can't assign a probability of zero to an outcome");
    }
    var allEqual = initialOdds.every(function (x) { return x === initialOdds[0]; });
    if (allEqual) {
        return [];
    }
    var initialOddsBig = initialOdds.map(function (x) { return new big_js_1.default(x); });
    var product = initialOddsBig.reduce(function (a, b) { return a.mul(b); });
    var distributionHint = initialOddsBig
        .map(function (o) { return product.div(o); })
        .map(function (x) { return x.mul(1000000).round(); })
        .map(function (x) { return bignumber_1.BigNumber.from(x.toString()); });
    return distributionHint;
};
