
function codePointOfFirstChar(character) {
  return character.codePointAt(0);
}

function getCodePoints(string) {
  const arrayCodePoint = [];
  for (const character of string) {
    arrayCodePoint.push(codePointOfFirstChar(character));
  }
  return arrayCodePoint;
}

function reverse(string) {
  const codePoints = getCodePoints(string);
  const reversedCodePoint = codePoints.reverse();
  return String.fromCodePoint(...reversedCodePoint);
}

function equal(string1, string2) {
  return (string1.normalize('NFC') === string2.normalize('NFC'));
}
export {
  reverse,
  equal,
};