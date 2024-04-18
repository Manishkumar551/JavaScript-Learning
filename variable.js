console.log("Hello World");
//variables
const accountId=123445;
let accountEmail="Manish@gmail.com";
var accountPassword=123456;
let accountState;
accountCity="Hyderabad";

// accountId=2;
//not allowed to change const value
// console.log(accountId);

accountEmail="Mani@gmail.com";
console.log(accountEmail);

accountPassword="6789"
accountCity="Delhi";

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);