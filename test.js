let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

let testEmails = ["notanemail.com", "workingexample@emailcom", "another_working@somethingelse.org", "notworking@1.com"];

testEmails.forEach((address) => {
    console.log(regex.test(address))
});