function welcomeGuest(name,handler){
    handler(name)
}
const hisNmae = ('khalid')

function GreeMorinig (name){
    console.log('good morning',name);
}
function GreeEvening (name){
    console.log('good Evening',name);
}
function GreeAfterNon (name){
    console.log('good Evening',name);
}
welcomeGuest(hisNmae,GreeAfterNon);
welcomeGuest('shakil khan',function(name){
    console.log('welcone again',name);
});
