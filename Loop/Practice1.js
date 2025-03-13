let Arr = [10,20,30,40,50,60,70,80,90]
for(let i=0;i<Arr.length;i++){
    console.log(Arr[i]);
}
//table 1 to 10 using nested for 
console.log("\n")
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++)
    {
        console.log(i*j)
    }
    console.log("\t")
}

//pattern 

console.log();
for(let i=1;i<=10;i++){
    for(let j=1;j<=i;j++)
    {
        console.log(i)
    }
    console.log("\t")
}