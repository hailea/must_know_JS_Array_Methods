//Factorial - funstions can call itself
function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }
  factorial(1);