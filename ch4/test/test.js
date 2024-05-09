import {Province} from "../province/province.js";
import {sampleProvinceData} from "../province/data.js";
import * as assert from "node:assert";

describe('province', () => {
    it('shortfall', () => {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    })
});