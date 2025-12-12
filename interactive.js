const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("input number: ", (num) => {
  console.log(numCompare(num));

  rl.question("input name: ", (name) => {
    console.log(stringCompare(name));

    rl.question("Enter numbers (separated by spaces): ", (arr) => {
      arr = arr.split(" ");
      console.log(multiples(arr));
      rl.close();
    });
  });
});

function numCompare(num) {
  if (num > 7) {
    return "Hello";
  } else {
    return "";
  }
}

function stringCompare(name) {
  let validName = name.toLowerCase();
  validName = validName[0].toUpperCase() + validName.slice(1);

  if (validName === "John") {
    return `Hello, ${name}`;
  } else {
    return "There is no such name";
  }
}

function multiples(arr) {
  return (resArr = arr.filter((num) => parseInt(num) % 3 === 0));
}
