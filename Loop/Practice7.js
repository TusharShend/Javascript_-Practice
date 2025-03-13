let user = {
    name: "Tushar",
    age: 22,
    city: "Pune",
    country: "India"
};

let count = 0;
for (let key in user) {
    count++;
}
console.log(`Total properties: ${count}`);
