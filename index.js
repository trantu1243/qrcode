

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs";

inquirer
  .prompt([
    {"message" : "URL to enter: ", "name":"URL"}
    
    
  ])
  .then((answers) => {
   
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));  
    fs.writeFile("./URL.txt", answers.URL, (err)=> {
        if (err) throw err;
        console("The file has been saved!");
    })
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
