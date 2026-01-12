# Task: Rewrite "if" into "switch"

### **📝 Task Details**

* **Original Task:** [Rewrite "if" into "switch"](https://javascript.info/switch#rewrite-if-into-switch)
* **Importance:** 4

Rewrite the code below using a single `switch` statement:

```javascript
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}

if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
