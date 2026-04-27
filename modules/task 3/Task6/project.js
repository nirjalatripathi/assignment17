// references 
const userList = document.getElementById("userList");
const selectedUserDiv = document.getElementById("selectedUser");

// Function to display selected user details on screen
function displaySelectedUser(user) {
  selectedUserDiv.innerHTML = `
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>City:</strong> ${user.address.city}</p>
  `;
}

// Fetch data from API 
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json()) // Convert response to JSON format
  .then(users => {

    // Loop through each user and display on page
    users.forEach(user => {
      const div = document.createElement("div");

      // Show required user details
      div.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
        <hr>
      `;

      div.addEventListener("click", () => {
        // Save selected user in localStorage 
        localStorage.setItem("selectedUser", JSON.stringify(user));

        // Immediately display selected user
        displaySelectedUser(user);
      });

      userList.appendChild(div); // Add user to UI
    });
  })
  .catch(error => {
    // Handle error if API fails
    console.log("Error fetching users:", error);
  });

// When page loads, check if a user was previously saved
const savedUser = localStorage.getItem("selectedUser");

if (savedUser) {
  // Convert string back to object and display it
  displaySelectedUser(JSON.parse(savedUser));
}

/* Real world Use of:
APIs 
Used to connect frontend apps with backend services

Async Handling 
Used to handle tasks that take time 
Prevents webpage from freezing while waiting for data

Browser Storage 
Stores data in the browser
Keeps data even after page reload (localStorage)*/