let onInputChange;

(function() {
  let currentInputValue = '';

  const numericalInputElement = document.querySelector('.numerical-input');
  const englishWordElement = document.querySelector('.english-word');

  onInputChange = (e) => {
    const newEnteredValue = e.value;
    const isEmptyValue = newEnteredValue === '';
    const isInteger =
      newEnteredValue && Number.isInteger(Number(newEnteredValue));

    if (isEmptyValue || isInteger) {
      currentInputValue = newEnteredValue;
    }
    numericalInputElement.value = currentInputValue;
  };

  onButtonClick = () => {
    if (!currentInputValue) return;
    englishWordElement.innerText = 'English Value';
  };
})();
