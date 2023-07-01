import { longestPalindrome } from "../src/longestSubstring.js"

describe('longestPalindrome', () => {
    it('returns aba when passed: "ababd', () => {
        const result = longestPalindrome("ababd")
        expect(result).toEqual("aba")
    })
    it('returns aba when passed: "abbabd', () => {
        const result = longestPalindrome("abbabd")
        expect(result).toEqual("abba")
    })
    it('returns a when passed: a', () => {
        const result = longestPalindrome("a")
        expect(result).toEqual("a")
    })
    it('returns aa when passed: aa', () => {
        const result = longestPalindrome("aa")
        expect(result).toEqual("aa")
    })
    it('returns nothing when passed: ""', () => {
        const result = longestPalindrome("")
        expect(result).toEqual("")
    })
})