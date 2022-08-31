"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeBalanceAfterShareSale = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var constants_1 = require("@ethersproject/constants");
var utils_1 = require("../../utils");
var computeBalanceAfterTrade_1 = require("./computeBalanceAfterTrade");
/**
 * Computes the market maker's balances of outcome tokens after a trade to sell shares of a particular outcome
 * @param initialPoolBalances - the market maker's balances of outcome tokens before the trade
 * @param outcomeIndex - the index of the outcome token being bought
 * @param returnAmountBeforeFees - the amount of collateral being converted into outcome tokens (i.e. post fees)
 * @param sharesSoldAmount - the amount of outcome tokens being removed from the market maker
 * @param fees - the percentage fees taken by the market maker on each trade
 */
exports.computeBalanceAfterShareSale = function (initialPoolBalances, outcomeIndex, returnAmount, sharesSoldAmount, fees) {
    return computeBalanceAfterTrade_1.computeBalanceAfterTrade(initialPoolBalances, outcomeIndex, fees !== 1
        ? bignumber_1.BigNumber.from(returnAmount)
            .mul(constants_1.WeiPerEther)
            .div(constants_1.WeiPerEther.sub(utils_1.mulBN(constants_1.WeiPerEther, fees)))
            .mul(-1)
        : constants_1.Zero, bignumber_1.BigNumber.from(sharesSoldAmount).mul(-1));
};
