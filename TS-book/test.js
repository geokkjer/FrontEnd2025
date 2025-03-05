var addNumbers = function (a, b) {
    return a + b;
};
var concatStrings = function (a, b, c) {
    if (c === void 0) { c = "c"; }
    return a + b + c;
};
console.log(addNumbers(3, 4), addNumbers(1, 2));
console.log(concatStrings("a", "b", "c"));
console.log(concatStrings("a", "b"));
function testParams() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i] = arguments[_i];
    }
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argArray " + i + " = " + argArray[i]);
            console.log("Argument " + i + " = " + arguments[i]);
        }
    }
}
testParams(1);
testParams(1, 2, 3, 4);
// testParams("one", "two");
