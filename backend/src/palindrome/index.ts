const getPalindromes = (initialValue: number, finalValue: number) => {
  const palindromes: number[] = [];

  for (let i = initialValue; i < finalValue; i += 1) {
    const invertedNumber = Number(String(i).split('').reverse().join(''));

    console.log(invertedNumber);

    if (invertedNumber === i) {
      palindromes.push(i);
    }
  }

  return palindromes;
};

export {getPalindromes};
