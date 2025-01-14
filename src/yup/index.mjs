/**
 * 说明：一个 JavaScript 对象模式验证库，常用于对复杂数据结构的验证。它允许开发者定义数据模式(schema)来验证 JavaScript 对象的形状和内容是否符合预期。在浏览器环境和 Node.js 环境中都能很好地运行。
 * 链接：https://www.npmjs.com/package/yup
 */
import { object, string, number, date } from 'yup';

let userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date())
});
async function run() {
  try {
    let user = await userSchema.validate({
      name: '小明',
      age: '12',
      email: 'abc@123.com',
      website: ''
    });
    console.log(user);
  } catch (ex) {
    console.error('---------校验不通过--------');
    console.error(ex);
  }
}

run();
