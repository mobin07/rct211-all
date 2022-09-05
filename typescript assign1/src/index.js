var name1 = "mobin";
var age = 23;
var isFetching = true;
var arr = [1, 2, 3];
var arrayOfStrings = ["M", "o", "b"];
var tuple = ["mobin", false];
var Config;
(function (Config) {
    Config[Config["user"] = 0] = "user";
    Config[Config["superuser"] = 1] = "superuser";
    Config[Config["admin"] = 2] = "admin";
    Config[Config["superAdmin"] = 3] = "superAdmin";
})(Config || (Config = {}));
function product(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function abc(name) {
    console.log(name);
}
abc("mobin");
