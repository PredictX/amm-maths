import { BigNumber } from "@ethersproject/bignumber";
/**
 * Computes the distribution hint that should be used for setting the initial odds to `initialOdds`
 * @param initialOdds - an array of numbers proportional to the initial estimate of the probability of each outcome
 */
export declare const calcDistributionHint: (initialOdds: number[]) => BigNumber[];
