"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcBuyAmountInShares = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var constants_1 = require("@ethersproject/constants");
var utils_1 = require("../../utils");
/**
 * Computes the amount of shares that will be bought with `investmentAmount` amount collateral.
 *
 * @param investmentAmount The amount of collateral being put into the market maker
 * @param outcomeIndex The index of the outcome being bought
 * @param poolBalances How many tokens the market maker has of each outcome
 * @param fee The fee of the market maker, between 0 and 1
 */
exports.calcBuyAmountInShares = function (investmentAmount, outcomeIndex, poolBalances, fee) {
    if (outcomeIndex < 0 || outcomeIndex >= poolBalances.length) {
        throw new Error("Outcome index '" + outcomeIndex + "' must be between 0 and '" + (poolBalances.length - 1) + "'");
    }
    if (bignumber_1.BigNumber.from(investmentAmount).isZero() || poolBalances.every(function (x) { return bignumber_1.BigNumber.from(x).isZero(); }))
        return constants_1.Zero;
    var investmentAmountMinusFees = utils_1.mulBN(investmentAmount, 1 - fee);
    var newOutcomeBalance = poolBalances.reduce(function (accumulator, poolBalance, i) {
        return i !== outcomeIndex
            ? utils_1.ceilDiv(accumulator.mul(poolBalance), bignumber_1.BigNumber.from(poolBalance).add(investmentAmountMinusFees))
            : accumulator.mul(poolBalance);
    }, constants_1.WeiPerEther);
    return bignumber_1.BigNumber.from(poolBalances[outcomeIndex])
        .add(investmentAmountMinusFees)
        .sub(utils_1.ceilDiv(newOutcomeBalance, constants_1.WeiPerEther));
};
