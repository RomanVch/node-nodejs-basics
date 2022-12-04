import fs from "fs";

const pathFiles = 'src/fs/files';
const errorMsg = "FS operation failed";

const list = async () => {
    try {
        fs.access(pathFiles, fs.constants.F_OK, (err) => {
            if(err) {
                throw new Error(errorMsg);
            } else {
                fs.readdir(pathFiles,(err,file)=>{
                    if (err)
                        console.log(err);
                    else {
                        console.log(file)
                    }
                })
            }})
        } catch (e) {
        console.log(e)
        }
}


await list();