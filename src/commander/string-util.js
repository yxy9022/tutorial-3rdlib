/**
 * 说明: commander，基于node.js的命令行接口的完整解决方案。你可以使用Commander编写自己的命令行工具。
 * 链接: https://www.npmjs.com/package/appkey
 * 实现自定义命令参考：http://note.ipyro.cn/article/186
 */

// 编写命令行工具string-util
// node commander/string-util.js split --separator= abc
// node commander/string-util.js split --separator=/ a/b/c
const {Command} = require("commander");
const program = new Command();

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");
// console.log(program);
program
  .command("split")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();
