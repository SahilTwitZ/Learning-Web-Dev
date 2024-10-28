import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
    "message" : "Enter the URL you would like to convert to a QR code: ",
    "name" : "url"
}
  ])
  .then((answers) => {
    const URL = answers.url;
    var qr_svg = qr.image(URL, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));

    fs.writeFile('url.txt',URL, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

