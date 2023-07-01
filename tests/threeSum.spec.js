import { threeSum } from "../src/threeSum.js";

describe('threeSum', () => {
    it('returns [[-1,-1,2],[-1,0,1]] when passed: [-1,0,1,2,-1,-4]', () => {
        const result = (threeSum([-1,0,1,2,-1,-4]));
        expect(result).toEqual([[-1,0,1], [-1, -1, 2]]);
    })
    it('returns [] when passed: [0,1,1]', () => {
        const result = (threeSum([0,1,1]));
        expect(result).toEqual([]);
    })
    it('returns [0,0,0] when passed: [0,0,0]', () => {
        const result = (threeSum([0,0,0]));
        expect(result).toEqual([0,0,0]);
    })
    it('returns [[-3,0,3],[-1,-2,3],[-3,1,2],[-2,0,2],[-1,0,1]] when passed: [1,2,3,-1,-2,-3,0]', () => {
        const result = (threeSum([1,2,3,-1,-2,-3,0]));
        expect(result).toEqual([
            [ -3, 1, 2 ],
            [ -2, -1, 3 ],
            [ -1, 0, 1 ],
            [ -2, 0, 2 ],
            [ -3, 0, 3 ]
          ]);
    }) 

})