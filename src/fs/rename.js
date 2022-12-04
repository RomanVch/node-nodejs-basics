import fs from "fs"
import path from "path"

const pathFiles = 'src/fs/files/';
const errorMsg = "FS operation failed";

const rename = async () => {
    try{
        fs.access(pathFiles, fs.constants.F_OK, (err) => {
            if(err){
                throw new Error(errorMsg);
            }else{
                fs.rename(path.join(pathFiles,"wrongFilename.txt"),path.join(pathFiles,"wrongFilename.txt"),(err)=>{
                    if(err){
                        throw new Error(errorMsg);
                    }
                })
            }});
    } catch (e){
        console.log(e);
    }

};

await rename();