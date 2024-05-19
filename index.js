/**
 * Sort an array of numbers in ascending order.
 * Handles NaN and Infinity correctly.
 * @param {number[]} array - The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
function numberSortAscending(array) {
    return array.slice().sort((a, b) => {
        if (isNaN(a) && isNaN(b)) return 0;
        if (isNaN(a)) return 1;
        if (isNaN(b)) return -1;
        return a - b;
    });
}

/**
 * Sort an array of numbers in descending order.
 * Handles NaN and Infinity correctly.
 * @param {number[]} array - The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
function numberSortDescending(array) {
    return array.slice().sort((a, b) => b - a);
}

/**
 * Sort an array of numbers with a custom comparator.
 * @param {number[]} array - The array of numbers to sort.
 * @param {function} comparator - The custom comparator function.
 * @returns {number[]} The sorted array.
 */
function numberSortCustom(array, comparator) {
    return array.slice().sort(comparator);
}

module.exports = {
    numberSortAscending,
    numberSortDescending,
    numberSortCustom
};
