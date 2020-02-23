const fs = require('fs');
// file operations
const dir = './node_modules';

// Check if the file exists in the current directory.
fs.access(dir, fs.constants.F_OK, (err) => {
    console.log(`${dir} ${err ? 'does not exist' : 'exists'}`);
});

// Check if the file is readable.
fs.access(file, fs.constants.R_OK, (err) => {
    console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});
  
// Check if the file is writable.
fs.access(file, fs.constants.W_OK, (err) => {
    console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});
  
// Check if the file exists in the current directory, and if it is writable.
fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
    if (err) {
        console.error(`${file} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
    } else {
      console.log(`${file} exists, and it is writable`);
    }
});

// count lines in a file
var path = './package.json';    
var text = fs.readFileSync(path).toString();
var lines = text.split('\n');
var newlines_count = lines.length - 1;
console.log(`no. of lines in file: ${newlines_count}`);


// read file
app.get('/display-package', (req, res) => {
    fs.readFile('package.json', (err) => {
        if(err) throw err;
        const data = require('./package.json');
        res.json(data);
    });
});

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('package.json')
});

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
});