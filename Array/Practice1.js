let heroes = [ 'ironman', 'hulk', 'thor', 'batman' ]
let marks = [ 96, 75, 48, 83, 66 ]
let info = [ 'rahul', 86, 'delhi' ]

heroes.forEach((val)=>{
    console.log(val)
})
console.log("\n");

marks.forEach((val)=>{
    console.log(val)
})

console.log("\n");

info.forEach((val)=>{
    console.log(val);
})



let mark = [85, 97, 44, 37, 76, 60];
let len = mark.length
let add=0,avg;
for(let m of mark){
    add+=m;
    avg =  add/len;
}
console.log(avg)