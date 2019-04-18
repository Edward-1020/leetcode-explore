import leastInterval from '../../code/queue/621'

test('leastInterval1', () => {
  expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8)
})

test('leastInterval2', () => {
  expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C'], 1)).toBe(9)
})

test('leastInterval3', () => {
  expect(leastInterval(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'], 2)).toBe(8)
})
