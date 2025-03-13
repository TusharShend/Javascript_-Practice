let arr = [10,20,30,40,50,60,70,80,90]
let newArr = (arr.push(100));
console.log(arr);
// push add element at end of array
console.log("\n")
let newArr1 = arr.pop(100);
console.log(arr);

//pop remove element at left of array
console.log("\n")

let str = arr.toString()
console.log(str)
console.log(typeof(str))

let strArr =['tushar','ajay','suhas','mahesh','navnath','firoj','pavan','siddhant','sagar','akshay','pritesh']
let len = strArr.length;
console.log(len)
let str1 =  strArr.toString();
console.log(str1);
console.log(typeof(str1));

let conCat = arr.concat(strArr);
console.log(conCat);

console.log(arr.unshift(22))
console.log(arr);

console.log(arr.shift(22))
console.log(arr)

let companies = ["Bloomberg","Microsoft" , "Uber", "Google", "IBM", "Netflix"]
let newCompanies = companies.shift()
console.log(newCompanies)
console.log(companies)

let spliceArr = companies.splice(1,1,"OLA")
console.log(spliceArr)
console.log(companies)

let newArrr = companies.push("Amozon");
console.log(companies);


