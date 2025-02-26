function countPrimes(upTo){
    let tally = 0;
    for (i = 1; i < upTo; i++){
        let isPrime = true;
        for (j = 2; j < i; j++){
            if(i % j == 0){
                isPrime = false;
            }
        }
        if (isPrime){
            tally++;
        }
    }
    return talley;
}
console.log(countPrimes(100))
// refactor 1
function countPrimes2(upTo){
    let tally = 0;
    for (i = 1; i < upTo; i++){
        if (isPrime(i)) {
            tally++;
        }
    }
    return tally
}
function isPrime(number){
    for (i = 2; i < number; i++){
        if(number % i == 0){
            return false
        }
    }
    return true
}
console.log(countPrimes2(10))