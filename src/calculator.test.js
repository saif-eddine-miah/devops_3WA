const Calculator = require('./calculator');

describe('Calculator', () => {
  test('string devrait retourner 0', () => {
    const calculator = new Calculator();
    expect(calculator.add('')).toBe(0);
  });

  test('i = i', () => {
    const calculator = new Calculator();
    expect(calculator.add('1')).toBe(1);
  });

  test('Deux nombres séparés par une virgule devraient retourner leur somme', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,2')).toBe(3);
  });

  test('Les espaces devraient être traités comme des virgules', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,2\n3')).toBe(6);
  });

  test('caract = espace', () => {
    const calculator = new Calculator();
    expect(calculator.add('//;\n1;3')).toBe(4);
  });

  test('négatifs = erreur', () => {
    const calculator = new Calculator();
    expect(() => calculator.add('1,-2')).toThrow(
      'Nombre(s) négatif(s) non autorisé(s) : -2'
    );
  });

  test('Plusieurs nombres négatifs devraient déclencher une erreur', () => {
    const calculator = new Calculator();
    expect(() => calculator.add('2,-4,-9')).toThrow(
      'Nombre(s) négatif(s) non autorisé(s) : -4, -9'
    );
  });

  test('nombres supérieurs à 1000 devraient être ignorés', () => {
    const calculator = new Calculator();
    expect(calculator.add('2,1001')).toBe(2);
  });
});
