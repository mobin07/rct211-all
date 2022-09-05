interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

const Person1 :User={
    type:"user",
    name:"mobin",
    age:23,
    occupation:"agri"

};
const Person2:Admin={
    type:"admin",
    name:"saaquib",
    age:25,
    role:"AI"

}
function getUserType(obj:User | Admin){
    return obj.type
}

console.log(getUserType(Person1));
console.log(getUserType(Person2))