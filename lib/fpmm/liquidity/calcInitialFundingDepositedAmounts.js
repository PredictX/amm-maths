"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcInitialFundingDepositedAmounts = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var calcAddFundingDepositedAmounts_1 = require("./calcAddFundingDepositedAmounts");
/**
 * Compute the numbers of outcome tokens that will be added to the market maker after adding `addedFunds` of collateral.
 * @dev The distribution hint plays the role of the pool's balances so we can just forward this to calcAddFundingSendAmounts
 * @param addedFunds - the amount of collateral being added to the market maker as liquidity
 * @param poolBalances - the market maker's balances of outcome tokens
 */
exports.calcInitialFundingDepositedAmounts = function (addedFunds, distributionHint) {
    if (distributionHint.some(function (x) { return bignumber_1.BigNumber.from(x).isZero(); })) {
        throw new Error("Invalid Distribution Hint - can't assign a weight of zero to an outcome");
    }
    return calcAddFundingDepositedAmounts_1.calcAddFundingDepositedAmounts(addedFunds, distributionHint);
};
