const parseEnv = () => {
    try {    Object.keys(process.env).forEach((key,index)=>{
        console.log(`RSS${index+1}_${key}=${process.env[key]};`)
    });
    } catch (e){
        console.log(e)
    }
};

parseEnv();