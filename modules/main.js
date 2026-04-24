// Importing functions from other files
import { add, subtract } from "./mathUtils.js";
import { getUserName, getUserAge } from "./userUtils.js";
// Using functions
console.log(add(2, 3));        
console.log(subtract(3, 0));   

console.log(getUserName("Nirjala Tripathi "));
console.log(getUserAge(20));

//What JavaScript modules are
//JavaScript modules are separate files of code that allow you to split a large program into smaller, reusable parts. 
// Each module can contain functions, variables, or classes, and can be shared with other files using export and import.

//Difference between:
//localStorage stores data permanently in the browser. Here data remains after closing browser. LocalStorage works across all tabs.
//SessionStorage stores data only for one session. Here data is deleted when tab is closed. sessionStorage works only in the current tab.

//Why modular code is important in large applications
//To save user preferences (dark mode, language).
//To store login/session data.
//To save form data temporarily.