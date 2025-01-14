/**
 * 说明: 加密标准的JavaScript库
 * CryptoJS的积极开发已经停止。此库不再维护。
 * 如今，NodeJS和现代浏览器都有一个原生的Crypto模块。最新版本的CryptoJS已经使用本机Crypto模块生成随机数，因为Math.random（）对加密不安全。
 * CryptoJS的进一步开发将导致它只能作为原生Crypto的包装器。因此，开发和维护已经停止，是时候使用原生加密模块了
 * 链接: https://www.npmjs.com/package/crypto-js#discontinued
 */
var CryptoJS = require("crypto-js");

// 加密
function encrypt(key, iv, data) {
  if (typeof data === "object") {
    // 如果传入的data是json对象，先转义为json字符串
    try {
      data = JSON.stringify(data);
    } catch (error) {
      console.log("error:", error);
    }
  }
  // 统一将传入的字符串转成UTF8编码
  const src = CryptoJS.enc.Utf8.parse(data); // 需要加密的数据
  const keyHex = CryptoJS.enc.Utf8.parse(key); // 秘钥,将 key 转为 128bit 格式
  const encrypted = CryptoJS.AES.encrypt(src, keyHex, {
    iv: CryptoJS.enc.Utf8.parse(iv), // 偏移量,将 iv 转为 128bit 格式
    mode: CryptoJS.mode.CBC, // 加密模式
    padding: CryptoJS.pad.Pkcs7,
  });
  console.log("encrypted.ciphertext:", encrypted.ciphertext.toString());
  return encrypted.ciphertext.toString();
  // return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

// 解密
function decrypt(key, iv, encryptedVal) {
  // const encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedVal); // 把密文由 128 bit 转为十六进制
  // const src = CryptoJS.enc.Base64.stringify(encryptedVal); // 再转为 Base64 编码的字符串
  // const src = CryptoJS.enc.Base64.parse(encryptedVal);
  // const src = CryptoJS.enc.Utf8.parse(encryptedVal);
  const keyHex = CryptoJS.enc.Utf8.parse(key); // 秘钥
  const src = CryptoJS.enc.Utf8.parse(CryptoJS.enc.Base64.parse(encryptedVal));
  console.log("src:", src);
  let bytes = CryptoJS.AES.decrypt(encryptedVal, keyHex, {
    iv: CryptoJS.enc.Utf8.parse(iv), // 偏移量,将 iv 转为 128bit 格式
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  console.log("bytes:", bytes);
  return bytes.toString(CryptoJS.enc.Utf8);
}

const key = "l7A6ZoCIREzMlKK63RSiTes2JWPXloFB";
const iv = "0000000000000000";
// const data = "1234567890";
// const data = "1234567890";

// const result = encrypt(key, iv, data);
// console.log("result:", result);

const result2 = decrypt(key, iv, "NPoWsXbeaol1sKh+cwc1YQ==");
console.log("result2:", result2);
