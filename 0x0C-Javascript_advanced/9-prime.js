function countPrimeNumbers(){
    let x = 98;
    for(let i = 3; i <= 100; i++){
       for(let j = 2; j <= Math.floor(i/2); j++){
            if(i%j == 0){x -= 1; break;}
       }
    }
}
let measure_1 = performance.now();
countPrimeNumbers();
let measure = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + measure + ' milliseconds');
