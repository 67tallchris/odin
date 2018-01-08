

// callback function to pass function valuase and use function expressions

function ask(question, yes, no) {
  if (confirm(question)) yes ()
  else no();
}

function showOk() {
  alert ("You agreed.");
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: function showOk, showCancel are passed as argumetns to ask
ask ("Do you agree", showOk, showCancel);

// showOk becomes the callback for the "yes" answer, and showCancel for the "no" answer.


