//Request Vocab
//GET - Retrieve data from the server
//POST - Send data to the server
//PUT - Update data on the server
//PATCH - Update data partially
//DELETE - Delete data from the server

import express from 'express';
const app = express();

// app.get('/', (req, res) => {
//     // console.log(req.rawHeaders)
//     // res.send('Hello World');
//     res.send('<h1>Hello World</h1>');
//     // res.json({message: 'Hello World'});
// });

app.get('/', (req,res) => {
    res.send('<h1>Hello Home!</h1>');
});

app.get('/about', (req,res) => {
    res.send('<h2> About Me. </h2> <br>' +
        '<p> I am a web developer. </p>');
});

app.get('/contact', (req,res) => {
    res.send('<h1>Contact Me.</h1> <br>' +
        '<p>Mob no.: +918789726161</p>');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//npm i -g nodemon -> used to run the server without restarting it
//nodemon index.js -> run the server
