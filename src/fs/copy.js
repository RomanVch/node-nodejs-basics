import fs from "fs"
import path from "path"

const pathFiles = 'src/fs/files';
const pathFilesForCopy = 'src/fs/files_copy';
const errorMsg = "FS operation failed";

const copy = async () => {
    try {
    fs.access(pathFiles, fs.constants.F_OK, (err) => {
        if(err){
            throw new Error(errorMsg);
        }else{
            fs.access(pathFilesForCopy, fs.constants.F_OK, (err) => {
                if(err){
                    fs.mkdir(pathFilesForCopy, (err) => {
                        if (err) {
                            return console.log(err);
                        }
                        fs.readdir(pathFiles, (err, files) => {
                            if (err)
                                console.log(err);
                            else {
                                files.forEach(file => {
                                    fs.copyFile(path.join(pathFiles,file),path.join(pathFilesForCopy,file),(err)=>{
                                        if (err) {
                                            console.log(err);
                                        }
                                    })
                                })
                            }
                        })
                    });
                } else {
                    throw new Error(errorMsg);
                }
            })
        }
    });} catch (e){
        console.log(e)
    }
};

copy();