export class TelephoneNumber {
    get officeAreaCode() { return this._officeAreaCode; }
    set officeAreaCode(arg) { this._officeAreaCode = arg; }

    get officeNumber() {
        return this._officeNumber;
    }

    set officeNumber(value) {
        this._officeNumber = value;
    }

    get telephoneNumber() {
        return `(${this._officeAreaCode}) ${this._officeNumber}`;
    }
}
