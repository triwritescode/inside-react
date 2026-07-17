function calculateFactorial(number) {
  // 1. The Base Case: If the number is 0 or 1, we stop and return 1.
  if (number === 0 || number === 1) {
    return 1; 
  }
  
  // 2. The Recursive Step: Multiply the current number by the factorial of (number - 1).
  return number * calculateFactorial(number - 1);
}

console.log(calculateFactorial(5)); // Outputs: 120