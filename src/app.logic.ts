import fs from "fs";
import { yarg } from "../plugins/yargs.plugin";

const {b:numBase, l:limit, s:showTable} = yarg;


let multiplication = (num: number):string =>  {
    let msgMultiplos: string = `
    ==============================
        Tabla del ${numBase}
    ==============================\n\t`;
   if(showTable){
    for (let i=1; i<=limit;i++){
        msgMultiplos += `${num} x ${i} = ${num * i} \n\t`;
    }
    return msgMultiplos;
   }
    
    return 'No show option was activated';
}
const message: string =  multiplication(numBase);
const outputPath = "outputs";

fs.mkdirSync(outputPath, {recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${numBase}.txt`, message);

console.log(multiplication(numBase));
