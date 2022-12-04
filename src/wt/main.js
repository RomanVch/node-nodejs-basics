import os from 'os';
import { Worker } from 'worker_threads';

const pathFile = './src/wt/worker.js';

const performCalculations = async () => {
    const systemCpuCores = os.cpus();

  const getCoreResult = (data) => ({status:Number.isInteger(data)?'resolved':'error',data:Number.isInteger(data)?data:null});
  Promise.all(
      systemCpuCores.map((item,index)=>{
          return new Promise(resolve =>{
              const worker = new Worker(pathFile)
              worker.postMessage(10 + index)
              worker.on('message',msg =>{
                  resolve(getCoreResult(msg))
              })
          })
      })
  ).then((res)=>{
      console.log(res)
  })
};

await performCalculations();