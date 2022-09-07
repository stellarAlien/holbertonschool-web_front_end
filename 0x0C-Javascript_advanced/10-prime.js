function countPrimeNumbers(){
    let x = 98;
    for(let i = 3; i <= 100; i++){
       for(let j = 2; j <= Math.floor(i/2); j++){
            if(i%j == 0){x -= 1; break;}
       }
    }
}

let measure_0 = performance.now().toFixed(6);
for(let i = 0; i < 100; i++){
    countPrimeNumbers();
}

let measure_1 = performance.now().toFixed(6);
console.log('Execution time of calculating prime numbers 100 times was ' + (measure_0 - measure_1).toFixed(6) + ' milliseconds');