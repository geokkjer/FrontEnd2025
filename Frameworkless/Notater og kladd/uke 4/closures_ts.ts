function TestClosure(value: any): () => void {
  this._value = value;
  function printValue() {
    console.log(this._value);
  }
  return printValue;
}
var myClosure = TestClosure(12);
myClosure();
// class BaseClassWithConstructor {
//   private _id: number;
//   constructor(id: number) {
//     this._id = id;
//   }
//   getProperties(): string {
//     return "_id:" + this._id;
//   }
// }

var BaseClassWithConstructor = (function () {
    function BaseClassWithConstructor(id: number) {
        this._id = id
    }
    BaseClassWithConstructor.prototype.getProperties = function () {
        return "_id:" + this._id;
    }
    return BaseClassWithConstructor
}) ();