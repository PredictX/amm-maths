import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
/**
 * Computes the market maker's balances of outcome tokens after a trade to buy shares of a particular outcome
 * @param initialPoolBalances - the market maker's balances of outcome tokens before the trade
 * @param outcomeIndex - the index of the outcome token being bought
 * @param investmentAmountAfterFees - the amount of collateral being converted into outcome tokens (i.e. post fees)
 * @param sharesBoughtAmount - the amount of outcome tokens being removed from the market maker
 * @param fees - the percentage fees taken by the market maker on each trade
 */
export declare const computeBalanceAfterSharePurchase: (initialPoolBalances: BigNumberish[], outcomeIndex: number, investmentAmount: BigNumberish, sharesBoughtAmount: BigNumberish, fees: number) => BigNumber[];
