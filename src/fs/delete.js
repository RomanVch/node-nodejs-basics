import fs from "fs"
import path from "path"

const pathFiles = 'src/fs/files/';
const errorMsg = "FS operation failed";

const remove = async () => {
    try {
        fs.unlink(path.join(pathFiles,"fileToRemove.txt"),(err)=>{
            if (err) {
                console.log(errorMsg);
            }
        })
    } catch (e){
        console.log(e)
    }
};

await remove();