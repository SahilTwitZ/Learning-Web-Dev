import express from "express";

const app = express();
const port = 3000;

// Custom middleware to log request details
function logger(req, res, next) { 
  console.log("Request method: ", req.method); // Log the HTTP method of the request
  console.log("Request URL: ", req.url); // Log the URL of the request
  next(); // Pass control to the next middleware function
}

// Use the logger middleware for all routes
app.use(logger);

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello"); // Send a response with the text "Hello"
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Log that the server is running
});