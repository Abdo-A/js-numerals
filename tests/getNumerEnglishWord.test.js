const getNumberEnglishWord = require('../helpers/getNumberEnglishWord');

test('getNumberEnglishWord should return an empty string if not passed anything', () => {
  expect(getNumberEnglishWord()).toBe('');
});

test('getNumberEnglishWord should return correct one phrase for 1 digit', () => {
  expect(getNumberEnglishWord(5)).toBe('five');
});

test('getNumberEnglishWord should return correct one phrase for 2 digits', () => {
  expect(getNumberEnglishWord(84)).toBe('eighty four');
});

test('getNumberEnglishWord should return correct one phrase for 3 digits', () => {
  expect(getNumberEnglishWord(374)).toBe('three hundred and seventy four');
});

test('getNumberEnglishWord should return correct one phrase for 4 digits', () => {
  expect(getNumberEnglishWord(9472)).toBe('nine thousand four hundred and seventy two');
});

test('getNumberEnglishWord should return correct one phrase for 5 digits', () => {
  expect(getNumberEnglishWord(48100)).toBe('fourty eight thousand and one hundred');
});

test('getNumberEnglishWord should return correct one phrase for 6 digits', () => {
  expect(getNumberEnglishWord(837304)).toBe('eight hundred thirty seven thousand three hundred and four');
});

test('getNumberEnglishWord should return correct one phrase for 7 digits', () => {
  expect(getNumberEnglishWord(3004001)).toBe('three million four thousand and one');
});
