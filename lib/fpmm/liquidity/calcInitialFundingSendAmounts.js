"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcInitialFundingSendAmounts = void 0;
var calcAddFundingSendAmounts_1 = require("./calcAddFundingSendAmounts");
/**
 * Compute the number of outcome tokens that will be sent to the user by the market maker after funding it for the first time with `addedFunds` of collateral.
 * @dev The distribution hint plays the role of the pool's balances so we can just forward this to calcAddFundingSendAmounts
 * @param addedFunds - the amount of collateral being added to the market maker as liquidity
 * @param distributionHint - a distribution hint as calculated by `calcDistributionHint`
 */
exports.calcInitialFundingSendAmounts = function (addedFunds, distributionHint) { return calcAddFundingSendAmounts_1.calcAddFundingSendAmounts(addedFunds, distributionHint); };
