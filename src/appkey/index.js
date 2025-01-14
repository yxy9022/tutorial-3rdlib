/**
 * 说明: appkey 一个用于生成appkey和secret的库
 * 对应这种涉及到敏感信息的使用，建议自己写方法生成appkey和secret
 * 链接: https://www.npmjs.com/package/appkey
 */
const gen = require('appkey');
const { key, secret } = gen();
console.log(`key=${key}`, `secret=${secret}`);
