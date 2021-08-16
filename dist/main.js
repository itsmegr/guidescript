//1. the first thing is defining the type of variables
var fName = "govind";
var lName = "rathore";
//2. defining functions so for that defining return type so that things goes well
var getFullName = function (fName, lName) {
    return fName + " " + lName;
};
console.log(getFullName('Govind', "Rathore"));
var UserAccount = /** @class */ (function () {
    function UserAccount(nName, nRollno) {
        this.name = nName,
            this.rollno = nRollno;
    }
    UserAccount.prototype.getInfo = function () {
        return this.name + " " + this.rollno;
    };
    return UserAccount;
}());
var newUser = new UserAccount("govind", 941919);
console.log(newUser.getInfo());
var nem = null;
//5. unknown, any, void types
//5.1. void means returning notjhing from the function and its value can be undefined or null
var student1 = undefined;
//5.2 any means any type of datatype
var student2 = 11;
//5.3 unknown means we don't know its type but its not assignable to another type
var student3 = "govind";
var student4 = student3;
//5.4 type converion--> means converting one type to another
var student5 = student4;
var book1 = {
    bookName: "Insomnia",
    totalPages: "14"
};
var book2 = {
    bookName: "The brave",
    totalPages: {
        pages: "1234",
        length: 12
    }
};
//generic with functions
//so basically in functions we can pass the type too and make generic functions 
//like append function in array for appending in the last and we can use array of any type
var getInString = function (name) {
    return name;
};
console.log(getInString({ raj: "this is me " }));
