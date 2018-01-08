// using a callback expression to write a shorter version of the callback-function.js wrote earlier

function ask(question, yes,no) {
  if (confirm(question)) yes()
  else no();
}

ask (
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
