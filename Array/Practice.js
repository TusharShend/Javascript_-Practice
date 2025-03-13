//filter,map,reduce on Array

let Arr = [90,91,80,70,89,93,94,95,97]
//filter
let newArr = Arr.filter((val)=>{
    return val >=90
})
for(let i=0;i<newArr.length;i++)
console.log(newArr[i])

//output:90,91,93,94,95,97
console.log("\n")
console.log("\n")
//map 
let gressArr = newArr.map((val)=>{
    return val+2
})
gressArr.forEach((val)=>{
    console.log(val)
})
//reduce
console.log("\n")
let singleVal = gressArr.reduce((a,b)=>{
    return a+b;
})

console.log(singleVal)