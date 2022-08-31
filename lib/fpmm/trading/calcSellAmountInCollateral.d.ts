import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
/**
 * Computes the amount of collateral that needs to be sold to get `shares` amount of shares. Returns null if the amount
 * couldn't be computed.
 *
 * @param sharesToSell The amount of shares that need to be sold
 * @param outcomeIndex The index of the outcome being bought
 * @param poolBalances How many tokens the market maker has of each outcome
 * @param fee The fee of the market maker, between 0 and 1
 */
export declare const calcSellAmountInCollateral: (sharesToSell: BigNumberish, outcomeIndex: number, poolBalances: BigNumberish[], fee: number) => BigNumber | null;
