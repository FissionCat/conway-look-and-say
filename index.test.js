const { lookAndSay, lookAndSayInWords } = require('.');

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

describe('lookAndSayInWords', () => {
  it('should exist', () => {
    expect(lookAndSayInWords).toBeTruthy();
  });

  test.each([
    ['1', 'one 1'],
    ['11', 'two 1s'],
    ['21', 'one 2, one 1'],
    ['1211', 'one 1, one 2, two 1s'],
    ['111221', 'three 1s, two 2s, one 1'],
    ['312211', 'one 3, one 1, two 2s, two 1s'],
    ['5', 'one 5'],
    ['1111111111', 'ten 1s'],
    // ['1213141516171819110', 'one 1, one 2, one 1, one 3, 1114111511161117111811192110']
  ])(
    'should return the correct output for %s',
    (input, expected) => {
      expect(lookAndSayInWords(input)).toBe(expected)
    }
  )
});
