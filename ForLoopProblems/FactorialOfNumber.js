let factNum = parseInt(process.argv[2]);
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);