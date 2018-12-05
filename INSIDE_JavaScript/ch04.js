function add(x, y) {
    return x + y;
}
console.log(add(3, 4));

var add = function (x, y) {
    return x + y;
};
var plus = add;
console.log(add(3,4));
console.log(plus(5,6));

var add = function sum(x, y){
    return x + y;
};
console.log(add(3,4));

var minus = function (x, y) {
    return x - y;
};
console.log(minus(7,4));

var multiple = function ( x, y, z) {
    return x * y * z;
};
console.log(multiple(5, 6, 10));