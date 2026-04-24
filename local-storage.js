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