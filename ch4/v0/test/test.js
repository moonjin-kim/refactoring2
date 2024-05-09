import {Province} from "../province/province.js";
import {sampleProvinceData} from "../province/data.js";
import * as assert from "node:assert";

describe('province', () => {
    let asia;
    beforeEach(() => {
        asia = new Province(sampleProvinceData());
    })

    it('shortfall', () => {
        assert.equal(asia.shortfall, 5);
    })

    it('profit', () => {
        assert.equal(asia.profit,230);
    })

    it('change production', () => {
        asia._producers[0].production = 20;
        assert.equal(asia.shortfall, -6);
        assert.equal(asia.profit, 292);
    })

    it('zero demand', () => {
        asia._demand = 0;
        assert.equal(asia.shortfall,-25);
        assert.equal(asia.profit,0);
    })

    it('nagative demand', () => {
        asia._demand = -1;
        assert.equal(asia.shortfall,-26);
        assert.equal(asia.profit,-10);
    })

});

describe('no province', () => {
    let noProducers;
    beforeEach(() => {
        const data = {
            name: "No producers",
            producers: [],
            demand: 30,
            price: 20
        };
        noProducers = new Province(data);
    })

    it('shortfall', () => {
        assert.equal(noProducers.shortfall, 30);
    })

    it('profit', () => {
        assert.equal(noProducers.profit,0);
    })

});

describe('string for producers', function() {
    it('', () => {
        const data = {
            name: "String producers",
            producers: "",
            demand: 30,
            price: 20
        };
        const prov = new Province(data);
        assert.equal(prov.shortfall,0);
    })
})