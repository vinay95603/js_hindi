const accountId = 14453
let accountEmail = "vinay@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 123; not allowed

/* 
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);

accountEmail="hc@hc.com"
accountPassword = "212121"
accountCity = "rohtak";

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);
