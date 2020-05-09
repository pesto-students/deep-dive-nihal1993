const fs = require('fs');
path = require('path');
filePath = path.join(__dirname, 'branches.csv');

async function csvParser(file) {
    const readable = fs.createReadStream(file);
    var myObj = new Object();
    try {
        readable.setEncoding('utf8');
        counter = 0;
        for await (const chunk of readable) {
            var splitChunk = chunk.split("\n");
            splitChunk.forEach(element => {
                var splitLine = element.split(",");
                myObj[counter] = splitLine;
                counter++;
            });
        }
        console.log(myObj);
    }
    catch (err) {
        console.log(err.message);
    }

}
csvParser(filePath);
