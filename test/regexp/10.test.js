import regModeStr from '../../code/regexp/10'

test('regModeStr', () => {
    expect(regModeStr('aaa', 'caa*')).toBe(false)
})

test('regModeStr1', () => {
    expect(regModeStr('aaabc', 'a*bc')).toBe(true)
})