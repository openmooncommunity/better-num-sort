/**
 * Sort an array of numbers in ascending order.
 * Handles NaN and Infinity correctly.
 * @param array - The array of numbers to sort.
 * @returns The sorted array.
 */
export function numberSortAscending(array: number[]): number[];

/**
 * Sort an array of numbers in descending order.
 * Handles NaN and Infinity correctly.
 * @param array - The array of numbers to sort.
 * @returns The sorted array.
 */
export function numberSortDescending(array: number[]): number[];

/**
 * Sort an array of numbers with a custom comparator.
 * @param array - The array of numbers to sort.
 * @param comparator - The custom comparator function.
 * @returns The sorted array.
 */
export function numberSortCustom(array: number[], comparator: (a: number, b: number) => number): number[];
