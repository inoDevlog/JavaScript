function add(x, y) {
    return x + y;
}
add.result = add(3, 2);
add.status = 'OK';
console.log(add.result);
console.log(add.status);

var foo = 100;
var bar = function () { return 100; };
console.log(bar());

var obj = {};
obj.baz = function () { return 200; }
console.log(obj.baz());

var foo = function(func) {
    func();
};

foo(function(){
    console.log('Function can be used as the argument/');
});

var foo = function() {
    return function () {
        console.log('this function is the return value.')
    };
};
var bar = foo();
bar();

function add(x, y) {
    return x + y;
}
console.dir(add);