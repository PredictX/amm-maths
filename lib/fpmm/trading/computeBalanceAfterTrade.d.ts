import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
/**
 * Computes the market maker's balances of outcome tokens after a trade
 *
 * @dev It is recommended to use the methods `computeBalanceAfterSharePurchase` and `computeBalanceAfterShareSale` instead of this
 *
 * @param initialPoolBalances - the market maker's balances of outcome tokens before the trade
 * @param outcomeIndex - the index of the outcome token being bought
 * @param investmentAmountAfterFees - the amount of collateral being converted into outcome tokens (i.e. post fees)
 * @param sharesBoughtAmount - the amount of outcome tokens being removed from the market maker
 */
export declare const computeBalanceAfterTrade: (initialPoolBalances: BigNumberish[], outcomeIndex: number, investmentAmount: BigNumberish, sharesRemovedAmount: BigNumberish) => BigNumber[];
