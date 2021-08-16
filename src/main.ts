//1. the first thing is defining the type of variables
var fName : string  =  "govind";
const lName : string = "rathore";


//2. defining functions so for that defining return type so that things goes well
const getFullName = (fName  : string , lName : string) : string =>{
    return fName + " " + lName;
}

console.log(getFullName('Govind', "Rathore"));


//3. Now till here we have used the biult in types, now here decalring our own types
interface User {
    name : string,
    rollno : number,
    getInfo() : string
}

class UserAccount implements User {
    name : string;
    rollno : number;
    constructor(nName : string,  nRollno : number){
        this.name = nName,
        this.rollno = nRollno
    }
    getInfo() : string {
        return this.name + " " + this.rollno;
    }
}

let newUser  : User = new UserAccount("govind", 941919);

console.log(newUser.getInfo());

//4. using types alias , we use them only for better readability and giving alias to anytype name , 
//we use union and type alias together for better understanding
type subjectList = string[];

interface CSEstudent extends User {
    subject : subjectList
}

type pageNumber = string  | number;
type errorMsg = string  | null;
type newUser = User | CSEstudent;


let nem : errorMsg = null;

//5. unknown, any, void types
//5.1. void means returning notjhing from the function and its value can be undefined or null

let student1 : void  = undefined;

//5.2 any means any type of datatype
let student2 : any = 11;

//5.3 unknown means we don't know its type but its not assignable to another type
let student3 : unknown = "govind";
let student4 : number = student3 as number;

//5.4 type converion--> means converting one type to another
let student5 : string =  student4 as unknown as string;


//6 working with classes in ts
//this is same like i did in section 3 and this is implemented with the help of interface
// in classes for better type



//7 generic and this is one of the most good function that we can use in ts 
//generic with interfaces

interface bookInterface<T>{
    bookName : string, 
    totalPages : T
}

let book1 : bookInterface<string> = {
    bookName : "Insomnia",
    totalPages : "14"
}

let book2 : bookInterface<{pages : string, length : number}> = {
    bookName : "The brave",
    totalPages : {
        pages : "1234",
        length : 12
    }
}


//generic with functions
//so basically in functions we can pass the type too and make generic functions 
//like append function in array for appending in the last and we can use array of any type
const getInString = <T>(name : T) : string =>{
    return name as unknown as string;
}

console.log(getInString<{raj : string}>({raj : "this is me "}));








