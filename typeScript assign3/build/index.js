const Person1 = {
    type: "user",
    name: "mobin",
    age: 23,
    occupation: "agri"
};
const Person2 = {
    type: "admin",
    name: "saaquib",
    age: 25,
    role: "AI"
};
function getUserType(obj) {
    return obj.type;
}
console.log(getUserType(Person1));
console.log(getUserType(Person2));
//# sourceMappingURL=index.js.map