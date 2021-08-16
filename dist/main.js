//the first thing is defining the type of variables
var fName = "govind";
var lName = "rathore";
//defining functions so for that defining return type so that things goes well
var getFullName = function (fName, lName) {
    return fName + " " + lName;
};
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
