class Calculator {
  add(stringNumbers) {
    if (!stringNumbers) {
      return 0;
    }

    let delimiter = ',';

    if (stringNumbers.startsWith('//')) {
      const delimiterMatch = stringNumbers.match(/^\/\/(.+?)\n/);
      if (delimiterMatch) {
        delimiter = delimiterMatch[1];
        stringNumbers = stringNumbers.substring(delimiterMatch[0].length);
      }
    }

    const numbersArray = stringNumbers.split(new RegExp(`[${delimiter}\n]`));

    const negativeNumbers = numbersArray.filter((num) => parseInt(num) < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `Nombre(s) négatif(s) non autorisé(s) : ${negativeNumbers.join(', ')}`
      );
    }

    const sum = numbersArray.reduce(
      (acc, num) => acc + (parseInt(num) <= 1000 ? parseInt(num) : 0),
      0
    );

    return sum;
  }
}

module.exports = Calculator;
