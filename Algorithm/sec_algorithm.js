function stringCompare(name) {
  let validName = name.toLowerCase();
  validName = validName[0].toUpperCase() + validName.slice(1);

  if (validName === "John") {
    return `Hello, ${name}`;
  } else {
    return "There is no such name";
  }
}

// !!! PRACTICE !!!
console.log(stringCompare("John"));
console.log(stringCompare("Doe"));
