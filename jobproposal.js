//document.addEventListener('jobProposalForm', function () {
//    displaySavedData();
//});

// Function to submit the form and store data in local storage
function submitForm() {
    var jobName = document.getElementById('jobName').value;
    var workingHours = document.getElementById('workingHours').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var age = document.getElementById('age').value;
    var salaryMin = document.getElementById('salaryMin').value;
    var salaryMax = document.getElementById('salaryMax').value;


    if (jobName && workingHours && city && state && age && salaryMin && salaryMax) {
        var data = {
            jobName: jobName,
            workingHours: workingHours,
            city: city,
            state: state,
            age: parseInt(age, 10),
            salaryMin: parseFloat(salaryMin),
            salaryMax: parseFloat(salaryMax)
        };

        // Retrieve existing data from local storage
        var existingData = JSON.parse(localStorage.getItem('userData')) || [];

        // Add new data
        existingData.push(data);

        // Save updated data back to local storage
        try {
            localStorage.setItem('userData', JSON.stringify(existingData));

            // Clear the form
            document.getElementById('dataForm').reset();

            // Display the updated data
            displaySavedData();
        } catch (e) {
            // Handle errors related to local storage limits or permissions
            showError('Error saving data. Please try again.');
        }
    } else {
        // If not all fields are filled, show an error
        showError('Please enter all required fields.');
    }
}

function showError(errorMessage) {
    alert(errorMessage);
}
document.addEventListener('DOMContentLoaded', function () {
    displayEmployeeData();
});

// Function to display stored data on the webpage
function displayStoredData(data) {
    var displayContainer = document.getElementById('displayContainer');
    displayContainer.innerHTML = ''; // Clear previous data

    // Create a list to display stored data
    var dataList = document.createElement('ul');

    data.forEach(function (user) {
        var listItem = document.createElement('li');
        listItem.textContent = 'Username: ' + user.city + ', Password: ' + user.age;
        dataList.appendChild(listItem);
    });

    displayContainer.appendChild(dataList);
}

document.addEventListener('DOMContentLoaded', function () {
    var storedData = JSON.parse(localStorage.getItem('userData')) || [];
    displayStoredData(storedData);
});