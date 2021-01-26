function addNumber(a, b){
    //argunents is a special keyword      // console.log(arguments[4]); 
    
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum+num;
    }
    
    return sum;
}
let result = addNumber(5,7,12,14,15);
console.log(result);

// যদি কখনো দরকার হয় ফাংশন এর মধ্যে যতগুলো প্যারামিটার আছে সবগুলোকে এক্সেস করার তাহলে আর্গুমেন্ট ব্যাহার করতে  হবে। arguments শুধু মাত্র ফাংশনের ভিতরে এক্সেস পাবে,অন্য কোথাও কাজ করবে নাহ।
// arguments এ .push/.pop এগুলা কোন কিছুই ব্যাবহার করা যাবে নাহ।
