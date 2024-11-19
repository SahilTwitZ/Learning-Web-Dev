// Import the 'fs' (file system) module to interact with the file system
const fs = require("fs");

// This block of code is commented out. It writes "Hello file system!" to a file named "message2.txt".
// If there is an error during the write operation, it throws an error.
// If the write operation is successful, it logs "File written successfully" to the console.


// fs.writeFile("message2.txt", "Hello file system!", (err) => {
//     if (err) throw err;
//     console.log("File written successfully");
// });

// Read the contents of the file "message2.txt" with UTF-8 encoding
fs.readFile("message2.txt", "utf8", (err, data) => {
    // If there is an error during the read operation, throw an error
    if (err) throw err;
    // If the read operation is successful, log the contents of the file to the console
    console.log(data);
});