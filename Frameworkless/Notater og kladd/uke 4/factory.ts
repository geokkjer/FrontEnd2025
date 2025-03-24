interface IPerson {
  getPersonCategory(): string;
  canSignContracts(): boolean;
  getDateOfBirth(): string;
}

class Person {
  _dateOfBirth: Date;
  constructor(dateOfBirth: Date) {
    this._dateOfBirth = dateOfBirth;
  }
  getDateOfBirth(): string {
    return this._dateOfBirth.toDateString();
  }
}
class Infant extends Person implements IPerson {
  getPersonCategory(): string {
    return "Infant";
  }
  canSignContracts(): boolean {
    return false;
  }
}
class Child extends Person implements IPerson {
  getPersonCategory(): string {
    return "Child";
  }
  canSignContracts(): boolean {
    return false;
  }
}
class Adult extends Person implements IPerson {
  getPersonCategory(): string {
    return "Adult";
  }
  canSignContracts(): boolean {
    return true;
  }
}

class PersonFactory {
  getPerson(dateOfBirth: Date): IPerson {
    var dateNow = new Date();
    var dateTwoYearsAgo = new Date(
      dateNow.getFullYear() - 2,
      dateNow.getMonth(),
      dateNow.getDay()
    );
    var dateEighteenYearsAgo = new Date(
      dateNow.getFullYear() - 18,
      dateNow.getMonth(),
      dateNow.getDay()
    );

    if (dateOfBirth >= dateTwoYearsAgo) {
      return new Infant(dateOfBirth);
    }
    if (dateOfBirth >= dateEighteenYearsAgo) {
      return new Child(dateOfBirth);
    }
    return new Adult(dateOfBirth);
  }
}

window.onload = () => {
  var personFactory = new PersonFactory();
  var personArray: IPerson[] = new Array();
  personArray.push(personFactory.getPerson(new Date(2024, 9, 29))); // Infant
  personArray.push(personFactory.getPerson(new Date(2010, 9, 29))); // Child
  personArray.push(personFactory.getPerson(new Date(1973, 9, 29))); // Adult

  for (var i = 0; i < personArray.length; i++) {
    console.log(
      " A Person with a birth date of: " +
        personArray[i].getDateOfBirth() +
        " is categorised as : " +
        personArray[i].getPersonCategory() +
        " and can sign : " +
        personArray[i].canSignContracts()
    );
  }
};
