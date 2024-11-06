import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// Prompt the user for a URL
inquirer
  .prompt([
    {
      "message": "Enter the URL you would like to convert to a QR code: ",
      "name": "url"
    }
  ])
  .then((answers) => {
    const URL = answers.url;
    
    // Generate QR code image from the URL
    var qr_svg = qr.image(URL, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));

    // Save the URL to a text file
    fs.writeFile('url.txt', URL, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    console.log("Promt couldn't be rendered in the current environment");
    } else {
      console.log("An error occurred: ", error);
    }
  });