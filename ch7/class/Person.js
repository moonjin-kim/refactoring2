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
        return this._telephoneNumber.toString;
    }


    get officeAreaCode() {
        return this._telephoneNumber.areaCode;
    }

    set officeAreaCode(arg) {
        this._telephoneNumber.areaCode = arg;
    }

    get officeNumber() {
        return this._telephoneNumber.number;
    }

    set officeNumber(arg) {
        this._telephoneNumber.number = arg;
    }

}
