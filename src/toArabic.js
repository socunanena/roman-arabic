const romanToArabicPrimitivesMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function getArabic(current, remaining) {
  if (remaining.length === 0) {
    return current;
  }

  const next = remaining.shift();

  if (current < next) {
    current = -current;
  }

  return current + getArabic(next, remaining);
}


/**
 * Given a roman numeral it returns its arabic representation.
 *
 * TODO Check malformed roman numerals
 *
 * E.g. XXIII -> 23
 *
 * @param {string} number
 * @return {number}
 */
export default function toArabic(number) {
  const remainingDigits = number.split('').map(c => romanToArabicPrimitivesMap[c]);
  const firstDigit = remainingDigits.shift();

  return getArabic(firstDigit, remainingDigits);
}
