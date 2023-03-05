const compareLengths = (str, length) => {
  const result = str.length <= length;
  return result;
};

compareLengths('проверяемая строка', 20);
compareLengths('проверяемая строка', 18);
compareLengths('проверяемая строка', 10);

const isPalindrome = (str) => {
  const formattedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';

  for (let i = formattedStr.length - 1; i >= 0; i--) {
    reversedStr += formattedStr[i];
  }
  return formattedStr === reversedStr;
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

const getNumber = (param) => {
  const str = param.toString();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const current = parseInt(str[i], 10);
    if (!isNaN(current)) {
      result += current;
    }
  }
  return (result === '') ? NaN : Number(result);
};

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);

function fillString(str, minLength, addSymbol) {
  let i = 0;
  let strSymbol = '';
  while (str.length + strSymbol.length <= minLength) {
    strSymbol += addSymbol[i];
    i = i + 1 < addSymbol.length ? i + 1 : 0;
  }
  return strSymbol + str;
}

fillString('1', 2, '0');
fillString('1', 4, '0');
fillString('q', 4, 'werty');
fillString('qwerty', 4, '0');
fillString('q', 4, 'we');
