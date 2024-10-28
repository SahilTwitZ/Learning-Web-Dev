const fs = require("fs");
// fs.writeFile("message2.txt", "Hello file system!", (err) => {
//     if (err) throw err;
//     console.log("File written successfully");
// });

fs.readFile("message2.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
