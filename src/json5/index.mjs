/**
 JSON5 是一个基于 JSON（JavaScript Object Notation）格式的扩展
 JSON5 扩展了 JSON 的语法，使其支持以下特性：
  1. 注释：可以使用单行注释（//）和多行注释（\/* *\/）
  2. 宽松的语法：支持不带引号的键、尾随逗号等。
  3. 多行字符串：可以使用反引号（`）定义多行字符串。
  4. 十六进制数：可以用 0x 前缀表示十六进制数。
  5. 其他：支持单引号字符串、允许行末逗号等。

  在前端开发中，还有其它方法获取json5文件数据，例如：
  1. 通过构建工具配置（例如 Webpack），安装 json5-loader
  2，通过 TypeScript 配置， 创建 json5.d.ts 声明
*/
import { loadJSON5 } from "./tool.mjs";
import { __src } from "../../base.mjs";

// 测试
(async () => {
  const filePath = `${__src}/json5/file.json5`;
  const json = await loadJSON5(filePath);

  console.log(JSON.stringify(json, null, 2));
})();
