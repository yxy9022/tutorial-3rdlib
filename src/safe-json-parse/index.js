/**
 * 链接: https://www.npmjs.com/package/safe-json-parse
 */
// ========== 回调函数形式返回======================
var safeParse = require('safe-json-parse/callback');

// 正常转

safeParse(null, function (err, json) {
  console.log('转换null：', '=>', err ? err.message : json);
});

safeParse('null', function (err, json) {
  console.log('转换"null"：', '=>', err ? err.message : json);
});

safeParse(true, function (err, json) {
  console.log('转换true：', '=>', err ? err.message : json);
});

safeParse(false, function (err, json) {
  console.log('转换false：', '=>', err ? err.message : json);
});

safeParse('true', function (err, json) {
  console.log('转换"true"：', '=>', err ? err.message : json);
});

safeParse('false', function (err, json) {
  console.log('转换"false"：', '=>', err ? err.message : json);
});

safeParse(123, function (err, json) {
  console.log('转换123：', '=>', err ? err.message : json);
});

safeParse(123.45, function (err, json) {
  console.log('转换123.45：', '=>', err ? err.message : json);
});

safeParse('123', function (err, json) {
  console.log('转换"123"：', '=>', err ? err.message : json);
});

safeParse('123.45', function (err, json) {
  console.log('转换"123.45"：', '=>', err ? err.message : json);
});

safeParse('{}', function (err, json) {
  console.log('转换"{}"：', '=>', err ? err.message : json);
});

safeParse('[]', function (err, json) {
  console.log('转换"[]"：', '=>', err ? err.message : json);
});

// 转换报错
safeParse(undefined, function (err, json) {
  console.error('转换undefined：', '=>', err ? err.message : json);
});

safeParse(Infinity, function (err, json) {
  console.error('转换Infinity：', '=>', err ? err.message : json);
});

safeParse(NaN, function (err, json) {
  console.error('转换NaN：', '=>', err ? err.message : json);
});

safeParse(Symbol(), function (err, json) {
  console.log('转换Symbol()：', '=>', err ? err.message : json);
});

safeParse({}, function (err, json) {
  console.error('转换{}：', '=>', err ? err.message : json);
});

safeParse([], function (err, json) {
  console.error('转换[]：', '=>', err ? err.message : json);
});

safeParse('', function (err, json) {
  console.error('转换""：', '=>', err ? err.message : json);
});

safeParse('abc', function (err) {
  console.error('转换"abc"：', '=>', err ? err.message : json);
});
