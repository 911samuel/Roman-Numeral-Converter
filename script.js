function convertToRoman() {
  const inputNumber = document.getElementById('number').value;
  const outputElement = document.getElementById('output');

  // Check if the input is empty
  if (inputNumber === '') {
    outputElement.textContent = 'Please enter a valid number';
    return;
  }

  const num = parseInt(inputNumber);

  // Check if the input is less than 1
  if (num < 1) {
    outputElement.textContent = 'Please enter a number greater than or equal to 1';
    return;
  }

  // Check if the input is 4000 or greater
  if (num >= 4000) {
    outputElement.textContent = 'Please enter a number less than or equal to 3999';
    return;
  }

  outputElement.textContent = convertNumberToRoman(num);
}

function convertNumberToRoman(num) {
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = '';

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i][1]) {
      result += romanNumerals[i][0];
      num -= romanNumerals[i][1];
    }
  }

  return result;
}