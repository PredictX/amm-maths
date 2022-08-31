"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeBalanceAfterSharePurchase = void 0;
var constants_1 = require("@ethersproject/constants");
var utils_1 = require("../../utils");
var computeBalanceAfterTrade_1 = require("./computeBalanceAfterTrade");
/**
 * Computes the market maker's balances of outcome tokens after a trade to buy shares of a particular outcome
 * @param initialPoolBalances - the market maker's balances of outcome tokens before the trade
 * @param outcomeIndex - the index of the outcome token being bought
 * @param investmentAmountAfterFees - the amount of collateral being converted into outcome tokens (i.e. post fees)
 * @param sharesBoughtAmount - the amount of outcome tokens being removed from the market maker
 * @param fees - the percentage fees taken by the market maker on each trade
 */
exports.computeBalanceAfterSharePurchase = function (initialPoolBalances, outcomeIndex, investmentAmount, sharesBoughtAmount, fees) {
    return computeBalanceAfterTrade_1.computeBalanceAfterTrade(initialPoolBalances, outcomeIndex, fees !== 1 ? utils_1.mulBN(investmentAmount, 1 - fees) : constants_1.Zero, sharesBoughtAmount);
};
