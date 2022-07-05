const fs = require("fs");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
var cp = require("child_process");
const opn = require('opn');


dotenv.config();






const data=fs.readFileSync('License_Key.txt','utf-8');

const decrypt = (data) => {
    return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
  };
let dk = decrypt(data);

if(dk==process.env.KEY){
    console.info("You can enter the application");
    opn("LK_Verifier.txt");
    } 
else{
    console.info("License Key Invalid");
}
