import express from 'express';
const app = express();
const port = 3000;

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

//or

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//localhost is the default hostname for the local server and 3000 is the port number where the server is running.
//To access the server, open a web browser and type http://localhost:3000 in the address bar.
//The server will respond with a message "Cannot GET /" because we have not defined any routes yet.
//To stop the server, press Ctrl + C in the terminal where the server is running. This will stop the server and return to the command prompt.

