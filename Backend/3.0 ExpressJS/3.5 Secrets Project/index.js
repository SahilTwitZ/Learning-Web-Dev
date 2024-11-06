// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const _dirname = dirname(fileURLToPath(import.meta.url));

// Create an Express application
const app = express();
const port = 3000;

// Variable to track if the user is authorized
var isUserAuthorised = false;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to check the password
function checkPassword(req, res, next) {
    const password = req.body["password"];
    if (password == "ILoveProgramming") {
        isUserAuthorised = true; // Set user as authorized if password matches
    }
    next(); // Proceed to the next middleware or route handler
}

// Use the checkPassword middleware for all routes
app.use(checkPassword);

// Route to serve the homepage
app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html");
});

// Route to handle the form submission
app.post("/check", (req, res) => {
    if (isUserAuthorised) {
        res.sendFile(_dirname + "/public/secret.html"); // Serve secret page if authorized
    } else {
        res.sendFile(_dirname + "/public/index.html"); // Serve homepage if not authorized
        // Alternatively res.redirect("/");
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
