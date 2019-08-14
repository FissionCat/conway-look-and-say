const lookAndSay = require('.');

describe('lookAndSay', () => {
  it('should exist', () => {
    expect(lookAndSay).toBeTruthy();
  });

  test.each([
    ['1', '11'],
    ['11', '21'],
    ['21', '1211'],
    ['1211', '111221'],
    ['111221', '312211'],
    ['312211', '13112221'],
    ['5', '15'],
    ['1111111111', '101'],
    ['1213141516171819110', '111211131114111511161117111811192110']
  ])(
    'should return the correct output for %s',
    (input, expected) => {
      expect(lookAndSay(input)).toBe(expected)
    }
  )
});
