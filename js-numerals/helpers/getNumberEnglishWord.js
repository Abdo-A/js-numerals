const getNumberEnglishWord = (number) => {
  const lowNumericals = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];
  const highNumericals = [
    '',
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const solutionParts = [];
  return solutionParts
    .map((part, i) => {
      if (solutionParts.length > 1 && i === solutionParts.length - 1) {
        return `and ${part}`;
      }
      return `${part} `;
    })
    .join('');
};
