let place = parseInt(process.argv[2]);

if (place == 1)
    console.log("Unit");
else if (place == 10)
    console.log("Ten");
else if (place == 100)
    console.log("Hundred");
else if (place == 1000)
    console.log("Thousand");
else if (place == 10000)
    console.log("Ten Thousand");
else if (place == 100000)
    console.log("Lakh");
else if (place == 1000000)
    console.log("Ten Lakh");
else if (place == 10000000)
    console.log("Crore");
else if (place == 100000000)
    console.log("Ten Crore");
else
    console.log("Invalid Input");