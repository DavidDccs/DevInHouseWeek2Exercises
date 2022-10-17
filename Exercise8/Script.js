var primes = 0;

for (var i = 2; i < 1001; i++) {
  var cont = 0;

  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      cont++;
    }
  }

  if (cont == 0) {
    console.log(i + " is a prime number");
    primes++;
  }
}
console.log("Total amount of prime numbers: " + primes);
