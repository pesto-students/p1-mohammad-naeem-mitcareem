

function memoize(fn){
    const cache = new Map();
    return function(...args){
        const key =args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}

function add(a, b){
    return a + b;
}


const memoizeAdd = memoize(add)
console.log(memoizeAdd(2, 4));
console.log(memoizeAdd(2, 4));
console.log(memoizeAdd(7, 4));
console.log(memoizeAdd(6, 4));
console.log(memoizeAdd(2, 4));