import fs from "fs";


const read = async () => {
   try {
    const pathFiles = 'src/streams/files/fileToRead.txt';
    let text = '';
    const readerStream = fs.createReadStream(pathFiles);
   await readerStream.setEncoding('UTF8');
   await readerStream.on('data', (data) => {
        text += data;
    });
   await readerStream.on('end',function() {
        process.stdout.write(text);
    });
   } catch (e){
       console.log(e);
   }
};

await read();