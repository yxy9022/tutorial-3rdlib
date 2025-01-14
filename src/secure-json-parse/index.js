/**
 * 链接: https://www.npmjs.com/package/secure-json-parse
 */
const secureJsonParse = require('secure-json-parse');

// 一个标准的 JSON 字符串
const jsonString = '{ "name": "John", "age": 30 }';

try {
  const result = secureJsonParse.parse(jsonString);
  console.log('Parsed JSON:', result); // { name: 'John', age: 30 }
} catch (err) {
  console.error('Failed to parse JSON:', err.message);
}
