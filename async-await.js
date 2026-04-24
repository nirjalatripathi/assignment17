//1.converting promise to async function
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("The number is Even");
        } else {
            reject("The number is Odd");
        }
    });
}
// Async function using await
async function runCheck() {
    try {
        const result = await checkNumber(4);
        console.log("Success:", result);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Execution completed");
    }
}
runCheck();

//Question no:2
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // change to false to test error
      if (success) {
        resolve("Data loaded successfully");
      } else {
        reject("Failed to load data");
      }
    }, 2000);
  });
}
// async function with error handling
async function fetchData() {
  try {
    // wait for Promise result
    const result = await getData();
    console.log(result);
  } catch (error) {
    // runs if there is an error
    console.log("Error:", error);
  }
}
fetchData();

//3. getUserData()
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
            const user = {
                name: "Nirjala Tripathi",
                email: "nirjala@t.com",
                city: "Kathmandu"
            };
            resolve(user);

        }, 2000);
    });
}
async function displayUserData() {
    try {
        console.log("Fetching user data...");
        let user = await getUserData();

        console.log("User Data:", user);

    } catch (error) {
        console.log("Error:", error);

    } finally {
        console.log("Operation completed");
    }
}

displayUserData();
