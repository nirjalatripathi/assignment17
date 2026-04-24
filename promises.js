// TASK 1: checkNumber Function
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Number is even");
    } else {
      reject("Number is odd");
    }
  });
}
checkNumber(7)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  //TASK2: Conusume the promise
  checkNumber(5)
    .then((result) => {
        // Runs if Promise is resolved
        console.log("Success:", result);
    })
    .catch((error) => {
        // Runs if Promise is rejected
        console.log("Error:", error);
    })
    .finally(() => {
        // Runs always
        console.log("Execution completed");
    });

    //Task 3: Another example
    function loadData() {
    return new Promise((resolve, reject) => {
        console.log("Loading data..."); // pending state
        setTimeout(() => {
            // Simulating successful data loading after 2 seconds
            resolve("Data loaded successfully!");
           
        }, 2000);
    });
}
// Consuming the Promise
loadData()
    .then((result) => {
        // Runs when Promise is fulfilled
        console.log(result);
    })
    .catch((error) => {
        // Runs when Promise is rejected
        console.log(error);
    })
    .finally(() => {
        // Always runs (success or failure)
        console.log("Loading process finished");
    });


//Task4: 
//A promise is an object that represents the result of an asynchronous operation, which may be available now, in the future, or never.
//A Promise is a guarantee that you will get a result later

//Difference between: 
//Pending: It is the initial state of Promise. No results are available yet. 
//Fulfilled: The operation is completed successfully. The promise returns a value. 
//Rejected: The operation fails and promise returns an error. 

//Why Promises are Useful in Real-World Async Operations
//Promises are useful because they handle asynchronous operations efficiently, avoid callback hell, provide better error handling using .catch(), and make code more readable and maintainable.