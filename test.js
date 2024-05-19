const { numberSortAscending, numberSortDescending, numberSortCustom } = require('./index');

describe('better-num-sort', () => {
    test('numberSortAscending should sort numbers in ascending order', () => {
        expect(numberSortAscending([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
    });

    test('numberSortDescending should sort numbers in descending order', () => {
        expect(numberSortDescending([3, 1, 4, 1, 5, 9])).toEqual([9, 5, 4, 3, 1, 1]);
    });

    test('numberSortCustom should sort numbers with a custom comparator', () => {
        const customComparator = (a, b) => b - a;
        expect(numberSortCustom([3, 1, 4, 1, 5, 9], customComparator)).toEqual([9, 5, 4, 3, 1, 1]);
    });

    test('numberSortAscending should handle NaN values correctly', () => {
        const result = numberSortAscending([3, NaN, 2, 1]);
        expect(result.slice(0, 3)).toEqual([1, 2, 3]);
        expect(isNaN(result[3])).toBe(true);
    });

    test('numberSortDescending should handle Infinity values correctly', () => {
        expect(numberSortDescending([3, Infinity, 2, -Infinity])).toEqual([Infinity, 3, 2, -Infinity]);
    });

    test('numberSortCustom should handle custom sorting of negative numbers', () => {
        const customComparator = (a, b) => Math.abs(a) - Math.abs(b);
        expect(numberSortCustom([-3, -1, 4, -1, 5, -9], customComparator)).toEqual([-1, -1, -3, 4, 5, -9]);
    });
});
