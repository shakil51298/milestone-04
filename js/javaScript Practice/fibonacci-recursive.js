// function fibonacci (n){
//     if(n==0){
//         return 0;
//     }
//     if( n==1){
//         return 1;
//     }
//     else{
//         return fibonacci(n-1) + fibonacci(n-2)
//     }
// }
// var result = fibonacci(0);
// console.log(result);

var n = 45;
for (i = 2; i < n - 1; i++) {
    console.log(i, n % i);
    if (n % 1 == 0) {
        console.log("not a prime number");
        break;
    }
}
