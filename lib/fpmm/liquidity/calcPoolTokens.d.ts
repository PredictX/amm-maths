import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
/**
 * Compute the number of liquidity pool tokens that will be sent to the user by the Market Maker
 * after adding `addedFunds` of collateral.
 * @param addedFunds - the amount of collateral being added to the market maker as liquidity
 * @param poolBalances - the market maker's balances of outcome tokens
 * @param poolShareSupply - the total supply of liquidity pool tokens
 */
export declare const calcPoolTokens: (addedFunds: BigNumberish, poolBalances: BigNumberish[], poolShareSupply: BigNumberish) => BigNumber;
