function countPrimeNumbers(){
    let x = 98;
    for(let i = 3; i <= 100){
       for(let j = 2; j <= Math.floor(i/2)){
            if(i%j == 0){x -= 1; break;}
       }
    }
}
let measure = perofrmance.now()
console.log('Execution time of printing countPrimeNumbers was' + measure + 'milliseconds');
