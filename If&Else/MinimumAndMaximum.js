for(let i=0; i<5; i++){
    let num = Math.floor(Math.random() * 1000);
    console.log("Generated ", i," Random Number: ", num);
    if(i == 0){
        var min = num;
        var max = num;
    }

    if(num < min)
        min = num;
    
    if(num > max)
        max = num;
}

console.log("Minimum of Five Random Numbers: ", min);
console.log("Maximum of Five Random Numbers: ", max);