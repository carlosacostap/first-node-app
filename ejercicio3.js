const fs = require('fs');

const ej3 = fs.readdir('/usr/local/bin', (err, files) => {
    if(err) return console.error(err);
    files.reverse().map((file) => console.log(file));
});