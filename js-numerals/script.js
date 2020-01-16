let onInput;

(function() {
  let inputCurrentValue = '';

  onInput = (e) => {
    const newEnteredValue = e.value;
    if (newEnteredValue && Number.isInteger(Number(newEnteredValue))) {
      inputCurrentValue = newEnteredValue;
    }
    inputCurrentValue = inputCurrentValue;
    document.querySelector('#numerical-input').value = inputCurrentValue;
  };
})();
