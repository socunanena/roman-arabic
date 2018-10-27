const romanPrimitives = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

function buildPrimitivesMap(primitives) {
  return [
    '',
    primitives[0],
    primitives[0] + primitives[0],
    primitives[0] + primitives[0] + primitives[0],
    primitives[0] + primitives[1],
    primitives[1],
    primitives[1] + primitives[0],
    primitives[1] + primitives[0] + primitives[0],
    primitives[1] + primitives[0] + primitives[0] + primitives[0],
    primitives[0] + primitives[2],
  ];
}

function getDigitRoman(digit, position) {
  const primitives = romanPrimitives.slice(position * 2, position * 2 + 3);

  return buildPrimitivesMap(primitives)[digit];
}

function getRoman(number, position) {
  const remaining = Math.floor(number / 10);
  const reminder = number % 10;

  return ((remaining && getRoman(remaining, position + 1)) || '') + getDigitRoman(reminder, position);
}

/**
 * Given an arabic number it returns its roman representation.
 *
 * E.g. 23 -> XXIII
 *
 * @param {number} number
 * @return {string}
 */
export default function toRoman(number) {
  return getRoman(number, 0);
};
