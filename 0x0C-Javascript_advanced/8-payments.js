function processPayment(amount){
    console.log('colecting payment of ${amount}')
}
function processOrder(OrderId, amount){
        console.log(OrderId + 'is being processed');
        processPayment(amount);
        console.log(OrderId + 'has benn fully processed');
}
console.log('Processing orders');
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log('All the orders have been processed');
