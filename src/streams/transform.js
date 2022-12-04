import Transform from 'stream';

const transform = async () => {
    const pathFiles = 'src/streams/files/fileToWrite.txt';
    const reverseText = new Transform({
        transform(chunk, encoding, callback) {
            callback(null,chunk.split("").reverse().join(""));
        }
    });
    console.log(reverseText)
    try {
        console.log(`Write text:`);
        process.stdin.pipe(reverseText).on('data', data => {
            console.log(`d:${data.toString()}`)
            console.log(`Text added`);
            process.exit();
        });
    } catch (e){
        console.log(e)
    }
}

await transform();