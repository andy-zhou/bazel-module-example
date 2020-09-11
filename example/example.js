const printDir = require("print-dir");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

printDir();
rl.on("line", (line) => {
  printDir();
});
