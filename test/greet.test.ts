import { greet } from '../src/greet'

describe('greet', () => {
  it('should return Hello abc', () => {
    const result = greet('abc')
    expect(result).toBe('Hello abc')
  })
})
