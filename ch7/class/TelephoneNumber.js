export class TelephoneNumber {
    get areaCode() { return this._officeAreaCode; }
    set areaCode(arg) { this._officeAreaCode = arg; }

    get number() {
        return this._officeNumber;
    }

    set number(value) {
        this._officeNumber = value;
    }

    get toString() {
        return `(${this._officeAreaCode}) ${this._officeNumber}`;
    }
}
