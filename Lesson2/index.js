const fs = require('fs');
const name = "My Name is Rezaul Karim RK";
const old =  '. I\'m 24 years old';
fs.exists('Demo2.txt',(result) => {
    if(result){
        console.log('Found');
    }
    else{
        console.log('Not found');
    }
});

// fs.unlink('Demo2.txt',(err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfull');
//     }
// });


// fs.rename('demo1.txt', 'Demo2.txt', (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfull');
//     }
// });


// fs.readFile('demo1.txt', 'utf-8', (Data, err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(Data);
//     }
// });

// fs.appendFile('demo1.txt', old, (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File is succesfully created.');
//     }
// });

// fs.writeFile('demo1.txt', txt, (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File is succesfully created.');
//     }
// });