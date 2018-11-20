var foo = {
    name: 'foo',
    age: 30
};
console.log(foo.toString());
console.dir(foo);

var foo = new Array(3);
console.log(foo);
console.log(foo.length);

var bar = new Array(1, 2, 3);
console.log(bar);
console.log(bar.length);

var arr = ['bar'];
var obj = {
    name: 'foo',
    length: 1
};
arr.push('baz');
console.log(arr);

var num = 0.5;
console.log(num.toExponential(1));
console.log("test".charAt(2))

var add1 = 1 + 'string';
var add2 = 'string' + 2;

console.log(add1);
console.log(add2);

console.log(1 == '1');
console.log(1 === '1');
console.log(1)
console.log(!!null);
console.log(!!undefined);
console.log(!!{});
console.log(!![1,2,3]);