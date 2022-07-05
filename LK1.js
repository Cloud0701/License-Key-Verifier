const CryptoJS = require("crypto-js");

const encrypt = (text) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};
console.log(encrypt('license key'));