const fs = require('fs');

const ej1 = fs.readdir('/usr/local/bin', (err, files) => {
  if(err) return console.error(err);
  return files;
});