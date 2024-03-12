// Corrected event listener for form submission
document.getElementById('registerempForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    storeUserData();
});

// Corrected initialization function for Local Storage
function initializeLocalStorage() {
    // Check if the database exists
    if (!localStorage.getItem('employeeLoginDB')) {
        // If not, create the database with an empty array for employeeLogin
        localStorage.setItem('employeeLoginDB', JSON.stringify({ employeeLogin: [] }));
    }
}

// Call the function to initialize Local Storage
initializeLocalStorage();

// Function to store user data
function storeUserData() {
    // Retrieve input values
    var employerName = document.getElementById('employeeName').value;
    var qualification = document.getElementById('qualification').value;
    var aadharNumber = document.getElementById('aadharNumber').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if all fields are provided
    if (employerName && qualification && aadharNumber && city && state && phone && email && password) {
        // Create an object to represent the user
        var userData = {
            employeeName: employerName, // Corrected variable name
            qualification: qualification,
            aadharNumber: aadharNumber,
            city: city,
            state: state,
            phone: phone,
            email: email,
            password: password
        };

        // Retrieve existing data from local storage
        var existingData = JSON.parse(localStorage.getItem('employeeLoginDB')).employeeLogin || [];

        // Add new user data
        existingData.push(userData);

        // Save updated data back to local storage
        localStorage.setItem('employeeLoginDB', JSON.stringify({ employeeLogin: existingData }));

        // Clear the form
        document.getElementById('registerempForm').reset();

        alert('User data stored in LocalStorage.');
    } else {
        alert('Please fill in all the fields.');
    }
}
document.getElementById('company').addEventListener('click', function () {
    window.location.href = 'company.html';
  });