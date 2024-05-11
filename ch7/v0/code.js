organization = {name: "애크미 구스베리",country: "GB"}

class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }
}
