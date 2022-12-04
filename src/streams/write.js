import fs from "fs";

const write = async () => {
    const pathFiles = 'src/streams/files/fileToWrite.txt';
    const writerStream = fs.createWriteStream(pathFiles);
    try {
        console.log( `Write text:`);
        process.stdin.on('data', data => {
            writerStream.write(`${data.toString()}`)
            console.log( `Text added`);
            process.exit();
        });
    } catch (e){
        console.log(e);
    }
};

await write();