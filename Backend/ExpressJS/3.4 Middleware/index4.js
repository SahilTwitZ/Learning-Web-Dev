import express from "express";
import bodyParser from "body-parser"; 
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

/*
 * Middleware function to generate a band name based on the request body.
 * 
 * This function takes the "street" and "pet" properties from the request body
 * and concatenates them to form a band name.
 * 
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.street - The name of the street.
 * @param {string} req.body.pet - The name of the pet.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function in the stack.
 */

function bandNameGenerator(req, res, next) {
  console.log(req.body);  // Log the request body to inspect
  req.bandName = req.body.street + req.body.pet;  // Set band name in the request object
  next();  // Ensure the next middleware is called
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1> <h2>${req.bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
