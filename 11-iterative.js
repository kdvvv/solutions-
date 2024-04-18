const smallestDivisor = (num) => {
    // BEGIN
  if (num === 1) return 1;
  if (num % 2 === 0) return 2;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) return i;
  }
  return num;
    // END
  };
  
export default smallestDivisor;
  