// ========== 元组形式返回======================
const safeParseForTuple = require('safe-json-parse/tuple');

// 正常转
{
  const [err, json] = safeParseForTuple(null);
  console.log('转换null：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple('null');
  console.log('转换"null"：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple(true);
  console.log('转换true：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple(false);
  console.log('转换false：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple('true');
  console.log('转换"true"：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple('false');
  console.log('转换"false"：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple(123);
  console.log('转换123：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple(123.45);
  console.log('转换123.45：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple('123');
  console.log('转换"123"：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple('123.45');
  console.log('转换"123.45"：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple('{}');
  console.log('转换"{}"：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple('[]');
  console.log('转换"[]"：', '=>', err ? err.message : json);
}

// 转换报错
{
  const [err, json] = safeParseForTuple(undefined);
  console.log('转换undefined：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple(Infinity);
  console.log('转换Infinity：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple(NaN);
  console.log('转换NaN：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple(Symbol());
  console.log('转换Symbol()：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple('');
  console.log('转换""：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple('abc');
  console.log('转换"abc"：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple({});
  console.log('转换{}：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple([]);
  console.log('转换[]：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple('undefined');
  console.log('转换"undefined"：', '=>', err ? err.message : json);
}

{
  const [err, json] = safeParseForTuple('NULL');
  console.log('转换"NULL"：', '=>', err ? err.message : json);
}

// 不考虑错误情况
{
  const tuple = safeParseForTuple('{}');
  console.log('不考虑错误情况转换"{}"：', '=>', tuple[1]);
}
