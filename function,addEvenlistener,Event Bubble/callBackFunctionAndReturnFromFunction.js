function explain_callBack(name,age,task){
    console.log('hello',name);
    console.log('your age', age);
    task();

}
function WashHand( ){
    console.log('wash your Hand After takeing Food');
}
function takwShower (){
    console.log('Take Shower');
}
function closeDoor() {
    console.log('Close the Door After  taking Food');
}
explain_callBack('Sagir Uddin', 17, WashHand);
explain_callBack('shakil', 22, takwShower);
explain_callBack('shakib khan', 20, closeDoor);
// this CALL_BACk Function;