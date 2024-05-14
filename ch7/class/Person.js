class Person {
    name;
    telephoneNumber;
    officeAreaCode;
    officeNumber;

    constructor(name, telephoneNumber, officeAreaCode, officeNumber) {
        this._name = name;
        this._telephoneNumber = telephoneNumber;
        this._officeAreaCode = officeAreaCode;
        this._officeNumber = officeNumber;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get telephoneNumber() {
        return `(${this._officeAreaCode}) ${this._officeNumber}`;
    }


    get officeAreaCode() {
        return this._officeAreaCode;
    }

    set officeAreaCode(value) {
        this._officeAreaCode = value;
    }

    get officeNumber() {
        return this._officeNumber;
    }

    set officeNumber(value) {
        this._officeNumber = value;
    }
}
