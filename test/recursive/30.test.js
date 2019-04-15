import words from '../../code/recursive/30.js'

test('words', () => {
  expect(words('barfoothefoobarman', ['foo', 'bar']))
    .toEqual([0, 9])
})
