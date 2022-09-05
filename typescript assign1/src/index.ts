let name1:string="mobin";
let age:number=23;
let isFetching:boolean=true;
let arr:number[]=[1,2,3];

let arrayOfStrings:string[]=["M","o","b"];


let tuple:[string,boolean]=["mobin",false];

enum Config{
    user,
    superuser,
    admin,
    superAdmin
}

function product (x:number,y:number):number{
    return x*y;
}

function divide(x:number,y:number):number{
    return x/y;
}

function abc(name:string):void{
    console.log(name)
}

abc("mobin")