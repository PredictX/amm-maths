import { BigNumberish } from "@ethersproject/bignumber";
/**
 * Computes the price of each outcome token given their holdings. Returns an array of numbers in the range [0, 1]
 * @param poolBalances - the market maker's balances of outcome tokens
 */
export declare const calcPrice: (poolBalances: BigNumberish[]) => number[];
