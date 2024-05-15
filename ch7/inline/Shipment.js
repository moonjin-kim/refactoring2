import {TrackingInformation} from "./TrackingInformation.js";

class Shipment {
    constructor() {
        this._trackingInformation = new TrackingInformation();
    }

    set shippingCompany(arg) {this._shippingCompany = arg;}

    get trackingNumber() {
        return this._trackingNumber;
    }

    get trackingInfo() {
        return `${this._shippingCompany}: ${this._trackingNumber}`
        // return this._trackingInformation.display;
    }

    get trackingInformation() {
        return this._trackingInformation;
    }
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}
