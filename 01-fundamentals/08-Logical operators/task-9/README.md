# Task: Check the login

### **📝 Task Details**

* **Original Task:** [Check the login](https://javascript.info/logical-operators#check-the-login)
* **Importance:** 3

Write the code which asks for a login with `prompt`.

If the visitor enters `"Admin"`, then `prompt` for a password:
* If the input is an empty line or `Esc` – show "Canceled".
* If it’s another string – then show "I don’t know you".

The password is checked as follows:
* If it equals `"TheMaster"`, then show "Welcome!".
* Another string – show "Wrong password".
* For an empty string or cancelled input, show "Canceled".

**Constraints:**
Please use nested `if` blocks. Mind the overall readability of the code.

> **Hint:** Passing an empty input to a prompt returns an empty string `''`. Pressing `Esc` during a prompt returns `null`.
