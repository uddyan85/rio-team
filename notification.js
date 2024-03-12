document.addEventListener('DOMContentLoaded', function () {
    // Simulate fetching data from employeeprofile.html
    const messages = fetchMessagesFromEmployeeProfile();

    // Display notification pop-up
    displayNotification(messages);
});

function fetchMessagesFromEmployeeProfile() {
    // Replace this with actual logic to fetch data from employeeprofile.html
    return ['Message 1', 'Message 2', 'Message 3'];
}

function displayNotification(messages) {
    const notificationContainer = document.getElementById('notification-container');
    const notificationContent = document.getElementById('notification-content');

    messages.forEach(message => {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        notificationContent.appendChild(messageElement);
    });

    notificationContainer.style.display = 'block';
}

function closeNotification() {
    const notificationContainer = document.getElementById('notification-container');
    notificationContainer.style.display = 'none';
}