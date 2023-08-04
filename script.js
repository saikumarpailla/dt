function login() {
    // Implement user authentication logic here
    // For simplicity, let's assume it's always successful
    const username = document.getElementById('username').value;
    alert(`Welcome, ${username}!`);
    document.querySelector('.login-form').style.display = 'none';
}

function searchCrimeRate() {
    const cityOrState = document.getElementById('cityInput').value;
    // Implement the AJAX request to the backend to get crime rate predictions based on the city or state input
    // For simplicity, let's just display a message for now
    document.getElementById('resultContainer').innerHTML = `Predicted crime rate for ${cityOrState}: Not available`;
}