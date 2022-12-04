import fs from 'fs';
import zlib from 'node:zlib';
import path from "path";

const pathFiles = 'src/zip/files';

const decompress = async () => {
   try {
       const zip = zlib.createUnzip();
       const entry = fs.createReadStream( path.join(pathFiles,"archive.gz") );
       const exit = fs.createWriteStream( path.join(pathFiles,"fileToCompress.txt") );
       entry.pipe(zip).pipe(exit);
       console.log('file decompress')
   }catch (e){
       console.log(e)
   }
};

await decompress();