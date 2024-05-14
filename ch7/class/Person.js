import {TelephoneNumber} from "./TelephoneNumber.js";

class Person {
    name;
    telephoneNumber;
    officeAreaCode;
    officeNumber;

    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get telephoneNumber() {
        return this._telephoneNumber.telephoneNumber;
    }


    get officeAreaCode() {
        return this._telephoneNumber.officeAreaCode;
    }

    set officeAreaCode(arg) {
        this._telephoneNumber.officeAreaCode = arg;
    }

    get officeNumber() {
        return this._telephoneNumber.officeNumber;
    }

    set officeNumber(arg) {
        this._telephoneNumber.officeNumber = arg;
    }

}
