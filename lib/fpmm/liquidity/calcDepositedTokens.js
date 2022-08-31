"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcDepositedTokens = void 0;
var calcRemoveFundingSendAmounts_1 = require("./calcRemoveFundingSendAmounts");
/**
 * Compute the amount of collateral that can be obtained via merging after the user
 * removed `removedFunds` of pool shares.
 * @param removedFunds - the amount of liquidity pool tokens being sent to the market maker in return for underlying outcome tokens
 * @param poolBalances - the market maker's balances of outcome tokens
 * @param poolShareSupply - the total supply of liquidity pool tokens
 */
exports.calcDepositedTokens = function (removedFunds, poolBalances, poolShareSupply) {
    var sendAmounts = calcRemoveFundingSendAmounts_1.calcRemoveFundingSendAmounts(removedFunds, poolBalances, poolShareSupply);
    return sendAmounts.reduce(function (min, amount) { return (amount.lt(min) ? amount : min); });
};
