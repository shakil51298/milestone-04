// var fibo = [0,1];
// for (var i= 2; i<= 10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
//     // console.log(fibo[i], fibo[i-1], fibo[i-2]);
// }
// console.log(fibo);

function fibonacci (n){
    var fib = [0,1];
    for(i=2;i<=n;i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}  
var result = fibonacci(15);
console.log(result)
