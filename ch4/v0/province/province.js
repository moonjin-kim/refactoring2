import {Producer} from "./producer.js";

export class Province {
    constructor(doc) {
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }

    addProducer(arg) {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }

    get name() {
        return this._name;
    }

    set name(arg) {
        this._name = arg;
    }

    get totalProduction() {
        return this._totalProduction;
    }

    set totalProduction(value) {
        this._totalProduction = value;
    }

    get price() {
        return this._price;
    }

    set price(arg) {
        this._price = parseInt(arg);
    }

    // 생산 부족분 게산 코드
    get shortfall() {
        return this._demand - this.totalProduction;
    }

    //수익 계산
    get profit() {
        return this.demandValue - this.demandCost;
    }

    get demandValue() {
        return this.satisfiedDemand * this.price;
    }

    get satisfiedDemand () {
        return Math.min(this._demand, this._totalProduction);
    }

    get demandCost() {
        let remainingDemand = this._demand;
        let result = 0;
        this._producers
            .sort((a,b) => a.cost - b.cost)
            .forEach(p => {
                const contribution = Math.min(remainingDemand, p.production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            })
        return result;
    }
}