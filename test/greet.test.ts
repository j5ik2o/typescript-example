import { greet } from '../src/greet'

test('greet', () => {
  const result = greet('abc')
  expect(result).toBe('Hello abc')
})
