
function evenify(num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    }
    else {
        result = num * 2;
    }
    return result;
}
var result = evenify(7);
var squre = result * result;
console.log('squre :', squre);

function evenifyAll(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
        even_array.push(result);
    }
    return even_array;
}
var nums = [4, 6, 8, 12, 14];
var nums_even = evenifyAll(nums);
console.log(nums_even);