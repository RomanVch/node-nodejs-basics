import fs from 'fs';
import zlib from 'node:zlib';
import path from "path";

const pathFiles = 'src/zip/files';

const compress = async () => {
    const zip = zlib.createGzip();
    const entry = fs.createReadStream( path.join(pathFiles,"fileToCompress.txt") );
    const exit = fs.createWriteStream( path.join(pathFiles,"archive.gz") );
    entry.pipe(zip).pipe(exit);
};

await compress();