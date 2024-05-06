document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var username = document.getElementById("userName").value;
    var password = document.getElementById("pwd").value;
    
    // Call function to check credentials
    checkCredentials(username, password);
});

function checkCredentials(username, password) {
    // Fetch the CSV file from Flask server
    fetch('/csv_data')
    .then(response => response.text())
    .then(csvData => {
        // Parse CSV data
        var rows = csvData.split('\n');
        rows.shift(); // Remove header

        // Loop through CSV rows
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i].trim().split(',');

            // Extract username and password
            var csvUsername = row[0].trim();
            var csvPassword = row[1].trim();

            // Check if credentials match
            if (username === csvUsername && password === csvPassword) {
                // Redirect to success page or perform desired action
                console.log("Login successful");
                return;
            }
        }

        // If no match found, display error message
        document.getElementById("errorMessage").style.display = "block";
    })
    .catch(error => console.error('Error fetching CSV:', error));
}
