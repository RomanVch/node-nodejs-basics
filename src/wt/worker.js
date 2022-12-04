import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
 try {
    // if(Math.random() > 0.5){ throw new Error()} \\ошибочки
      let result = 0
      parentPort.on('message',msg =>{
          result =  nthFibonacci(msg)
          parentPort.postMessage(result)
      })
  } catch (e){
      parentPort.postMessage("error")
  }
}

sendResult();
