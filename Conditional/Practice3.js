function checkGreade(mark){
    let Greade;
    if(mark>=80 && mark<=100)
         Greade = "A";
    else if(mark>=70 && mark<=89)
         Greade = "B";
    else if(mark>=60 && mark<=69)
         Greade = "C";
    else if(mark>=50 && mark<=59)
         Greade = "D";
    else if(mark>=0 && mark<=49)
        Greade = "F"
    else
        return "Invalid Input";

        return Greade;

}

let mark = Number(prompt("Enter a Mark"));
let result = checkGreade(mark)
console.log(result)