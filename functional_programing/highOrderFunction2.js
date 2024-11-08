function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);

        return result;
        };
}

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({length: 5000}, (_, i) => i + 1);

console.time('memoized sum first call');
console.log('total: ', memoizedSumArray(largeArray));
console.timeEnd('memoized sum first call');

console.time('memoized sum second call (Cached)');
console.log('total: ', memoizedSumArray(largeArray));
console.timeEnd('memoized sum second call (Cached)');