import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
/**
 * Performs multiplication between a BigNumber and a decimal number while temporarily scaling the decimal to preserve precision
 * @param a - a BigNumber to multiply by b
 * @param b - a decimal by which to multiple a by.
 * @param scale - the factor by which to scale the numerator by before division
 */
export declare const mulBN: (a: BigNumberish, b: number, scale?: number) => BigNumber;
/**
 * Performs division between two BigNumbers while temporarily scaling the numerator to preserve precision
 * @param a - the numerator
 * @param b - the denominator
 * @param scale - the factor by which to scale the numerator by before division
 */
export declare const divBN: (a: BigNumberish, b: BigNumberish, scale?: number) => number;
/**
 * Peforms ceil(numerator/denominator)
 * @param a - the numerator
 * @param b - the denominator
 */
export declare const ceilDiv: (a: BigNumberish, b: BigNumberish) => BigNumber;
