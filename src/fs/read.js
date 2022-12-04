import fs from "fs";

const pathFiles = 'src/fs/files/fileToRead.txt';
const errorMsg = "FS operation failed";

const read = async () => {
    try{
        fs.access(pathFiles, fs.constants.F_OK, (err) => {
            if(err) {
                throw new Error(errorMsg);
            } else {
                fs.readFile(pathFiles,(err,data)=>{
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data.toString()); // содержимое файла
                    }
                })
            }})
    } catch (e) {
        console.log(e);
    }
    }


await read();