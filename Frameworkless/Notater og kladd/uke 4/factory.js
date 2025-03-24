var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(dateOfBirth) {
        this._dateOfBirth = dateOfBirth;
    }
    Person.prototype.getDateOfBirth = function () {
        return this._dateOfBirth.toDateString();
    };
    return Person;
}());
var Infant = /** @class */ (function (_super) {
    __extends(Infant, _super);
    function Infant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Infant.prototype.getPersonCategory = function () {
        return "Infant";
    };
    Infant.prototype.canSignContracts = function () {
        return false;
    };
    return Infant;
}(Person));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.getPersonCategory = function () {
        return "Child";
    };
    Child.prototype.canSignContracts = function () {
        return false;
    };
    return Child;
}(Person));
var Adult = /** @class */ (function (_super) {
    __extends(Adult, _super);
    function Adult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adult.prototype.getPersonCategory = function () {
        return "Adult";
    };
    Adult.prototype.canSignContracts = function () {
        return true;
    };
    return Adult;
}(Person));
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.getPerson = function (dateOfBirth) {
        var dateNow = new Date();
        var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, dateNow.getMonth(), dateNow.getDay());
        var dateEighteenYearsAgo = new Date(dateNow.getFullYear() - 18, dateNow.getMonth(), dateNow.getDay());
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= dateEighteenYearsAgo) {
            return new Child(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    };
    return PersonFactory;
}());
window.onload = function () {
    var personFactory = new PersonFactory();
    var personArray = new Array();
    personArray.push(personFactory.getPerson(new Date(2024, 9, 29))); // Infant
    personArray.push(personFactory.getPerson(new Date(2010, 9, 29))); // Child
    personArray.push(personFactory.getPerson(new Date(1973, 9, 29))); // Adult
    for (var i = 0; i < personArray.length; i++) {
        console.log(" A Person with a birth date of: " +
            personArray[i].getDateOfBirth() +
            " is categorised as : " +
            personArray[i].getPersonCategory() +
            " and can sign : " +
            personArray[i].canSignContracts());
    }
};
