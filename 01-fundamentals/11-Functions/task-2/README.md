# Task: Rewrite the function using '?' or '||'

### **📝 Task Details**

* **Original Task:** [Rewrite the function using '?' or '||'](https://javascript.info/function-basics#rewrite-the-function-using-or)
* **Importance:** 4

The following function returns `true` if the parameter `age` is greater than `18`.
Otherwise it asks for a confirmation and returns its result.

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```

Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?

Using OR ||
