//array index,set by index, indexOf
// var age = [12, 12,34,435,546,434,342];
// var neew = age.push(12)//push
// console.log(age[0]);

// var friendsAges = [132,5434,23,32,65,132,54];
// var sonaliAge = friendsAges[3];//index
// console.log(sonaliAge);

// var friendsAges = [232,34,54,65];
// var sonaliAge = friendsAges[3];
// friendsAges[3] = 70;    //change the valu or update the value;
// console.log(friendsAges);

// var friendsAges = [23,43,4,5,5654,23];
// position = friendsAges.indexOf(5654)//find out the position with indexOf
// console.log(position)

// var friendsAges = [23,43,4,5,5654,23];
// position = friendsAges.indexOf(5654)
// console.log(friendsAges ,friendsAges.length)// length and push
// friendsAges.push(15);
// console.log(friendsAges ,friendsAges.length);

// var friendsAges = [23,43,4,5,5654,23];
// position = friendsAges.indexOf(5654)
// console.log(friendsAges ,friendsAges.length)
// friendsAges.push(15);
// console.log(friendsAges ,friendsAges.length);
// friendsAges.pop(); // pop
// console.log(friendsAges,friendsAges.length);

// var teaLine = ['palam','Kalam', 'salam', 'balam'];
// teaLine.push("Jalam");
// console.log(teaLine);
// teaLine.pop();
// console.log(teaLine);
// teaLine.shift(); //slice and splice
// console.log(teaLine);
// teaLine.unshift('shakil khan');
// console.log(teaLine ,teaLine.length);
// var teaLines = teaLine.splice(2,4);
// console.log(teaLines);

//loop
// while loop
// var shakil = 0;
// while (shakil <=15){
//     console.log(shakil);
//     shakil++;

// }
// for loop
// var num = [33,55,66,77,88,99]
// for(i= 0; i< num.length; i++){
//     var elements = num[i];
//     console.log(elements);
// }

// var friends = ['shakil', 'rakib', 'azad', 'rokon']
// for (i = 0; i < friends.length; i++) {
//     var all = friends[i];
//     console.log(all);
// }

// switch case
// var num = 20;
// switch (num) {
//     case 100:
//         console.log('i am 100');
//         break;
//     case 200:
//         console.log('i am 200');
//         break;
//     case 20:
//     case 10:
//         console.log('i am eithr 20 or 10');
//         break
//     default:
//         console.log('i am ok');
// }

//-----------------------------------Function

// function/*this is Keyword*/theFunctionName/*thi is the name of Function*/(){
//     console.log('i am your girlfriend');
//     console.log('i am not your grilfriend');
// }                                                        /* use of one perameater */
// theFunctionName();// this called the function

//---------------------------------------function-Advance
// function NameOfFunction (perameater){
//     var result = perameater*2;
//     return result;
// }                                  /*Use One Perameater*/
// var first = NameOfFunction(5);
// var second = NameOfFunction(10);
// var total = first + second;
// console.log(total);

/*
function add( num1 , Num2){
    var result = num1 + Num2;
    return result;
}                                     /*use of Two Perameaters *//*
var adds = add(5,1000);
console.log(adds);*/

function Name(shakil, shakib, siam){
    var shakil = [25, 50, 55];
    var shakib = [44,45,76,88];
    var total = shakil+ shakib;
    return total;
}
Name()


fibonacci siquence