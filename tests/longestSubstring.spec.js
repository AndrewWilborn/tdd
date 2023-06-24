import { longestSubstring } from "../src/longestSubstring.js"

describe('longestSubstring', () => {
    it('returns aba when passed: "ababd', () => {
        const result = longestSubstring("ababd")
        expect(result).toEqual("aba")
    })
    it('returns aba when passed: "abbabd', () => {
        const result = longestSubstring("abbabd")
        expect(result).toEqual("abba")
    })
    it('returns a when passed: a', () => {
        const result = longestSubstring("a")
        expect(result).toEqual("a")
    })
    it('returns aa when passed: aa', () => {
        const result = longestSubstring("aa")
        expect(result).toEqual("aa")
    })
    it('returns nothing when passed: ""', () => {
        const result = longestSubstring("")
        expect(result).toEqual("")
    })
})