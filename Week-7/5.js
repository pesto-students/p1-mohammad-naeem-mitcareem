let array = [1, 3, 2, 4];
let stack = [];
let temp = Array(array.length);

//traversing through array from last
for (let i = array.length - 1; i >= 0; i--) {

    if (stack.length != 0) {
        while (stack.length != 0 && stack[stack.length - 1] <= array[i]) {
            stack.pop();
        }
    }
    if (stack.length == 0) {
        temp[i] = -1

    }
    else
        temp[i] = stack[stack.length - 1];

    stack.push(array[i]);
}

for (let i = 0; i < array.length; i++)
    console.log(temp[i]);