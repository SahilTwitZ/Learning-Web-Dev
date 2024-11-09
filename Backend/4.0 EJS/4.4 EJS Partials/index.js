import express from "express"; // Import the express module

const app = express(); // Create an instance of express
const port = 3000; // Define the port number

app.use(express.static("public")); // Serve static files from the "public" directory

// Define a route for the root URL
app.get("/", (req, res) => {
  res.render("index.ejs"); // Render the "index.ejs" template
});

// Define a route for the "/about" URL
app.get("/about", (req, res) => {
  res.render("about.ejs"); // Render the "about.ejs" template
});

// Define a route for the "/contact" URL
app.get("/contact", (req, res) => {
  res.render("contact.ejs"); // Render the "contact.ejs" template
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Log a message when the server starts
});
