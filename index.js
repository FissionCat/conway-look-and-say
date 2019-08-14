module.exports = function lookAndSay(input) {
  const inputLength = input.length;
  let output = '';
  let lastDigitSeenCount = 1;

  for (let i = 0; i < inputLength; i++) {
    const currentDigit = input[i];
    const previousDigit = i === 0 ? null : input[i - 1];

    if (currentDigit === previousDigit) {
      lastDigitSeenCount++;
    } else if (previousDigit !== null) {
      output += `${lastDigitSeenCount}${previousDigit}`;
      lastDigitSeenCount = 1;
    }

    if (i === inputLength - 1) {
      output += `${lastDigitSeenCount}${currentDigit}`
    }
  }

  return output;
}
