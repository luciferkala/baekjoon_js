const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  console.log(parseInt(input[0]) * parseInt(input[1][2]));
  console.log(parseInt(input[0]) * parseInt(input[1][1]));
  console.log(parseInt(input[0]) * parseInt(input[1][0]));
  console.log(parseInt(input[0]) * parseInt(input[1]));
  process.exit();
});

