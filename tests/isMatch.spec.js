import { isMatch } from "../src/isMatch"
describe('isMatch', () => {
  it('returns true when passed: aa, aa', () => {
    const result = isMatch("aa", "aa")
    expect(result).toEqual(true)
  })
  it('returns false when passed: "a", "aa"', () => {
    const result = isMatch("a", "aa")
    expect(result).toEqual(false)
  })
  it('returns true when passed: abc, a.c',() => {
    const result = isMatch("abc", "a.c")
    expect(result).toEqual(true)
  })
  it('returns true when passed: aaaa, a*', () => {
    const result = isMatch("aaaa", "a*")
    expect(result).toEqual(true)
  })
  it('returns true when passed: abc, c*abc', () => {
    const result = isMatch("abc", "c*abc")
    expect(result).toEqual(true)
  })
  it('returns true when passed: ("abcdd", "c*a*c*b*cd*")', () => {
    const result = isMatch("abcdd", "c*a*c*b*cd*")
    expect(result).toEqual(true)
  })
  it('returns true when passed: aaa, a*a', () => {
    const result = isMatch("aaa", "a*a")
    expect(result).toEqual(true)
  })
  it('returns true when passed: abcxyz, .*xyz', () => {
    const result = isMatch("abcxyz", ".*xyz")
    expect(result).toEqual(true)
  })
  it('returns true when passed: ("abcxyzxyz", ".*xyz")', () => {
    const result = isMatch("abcxyzxyz", ".*xyz")
    expect(result).toEqual(true)
  })
  it('returns false when passed: ("abcxyzxxx", ".*xyz")', () => {
    const result = isMatch("abcxyzxxx", ".*xyz")
    expect(result).toEqual(false)
  })
  it('returns false when passed: mississippi, mis*is*p*.', () => {
    const result = isMatch("mississippi", "mis*is*p*.")
    expect(result).toEqual(false)
  })
  it('returns true when passed: mississippi, mis*is*ip*.', () => {
    const result = isMatch("mississippi", "mis*is*ip*.")
    expect(result).toEqual(true)
  })
  it('returns false when passed: "a", ".."', () => {
    const result = isMatch("a", "..")
    expect(result).toEqual(false)
  })
  it('returns false when passed: "a", "a*aaa*"', () => {
    const result = isMatch("a", "a*aaa*")
    expect(result).toEqual(false)
  })
  it('returns false when passed "aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*c"', () => {
    const result = isMatch("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*c")
    expect(result).toEqual(false)
  })
})

