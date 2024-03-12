document.addEventListener('registerForm', function () {
    displaySavedData();
});
function initializeLocalStorage() {
    // Check if the database exists
    if (!localStorage.getItem('employerLoginDB')) {
        // If not, create the database with an empty array for employeeLogin
        localStorage.setItem('employerLoginDB', JSON.stringify({ employeeLogin: [] }));
    }
}

// Call the function to initialize Local Storage
initializeLocalStorage();

function storeUserData() {
    // Retrieve input values
    var employerName = document.getElementById('employerName').value;
    var organizationName = document.getElementById('organizationName').value;
    var gstNumber = document.getElementById('gstNumber').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if all fields are provided
    if (employerName && organizationName && gstNumber && city && state && phone && email && password) {
        // Create an object to represent the user
        var userData = {
            employerName: employerName,
            organizationName: organizationName,
            gstNumber: gstNumber,
            city: city,
            state: state,
            phone: phone,
            email: email,
            password: password
        };

        // Retrieve existing data from local storage
        var existingData = JSON.parse(localStorage.getItem('employerLoginDB')) || [];

        // Add new user data
        existingData.push(userData);

        // Save updated data back to local storage
        localStorage.setItem('employerLoginDB', JSON.stringify(existingData));

        // Clear the form
        document.getElementById('registerForm').reset();

        alert('User data stored in LocalStorage.');
    } else {
        alert('Please fill in all the fields.');
    }
}

document.getElementById('emphp').addEventListener('click', function () {
    window.location.href = 'employee.html';
});