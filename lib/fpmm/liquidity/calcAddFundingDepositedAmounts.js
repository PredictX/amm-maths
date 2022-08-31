"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcAddFundingDepositedAmounts = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
/**
 * Compute the numbers of outcome tokens that will be added to the market maker after adding `addedFunds` of collateral.
 * @param addedFunds - the amount of collateral being added to the market maker as liquidity
 * @param poolBalances - the market maker's balances of outcome tokens
 */
exports.calcAddFundingDepositedAmounts = function (addedFunds, poolBalances) {
    if (poolBalances.some(function (x) { return bignumber_1.BigNumber.from(x).isZero(); })) {
        throw new Error("Invalid Pool Balances - you must provide a distribution hint for the desired weightings of the pool");
    }
    var poolWeight = poolBalances.reduce(function (a, b) { return (bignumber_1.BigNumber.from(a).gt(b) ? a : b); });
    var depositAmounts = poolBalances.map(function (h) {
        return bignumber_1.BigNumber.from(addedFunds)
            .mul(h)
            .div(poolWeight);
    });
    return depositAmounts;
};
