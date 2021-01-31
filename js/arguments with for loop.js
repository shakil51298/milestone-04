function AddName (){
    console.log(arguments); 
    let fullname = '';
    for (let i = 0; i < arguments.length; i++) {
        const NamePart = arguments[i];
        fullname = fullname + ' ' + NamePart;
    }
    return fullname;
}
var fullname = AddName('shakil','khan','karim','azad','jibon');
console.log(fullname);

