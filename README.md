# better-num-sort

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![npm](https://img.shields.io/npm/v/better-num-sort)

A powerful JavaScript library for sorting arrays of numbers with enhanced performance and additional features. It supports various number formats, handles special values like NaN and Infinity, and offers customizable sorting options. Easy to integrate and use in any project.

## Features

- **Ascending and Descending Sorting**: Sort arrays in both ascending and descending order.
- **Custom Comparator**: Use custom comparator functions for flexible sorting.
- **Special Values Handling**: Properly handles NaN and Infinity values.
- **High Performance**: Optimized for performance with efficient algorithms.

## Installation

Install via npm:

```bash
npm install better-num-sort
```

## Usage

Import the library and use the sorting functions:

```javascript
const { numberSortAscending, numberSortDescending, numberSortCustom } = require('better-num-sort');

// Ascending order
console.log(numberSortAscending([3, 1, 4, 1, 5, 9]));

// Descending order
console.log(numberSortDescending([3, 1, 4, 1, 5, 9]));

// Custom comparator
const customComparator = (a, b) => b - a;
console.log(numberSortCustom([3, 1, 4, 1, 5, 9], customComparator));
```

## API

### `numberSortAscending(array: number[]): number[]`

Sorts an array of numbers in ascending order.

### `numberSortDescending(array: number[]): number[]`

Sorts an array of numbers in descending order.

### `numberSortCustom(array: number[], comparator: (a: number, b: number) => number): number[]`

Sorts an array of numbers using a custom comparator function.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.