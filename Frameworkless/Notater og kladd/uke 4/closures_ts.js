function TestClosure(value) {
    this._value = value;
    function printValue() {
        console.log(this._value);
    }
    return printValue;
}
var myClosure = TestClosure(12);
myClosure();
