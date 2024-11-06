// HTTP return code cheat sheet
// 1** Hold On  or Informational responses 100-199
// 2** Here You or Successful responses Go 200-299
// 3** You fucked up or Redirection messages 300-399
// 4** I fucked up or Client error respones 400-499
// 5** Server fucked up or Server error responses 500-599

// - **GET**: Retrieve data
//   Example: `GET /api/users/123`

// - **POST**: Create new resource
//   Example: `POST /api/users` with data `{"name": "John Doe"}`

// - **PUT**: Replace resource (or create if not exists)
//   Example: `PUT /api/users/123` with data `{"name": "Jane Doe"}`

// - **PATCH**: Update part of a resource
//   Example: `PATCH /api/users/123` with data `{"email": "new@example.com"}`

// - **DELETE**: Remove resource
//   Example: `DELETE /api/users/123`

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page!</h1>");
});

app.post("/register", (req, res) => {
  //do something
  res.sendStatus(201);
});

app.put("/user/sahil", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/sahil", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/sahil", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
