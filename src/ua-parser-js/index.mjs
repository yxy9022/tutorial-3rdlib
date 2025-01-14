/**
 * 链接：https://www.npmjs.com/package/ua-parser-js
 * 说明: JavaScript库，用于从User-Agent数据中检测 Browser, Engine, OS, CPU, and Device type/model ，占用空间相对较小（压缩约17KB，压缩约6KB），可用于浏览器（客户端）或node.js（服务器端）。
 */
import UAParser from 'ua-parser-js';

let parser = new UAParser('user-agent'); // you need to pass the user-agent for nodejs
console.log(parser); // {}
let parserResults = parser.getResult();
console.log(parserResults);
/** {
  "ua": "",
  "browser": {},
  "engine": {},
  "os": {},
  "device": {},
  "cpu": {}
} */
