"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcRemoveFundingSendAmounts = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var constants_1 = require("@ethersproject/constants");
/**
 * Compute the number of outcome tokens that will be sent to the user by the Market Maker
 * after removing `removedFunds` of pool shares.
 * @param removedFunds - the amount of liquidity pool tokens being sent to the market maker in return for underlying outcome tokens
 * @param poolBalances - the market maker's balances of outcome tokens
 * @param poolShareSupply - the total supply of liquidity pool tokens
 */
exports.calcRemoveFundingSendAmounts = function (removedFunds, poolBalances, poolShareSupply) {
    var sendAmounts = poolBalances.map(function (h) {
        return bignumber_1.BigNumber.from(poolShareSupply).gt(0)
            ? bignumber_1.BigNumber.from(h)
                .mul(removedFunds)
                .div(poolShareSupply)
            : constants_1.Zero;
    });
    return sendAmounts;
};
