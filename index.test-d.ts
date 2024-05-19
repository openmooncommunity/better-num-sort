import { expectType } from 'tsd';
import { numberSortAscending, numberSortDescending, numberSortCustom } from './index';

// Test for numberSortAscending
expectType<number[]>(numberSortAscending([3, 1, 4, 1, 5, 9]));
expectType<number[]>(numberSortAscending([3, NaN, 2, 1]));

// Test for numberSortDescending
expectType<number[]>(numberSortDescending([3, 1, 4, 1, 5, 9]));
expectType<number[]>(numberSortDescending([3, Infinity, 2, -Infinity]));

// Test for numberSortCustom
expectType<number[]>(numberSortCustom([3, 1, 4, 1, 5, 9], (a, b) => b - a));
expectType<number[]>(numberSortCustom([-3, -1, 4, -1, 5, -9], (a, b) => Math.abs(a) - Math.abs(b)));

// Ensure that the custom comparator function is properly typed
expectType<number[]>(numberSortCustom([3, 1, 4, 1, 5, 9], (a: number, b: number) => a - b));

// Invalid cases should raise errors
// @ts-expect-error
numberSortAscending(['a', 'b', 'c']);
// @ts-expect-error
numberSortDescending(['a', 'b', 'c']);
// @ts-expect-error
numberSortCustom(['a', 'b', 'c'], (a, b) => a.localeCompare(b));
