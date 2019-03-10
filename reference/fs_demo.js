const fs = require('fs');
const path = require('path');

// //Create Folder
// fs.mkdir(path.join(__dirname, './test'), {}, err => {
//     if (err) throw err;
//     console.log("Folder Created")
// });

// //Create and Write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//     'Hello World!',
//     err => {
//         if (err) throw err;
//         console.log('File written to...');
//     }
// );

// //Append to file
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//     'I love Node.js!!',
//     err => {
//         if (err) throw err;
//         console.log('File written to...');
//     }
// );

//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
