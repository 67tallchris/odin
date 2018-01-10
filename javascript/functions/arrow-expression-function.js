let sum = (a, b) => a + b;

/* The arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

// multiline arrow function

let sum = (a, b) => {  // the figure bracket opens a multiline function
  let result = a + b;
  return result; // if we use figure brackets, use return to get results
};

alert( sum(1, 2) ); // 3

