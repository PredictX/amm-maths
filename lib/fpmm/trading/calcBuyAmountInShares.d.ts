import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
/**
 * Computes the amount of shares that will be bought with `investmentAmount` amount collateral.
 *
 * @param investmentAmount The amount of collateral being put into the market maker
 * @param outcomeIndex The index of the outcome being bought
 * @param poolBalances How many tokens the market maker has of each outcome
 * @param fee The fee of the market maker, between 0 and 1
 */
export declare const calcBuyAmountInShares: (investmentAmount: BigNumberish, outcomeIndex: number, poolBalances: BigNumberish[], fee: number) => BigNumber;
