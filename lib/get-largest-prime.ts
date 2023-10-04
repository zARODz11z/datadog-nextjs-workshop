function getPrimes(maxValue: number) {
  // Sieve of Eratosthenes implementation
  const primes = [];
  const isPrimeCache = [false, true, true];

  for (let i = 2; i < maxValue; i++) {
    if (isPrimeCache[i] !== false) {
      primes.push(i);

      for (let j = i * 2; j < maxValue; j += i) {
        isPrimeCache[j] = false;
      }
    }
  }

  return primes;
}

export const getLargestPrime = (maxValue: number) => {
  const primes = getPrimes(maxValue);

  return primes[primes.length - 1];
};
