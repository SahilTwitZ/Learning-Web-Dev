// Import the express module
import express from "express";

// Import the dirname function from the path module
import { dirname } from "path";

// Import the fileURLToPath function from the url module
import { fileURLToPath } from "url";

// Get the directory name of the current module file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create an instance of an Express application
const app = express();

// Define the port number to listen on
const port = 3000;

// Middleware to parse URL-encoded bodies
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route handler for the root URL ("/")
app.get("/", (req, res) => {
  // Send the index.html file located in the public directory
  res.sendFile(__dirname + "/public/index.html");
});

// Define a route handler for the form submission
app.post("/submit", (req, res) => {
  // Log the form data to the console
  console.log(req.body);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message to the console when the server starts
  console.log(`Listening on port ${port}`);
});
