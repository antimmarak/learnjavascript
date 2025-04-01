const accountId = 10102
let accountEmail = "antimmarak@gmail.com"
var accountPassword = "123456"
accountCity = "Dhaka"
let accountState;

// accountId = 2 // not allowed


accountEmail = "antim@gg.com"
accountPassword = "321654"
accountCity = "danmondi"


console.log (accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])