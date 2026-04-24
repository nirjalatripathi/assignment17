// Get HTML elements
const form = document.getElementById("userForm");
const output = document.getElementById("output");
const clearBtn = document.getElementById("clearBtn");

// Show saved data on page load
function showData() {
    let data = localStorage.getItem("user");

    if (data) {
        let user = JSON.parse(data);
        output.innerHTML = `
            Name: ${user.name} <br>
            Email: ${user.email}
        `;
    } else {
        output.innerHTML = "No data found";
    }
}

// Save data on form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let user = {
        name: name,
        email: email
    };

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Update display
    showData();

    // Clear form
    form.reset();
});

// Clear data button
clearBtn.addEventListener("click", function () {
    localStorage.removeItem("user");
    showData();
});

// Run on page load
showData();

//What is localStorage?
//localStorage is a browser feature that allows you to store data permanently in the user’s browser.

//Difference between localStorage vs sessionStorage
//localStorage stores data permanently in the browser.Here data remains after closing browser. localStorage works across all tabs.
//sessionStorage stores data only for one session. Here data is deleted when tab is closed. sessionStorage works only in the current tab.

//When browser storage is useful in real applications
//To save user preferences (dark mode, language).
//To store login/session data.
//To save form data temporarily.
