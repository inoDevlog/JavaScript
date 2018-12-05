var emptyArray = [];
var emptyObj = {};

console.dir(emptyArray.__proto__);
console.dir(emptyObj.__proto__);

var arr = ['zero', 'one', 'two'];
console.log(arr.length);

arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);

arr[3] ='red';
console.log(arr.length);
console.dir(arr);

for (var prop in arr) {
    console.log(prop, arr[prop]);
}
for (var i=0; i<arr.length; i++) {
    console.log(i, arr[i]);
}
var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr);
console.log(arr.length);

var arr = ['zero', 'one', 'two', 'three'];
arr.splice(2, 1);
console.log(arr);
console.log(arr.length);

var add = function sum(x, y) {
    return x + y;
};
console.log(add(3,4));
console.log(sum(3,4));

var factorialVar = function factorial(n) {
    if(n <= 1) {
        return 1;
    }
    return n * factorial(n-1);
};
console.log(factorialVar(3));
console.log(factorial(3));

var add = new Function('x', 'y', 'return x + y');
console.log(add(3, 4));