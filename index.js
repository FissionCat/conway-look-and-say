const { toWords } = require('number-to-words');

module.exports = {
  lookAndSay: function lookAndSay(input) {
    const inputLength = input.length;
    let output = '';
    let count = 1;

    for (let i = 0; i < inputLength; i++) {
      const currentDigit = input[i];
      const previousDigit = i === 0 ? null : input[i - 1];

      if (currentDigit === previousDigit) {
        count++;
      } else if (previousDigit !== null) {
        output += `${count}${previousDigit}`;
        count = 1;
      }

      if (i === inputLength - 1) {
        output += `${count}${currentDigit}`
      }
    }

    return output;
  },

  lookAndSayInWords: function lookAndSayInWords(input) {
    const inputLength = input.length;
    let output = '';
    let count = 1;

    for (let i = 0; i < inputLength; i++) {
      const currentDigit = input[i];
      const previousDigit = i === 0 ? null : input[i - 1];

      if (currentDigit === previousDigit) {
        count++;
      } else if (previousDigit !== null) {
        output += `${toWords(count)} ${previousDigit}${count > 1 ? 's' : ''}, `;
        count = 1;
      }

      if (i === inputLength - 1) {
        output += `${toWords(count)} ${currentDigit}${count > 1 ? 's' : ''}`
      }
    }

    return output;
  }
}
