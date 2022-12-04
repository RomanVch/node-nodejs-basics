import child_process from 'child_process';

const pathFile = './src/cp/files/script.js';

const spawnChildProcess = async (args) => {
    const child = child_process.fork(pathFile, [...args]);
    child.send("hello")
};

console.log(process.argv)
spawnChildProcess(process.argv);