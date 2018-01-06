// learning how to change from if statement to ternary and or

// ternary operation
function checkAge(age) {
  return (age > 18) ? true: confirm('Do you have your parents permission to access this page?');
}
// or operation
function checkAge(age) {
  return (age > 18) || confirm('Do you have your parents permission to access this page?');
}
 
