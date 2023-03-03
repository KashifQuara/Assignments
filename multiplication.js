const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (num) => {
  num = parseInt(num); 

  if (isNaN(num)) {
    console.error("Invalid input: not a number");
    rl.close();
    return;
  }

  const filename = `table-${num}.txt`; 

  let data = "";
  for (let i = 1; i <= 10; i++) {
    data += `${num} x ${i} = ${num * i}\n`;
  }

  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log(`Multiplication table for ${num} created in ${filename}`);
    rl.close();
  });
});
