import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
    const pathFiles = 'src/hash/files/fileToCalculateHashFor.txt';
    const errorMsg = "FS operation failed";
    try {
        fs.access(pathFiles, fs.constants.F_OK, (err) => {
            if(err) {
                throw new Error(errorMsg);
            } else {
                fs.readFile(pathFiles,(err,data)=>{
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(crypto.createHash('sha256').update(data).digest('hex'))
                    }
                })
            }})
    } catch (e) {
        console.log(e);
    }
};

await calculateHash();