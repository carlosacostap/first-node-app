const fs = require('fs');

fs.readdir('/usr/local/bin', (err, files) => {
    if(err) return console.error(err);
    files.map((file) => console.log(file));
});