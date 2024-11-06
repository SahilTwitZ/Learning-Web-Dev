import express from "express"; // Importing the express module
import morgan from "morgan"; // Importing the morgan logging middleware

const app = express(); // Creating an instance of an Express application
const port = 3000; // Defining the port number the server will listen on

// app.use(morgan("combined")); // Using morgan middleware with 'combined' format (commented out)
app.use(morgan("tiny")); // Using morgan middleware with 'tiny' format

// Defining a route handler for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello"); // Sending a response with the text "Hello"
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Logging a message to the console when the server starts
});


