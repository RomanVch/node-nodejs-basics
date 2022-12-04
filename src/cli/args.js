const parseArgs = () => {
    try{}catch (e){
        console.log(e)}
        const arrArgs = []
    process.argv.forEach((item, index)=>{
        if(item.includes("--")){
            if(arrArgs.length === 0){
                arrArgs.push(`${item.replace('--','')} is ${process.argv[index + 1]}`)
            } else {
                arrArgs.push(` ${item.replace('--','')} is ${process.argv[index + 1]}`)
            }

        }
    })
    console.log(arrArgs+'')
};

parseArgs();