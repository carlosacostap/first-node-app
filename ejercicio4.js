const fs = require('fs');

let letra = 'a';

fs.readdir('/usr/local/bin', (err, files) => {
    if(err) return console.error(err);
    let arrayFiltrado = files.filter(file => file.startsWith(letra));
    console.log('Cantidad de archivos que comienzan con la letra ' + letra + ' es ' + arrayFiltrado.length);
});