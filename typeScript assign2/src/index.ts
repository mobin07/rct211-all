interface Person{
    title:String;
    status:Boolean;
    id:number
}


interface User{
    firstname:string;
    lastname?:string
}
let Person1 :User={
    firstname:"Mobin"
}
let Person2:User={
    firstname:"Saaquib",
    lastname:"Memon"
}

function getName(obj:User):string{

    return obj.firstname+obj.lastname 
}

console.log(getName(Person1))
console.log(getName(Person2))

interface Address{
    houseNumber:number;
street:string;
city:string
state:string;
postalCode:number;
country:string
}

interface PersonDetails{
    Prefix:string;
phones:number[];
addresses :string[]
email:string;
firstname:string;
lastname:string;
middlename:string;
}


let Person3:PersonDetails={
    Prefix:"Mr",
phones:[1,2,3,4,5,6],
addresses :["Kachhi","Masjid"],
email:"mmobinmemon@gmail.com",
firstname:"Mobin",
lastname:"Memon",
middlename:"Rauf"
}

function PhoneBook(obj:PersonDetails){
    return
}