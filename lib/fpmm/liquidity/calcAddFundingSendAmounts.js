"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcAddFundingSendAmounts = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var calcAddFundingDepositedAmounts_1 = require("./calcAddFundingDepositedAmounts");
/**
 * Compute the numbers of outcome tokens that will be sent to the user by the market maker after adding `addedFunds` of collateral.
 * @param addedFunds - the amount of collateral being added to the market maker as liquidity
 * @param poolBalances - the market maker's balances of outcome tokens
 */
exports.calcAddFundingSendAmounts = function (addedFunds, poolBalances) {
    var depositAmounts = calcAddFundingDepositedAmounts_1.calcAddFundingDepositedAmounts(addedFunds, poolBalances);
    var sendAmounts = depositAmounts.map(function (depositAmount) { return bignumber_1.BigNumber.from(addedFunds).sub(depositAmount); });
    return sendAmounts;
};
