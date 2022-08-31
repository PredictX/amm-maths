"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcSellAmountInCollateral = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var newton_raphson_method_1 = require("@fvictorio/newton-raphson-method");
var big_js_1 = __importDefault(require("big.js"));
/**
 * Computes the amount of collateral that needs to be sold to get `shares` amount of shares. Returns null if the amount
 * couldn't be computed.
 *
 * @param sharesToSell The amount of shares that need to be sold
 * @param outcomeIndex The index of the outcome being bought
 * @param poolBalances How many tokens the market maker has of each outcome
 * @param fee The fee of the market maker, between 0 and 1
 */
exports.calcSellAmountInCollateral = function (sharesToSell, outcomeIndex, poolBalances, fee) {
    big_js_1.default.DP = 90;
    if (outcomeIndex < 0 || outcomeIndex >= poolBalances.length) {
        throw new Error("Outcome index '" + outcomeIndex + "' must be between 0 and '" + (poolBalances.length - 1) + "'");
    }
    var holdings = poolBalances[outcomeIndex];
    var otherHoldings = poolBalances.filter(function (_, i) { return outcomeIndex !== i; });
    var sharesToSellBig = new big_js_1.default(sharesToSell.toString());
    var holdingsBig = new big_js_1.default(holdings.toString());
    var otherHoldingsBig = otherHoldings.map(function (x) { return new big_js_1.default(x.toString()); });
    var f = function (r) {
        // For three outcomes, where the first outcome is the one being sold, the formula is:
        // f(r) = ((y - R) * (z - R)) * (x  + a - R) - x*y*z
        // where:
        //   `R` is r / (1 - fee)
        //   `x`, `y`, `z` are the market maker holdings for each outcome
        //   `a` is the amount of outcomes that are being sold
        //   `r` (the unknown) is the amount of collateral that will be returned in exchange of `a` tokens
        var R = r.div(1 - fee);
        var firstTerm = otherHoldingsBig.map(function (h) { return h.minus(R); }).reduce(function (a, b) { return a.mul(b); });
        var secondTerm = holdingsBig.plus(sharesToSellBig).minus(R);
        var thirdTerm = otherHoldingsBig.reduce(function (a, b) { return a.mul(b); }, holdingsBig);
        return firstTerm.mul(secondTerm).minus(thirdTerm);
    };
    var r = newton_raphson_method_1.newtonRaphson(f, 0, { maxIterations: 100 });
    if (r) {
        var amountToSell = bignumber_1.BigNumber.from(r.toFixed(0));
        return amountToSell;
    }
    return null;
};
