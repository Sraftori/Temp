const {readFile, writeFile} = require('fs');


console.log('start');
readFile('./tset/first.txt', 'utf8', (err, result) => {
    if(err){

        console.log(err);
        return;
    }
    const first = result;
    readFile('./tset/second.txt', 'utf8',(err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./tset/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    });
});

console.log('starting the next one');