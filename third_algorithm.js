function multiples(arr) {
  return (resArr = arr.filter((num) => num % 3 === 0));
}

// !!! PRACTICE !!!
console.log(multiples([]));
console.log(multiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(multiples([30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]));
