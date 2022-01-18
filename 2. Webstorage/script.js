
// web storage
// session storage
window.sessionStorage
sessionStorage.setItem("name", "some name");
sessionStorage.setItem("age", "25");
const name = sessionStorage.getItem("name");
const age = sessionStorage.getItem("age")
console.log(name);
console.log(age);

// session storage
window.localStorage
localStorage.setItem("name", "some name");
localStorage.setItem("age", "25");
const name = localStorage.getItem("name");
const age = localStorage.getItem("age")
console.log(name);
console.log(age);

//cookies
const expire = new Date(2020, 11, 32).toUTCString(); // month (0 -11) date (0 -32)
// console.log(expire)
document.cookie = "name=some Name; expires=" + expire;
document.cookie = "age=25; expires=" + expire;
//console.log(document.cookie);

