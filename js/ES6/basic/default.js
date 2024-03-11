// Default function parameters explained:

// Used to assign values to function arguments when no value is provided.
// Enhances flexibility and code reusability.

// Syntax:
// function functionName(parameter1, parameter2 = defaultValue, ...) {}

// - parameter1: The first required parameter.
// - parameter2: An optional parameter with the default value defaultValue.
// - ...: Represents "rest parameters" explained later.

// Key points:
// - Default parameters must be placed after parameters without defaults.
// - Rest parameters (...) collect excess arguments into an array, allowing functions to handle varying numbers of arguments.

// Best practices:
// - Choose meaningful default values that reflect common use cases.
// - Use default parameters sparingly to avoid overly complex function signatures.
// - Consider using optional parameters in specific contexts for better readability.

// Examples:

// Numbers: Add values with a default of 0.
function add(num1, num2 = 0) {
    return num1 + num2;
  }
  
  // String: Combine first and last names with an empty default for last name.
  function fullName(first, last = '') {
    return first + ' ' + last;
  }
  
  // Boolean: Enable a feature with a default of true.
  function isEnabled(option = true) {
    return option;
  }
  
  // Array: Accept a friend list with an empty default.
  function friends(friendList = []) {
    return friendList;
  }
  
  // Object: Create a person object with an empty default.
  function person(details = {}) {
    return details;
  }
  
  // Usage examples:
  const sum1 = add(5, 7); // 12
  const sum2 = add(5); // 5
  
  const name1 = fullName('John', 'Doe'); // John Doe
  const name2 = fullName('Jane'); // Jane
  
  const enabled = isEnabled(); // true
  const disabled = isEnabled(false); // false
  
  const friends1 = friends(['Alice', 'Bob']); // ['Alice', 'Bob']
  const friends2 = friends(); // []
  
  const person1 = person({ name: 'Mary', age: 30 }); // { name: 'Mary', age: 30 }
  const person2 = person(); // {}
  
  // Advanced usage:
  // Default parameters also work in arrow functions.
  // Rest parameters allow handling varying numbers of arguments.
  
  // Remember: Use default parameters effectively for clean and flexible code!  