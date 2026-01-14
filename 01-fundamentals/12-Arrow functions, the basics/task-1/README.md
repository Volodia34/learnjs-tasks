# Task: Rewrite with arrow functions

### **📝 Task Details**

* **Original Task:** [Rewrite with arrow functions](https://javascript.info/arrow-functions-basics#rewrite-with-arrow-functions)

Replace Function Expressions with arrow functions in the code below:

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
