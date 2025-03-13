//Nested if-else
const checkOddEven = (num)=>{
    if(num > 2){
        if(num % 2 == 0)
            return true
        else
            return false

    }
    else{
        return "Number is Negative or Zero"

    }
}

let num = Number(prompt("Enter a Number"));
let result = checkOddEven(num)
if(result)
    console.log("Number is Even")
else
    console.log("Number is Odd")