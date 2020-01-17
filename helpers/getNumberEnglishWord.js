const getNumberEnglishWord = (typedNumber) => {
  const lowNumericals = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const specialNumericals = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
  const highNumericals = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  const solutionParts = [];

  const analyzeNumber = (passedNumber, onlyReturn) => {
    // To convert to number type and remove leading zeros:
    const number = Number(passedNumber);
    let newSolutionPart;

    const getOnes = (type) => {
      const head = number.toString()[0];
      newSolutionPart = `${analyzeNumber(head, true)} ${type}`;
      solutionParts.push(newSolutionPart);
      if (Number(number.toString().substr(1)))
        analyzeNumber(number.toString().substr(1));
    };

    const getTens = (type) => {
      const head = number.toString().substr(0, 2);
      newSolutionPart = `${analyzeNumber(head, true)} ${type}`;

      solutionParts.push(newSolutionPart);
      if (Number(number.toString().substr(2)))
        analyzeNumber(number.toString().substr(2));
    };

    const getHundreds = (type) => {
      const head = number.toString().substr(0, 3);
      const firstPart = analyzeNumber(head);
      const hasHundred = [...solutionParts, firstPart]
        .join(' ')
        .includes('hundred');

      newSolutionPart = `${hasHundred ? '' : 'hundred '}${type}`;
      solutionParts.push(newSolutionPart);
      if (Number(number.toString().substr(3)))
        analyzeNumber(number.toString().substr(3));
    };

    if (!number && typedNumber !== '0') {
      return '';
    }

    const numberLength = number.toString().length;

    if (numberLength === 1) {
      newSolutionPart = lowNumericals[number];
      solutionParts.push(newSolutionPart);
    } else if (numberLength === 2) {
      if (number.toString()[0] === '1') {
        newSolutionPart = specialNumericals[number - 10];
        solutionParts.push(newSolutionPart);
      } else {
        const head = number.toString()[0];
        newSolutionPart = `${highNumericals[head - 2]} ${analyzeNumber(
          number.toString().substr(1),
          true,
        )}`;
        solutionParts.push(newSolutionPart);
      }
    } else if (numberLength === 3) {
      const head = number.toString()[0];
      newSolutionPart = `${lowNumericals[head]}`;
      solutionParts.push(`${newSolutionPart} hundred`);
      if (Number(number.toString().substr(1)))
        analyzeNumber(number.toString().substr(1));
    } else if (numberLength === 4) {
      getOnes('thousand');
    } else if (numberLength === 5) {
      getTens('thousand');
    } else if (numberLength === 6) {
      getHundreds('thousand');
    } else if (numberLength === 7) {
      getOnes('million');
    } else if (numberLength === 8) {
      getTens('million');
    } else if (numberLength === 9) {
      getHundreds('million');
    } else if (numberLength === 10) {
      getOnes('billion');
    } else if (numberLength === 11) {
      getTens('billion');
    } else if (numberLength === 12) {
      getHundreds('billion');
    } else if (numberLength === 13) {
      getOnes('trillion');
    } else if (numberLength === 14) {
      getTens('trillion');
    } else if (numberLength === 15) {
      getHundreds('trillion');
    } else if (numberLength > 15) {
      solutionParts.push('Number is too big 🙄');
    }

    if (onlyReturn) {
      solutionParts.pop();
    }
    return newSolutionPart;
  };

  analyzeNumber(typedNumber);
  const majorValueTypes = ['thousand', 'million', 'billion', 'trillion'];
  return solutionParts
    .map((part, i) => {
      if (
        solutionParts.length > 1 &&
        i === solutionParts.length - 1 &&
        solutionParts[i - 1].split(' ').length > 1 &&
        !majorValueTypes.includes(part)
      ) {
        return `and ${part}`;
      }
      return `${part} `;
    })
    .join('');
};
