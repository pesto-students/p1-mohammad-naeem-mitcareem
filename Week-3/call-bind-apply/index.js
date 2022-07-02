function sum (a, b) {
    return this.a + this.b;
}

//bind------ creats a new function and return a function and invoke it later
const sumB = sum.bind ({a:10,b:15}) 
console.log("Bind: ", sumB());


//call-----pass a object without creating a new function
console.log("Call: ",sum.call ({a:15,b:20}));

//apply----- passing arguments as an array
var numbers = [1, 2, 3, 5, 4];
var max = Math.max.apply(null, numbers);
var max1 = Math.max.call(null,...numbers);
console.log("Max from Apply: ", max);
console.log("Max1 from Call: ", max1);
