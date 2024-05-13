export class CustomerData {
    constructor(data) {
        this._data = data;
    }

    get rawData() {
        return _.cloneDeep(this._data);
    }

    setUsage(customerId, year, month, amount) {
        this._data[customerId].usage[year][month] = amount;
    }

    usage(customerId, year, month) {
        return this._data[customerId].usage[year][month];
    }

}
