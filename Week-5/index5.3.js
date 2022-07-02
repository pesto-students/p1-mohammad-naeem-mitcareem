const hasDuplicate = arr => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1,2,3,4,9,3,4]));
