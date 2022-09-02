function countPrimeNumbers(){
    let x = 98;
    for(let i = 3; i <= 100){
       for(let j = 2; j <= Math.floor(i/2)){
            if(i%j == 0){x -= 1; break;}
       }
    }
}
for(let i = 0; i < 100; i++){
    countPrimeNumbers();
}
let  measure_0 = performance.now();

for(let i = 0; i < 100; i++){
    setTimeout(function () {countPrimeNumbers();}, 0)
}
let measure_1 = performance.now();
console.log('Execution time of calculating prime numbers 100 times was' + $(measure_1 - measure_0) + 'milliseconds');