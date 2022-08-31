"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcPoolTokens = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
/**
 * Compute the number of liquidity pool tokens that will be sent to the user by the Market Maker
 * after adding `addedFunds` of collateral.
 * @param addedFunds - the amount of collateral being added to the market maker as liquidity
 * @param poolBalances - the market maker's balances of outcome tokens
 * @param poolShareSupply - the total supply of liquidity pool tokens
 */
exports.calcPoolTokens = function (addedFunds, poolBalances, poolShareSupply) {
    if (bignumber_1.BigNumber.from(poolShareSupply).eq(0)) {
        return bignumber_1.BigNumber.from(addedFunds);
    }
    var poolWeight = poolBalances.reduce(function (max, h) { return (bignumber_1.BigNumber.from(h).gt(max) ? h : max); });
    return bignumber_1.BigNumber.from(addedFunds)
        .mul(poolShareSupply)
        .div(poolWeight);
};
