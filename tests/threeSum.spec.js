import { threeSum } from "../src/threeSum.js";

describe('threeSum', () => {
    it('returns [[-1,-1,2],[-1,0,1]] when passed: [-1,0,1,2,-1,-4]', () => {
        const result = (threeSum([-1,0,1,2,-1,-4]));
        expect(result).toEqual([[-1,-1,2],[-1,0,1]]);
    })
})