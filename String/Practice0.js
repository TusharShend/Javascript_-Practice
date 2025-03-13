let str = "Shendkar Tushar Abasaheb";
console.log(str.length);

console.log(`my name is ${str}`)

for(let i=0;i<str.length;i++)
    console.log(str[i])

let newUpStr = str.toUpperCase();
console.log(newUpStr);

let newLoStr = str.toLowerCase();
console.log(newLoStr);

console.log(str.trim())

let sliceStr = str.slice(2,8);

let college = "Pvp College Loni";

console.log(str.concat(college));

//task

let username = prompt("Enter a name to create user name: ");
let userName = "@".concat(username).replaceAll(" ","");
let len = username.length
let result = userName.concat(len)

console.log(str.indexOf("l"));

