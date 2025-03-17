var ComplexType = /** @class */ (function () {
    function ComplexType(idArg, nameArg) {
        this.id = idArg;
        this.name = nameArg;
    }
    ComplexType.prototype.print = function () {
        return "id:" + this.id + " name:" + this.name;
    };
    ComplexType.prototype.usingTheAnyKeyword = function (arg1) {
        this.id = arg1;
    };
    ComplexType.prototype.usingOptionalParameters = function (optionalArg1) {
        if (optionalArg1) {
            this.id = optionalArg1;
        }
    };
    ComplexType.prototype.usingDefaultParameters = function (defaultArg1) {
        if (defaultArg1 === void 0) { defaultArg1 = 0; }
        this.id = defaultArg1;
    };
    ComplexType.prototype.usingRestSyntax = function () {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        if (argArray.length > 0) {
            this.id = argArray[0];
        }
    };
    ComplexType.prototype.usingFunctionCallbacks = function (callback) {
        callback(this.id);
    };
    return ComplexType;
}());
var complexType = new ComplexType(1, "complexType");
var complexType_2 = new ComplexType(2, "complexType_2");
var writeToTerm = function () {
    console.log(complexType.print());
    console.log(complexType_2.print());
};
writeToTerm();
