import fs from "fs"

const path = 'src/fs/files/fresh.txt';
const text = "I am fresh and young";
const errorMsg = "FS operation failed";
export const create = async () => {
    try{
        fs.writeFile(path, text,{ flag : 'wx' }, (err) => {
            if (err && err.code === 'EEXIST') {
                throw new Error(errorMsg);
                return;
            }
        })} catch (e){
        console.error(e)
    };
};

await create();