const CHARS_IN_HASH = 16;

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

module.exports = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  return new Array(CHARS_IN_HASH)
    .fill(1)
    .map((char) => chars[randomInteger(0, chars.length - 1)])
    .join('');
};
