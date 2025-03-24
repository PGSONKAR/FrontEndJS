let sum = 0;
for(let i = 0; i < 5; i++){
    let num = Math.floor(Math.random() * 100);
    console.log("Generated ", i," Random Number: ", num);
    sum += num;
}

let average = sum / 5;
console.log("Sum of Five Random Numbers: ", sum);
console.log("Average of Five Random Numbers: ", average);