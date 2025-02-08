// Import the Client class from the 'pg' module
import Client from 'pg';

// Create a new instance of the Client class with the database configuration
const db = new Client({
    user: "username", // Database username
    host: "localhost", // Database host
    database: "mydatabase", // Database name
    password: "password", // Database password
    port: 5432, // Database port
});

// Connect to the database
db.connect();

// Execute a SQL query to select all rows from the 'users' table
db.query('SELECT * FROM users', (err, res) => {
    if (err) {
        // If there is an error executing the query, log the error stack
        console.log("Error executing query:", err.stack);
    } else {
        // If the query is successful, log the rows of the result
        console.log("User data:", res.rows);
    }
    // Close the database connection
    db.end();
});