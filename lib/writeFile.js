const fs = require('fs');
const CLI = require('./cli');

class writeFile {
    
    makeSVG(svgContent) {
        fs.writeFile('logo.svg', svgContent, (err) => {
            if(err) {
                console.log('Error writing SVG file:', err);
            } else {
                console.log('SVG file saved successfully: logo.svg');
            }
        })
    }
}

module.exports = writeFile;