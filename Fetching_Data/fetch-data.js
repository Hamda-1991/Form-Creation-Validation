document.addEventListener('DOMContentLoaded', function() {
    // Asynchronous function to fetch user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
        const dataContainer = document.getElementById('api-data'); // Data container

        try {
            // Fetch user data from the API
            const response = await fetch(apiUrl);
            const users = await response.json(); // Convert the response to JSON

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold the user list
            const userList = document.createElement('ul');

            // Loop through users and create <li> elements for each
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the user's name as text
                userList.appendChild(listItem); // Append the <li> to the <ul>
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // In case of error, display an error message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Call the fetchUserData function when the document has fully loaded
    fetchUserData();
});
