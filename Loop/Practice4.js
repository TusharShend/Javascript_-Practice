let num = Number(prompt("Enter a number"));
let fact = 1;
let i = num;

do {
    fact = fact * i; 
    i--;
} while (i > 1);

console.log(`Factorial of ${num} is: ${fact}`);
