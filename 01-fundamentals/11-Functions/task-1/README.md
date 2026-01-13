# Task: Is "else" required?

### **📝 Task Details**

* **Original Task:** [Is "else" required?](https://javascript.info/function-basics#is-else-required)
* **Importance:** 4

The following function returns `true` if the parameter `age` is greater than `18`.
Otherwise it asks for a confirmation and returns its result:

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
```

Will the function work differently if else is removed?

```JavaScript

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
```
Is there any difference in the behavior of these two variants?
