/**
 * 说明: compressing 是一个功能强大且灵活的解压缩库，提供了对多种压缩格式（如 gzip、zip、tar）的支持，
 * 适用于 Node.js 环境，提供了丰富的文件和流操作支持，适合服务器端或桌面应用。
 * 依赖一些其他的库和工具来实现其功能。
 * 提供了直接操作文件系统的简便方法，非常适合处理文件压缩解压任务。
 * 链接: https://www.npmjs.com/package/compressing
 */
var compressing = require("compressing");
var path = require("path");

const ASSETS_DIR = path.join(__dirname, "/assets");
const DIST_DIR = path.join(__dirname, "/dist");

//压缩
async function zip() {
  const input = path.join(ASSETS_DIR, "/test01");
  const output = path.join(DIST_DIR, "/test01.zip");
  try {
    await compressing.zip.compressDir(input, output);
    console.log("生成test01.zip压缩包成功");
  } catch (err) {
    console.error("生成test01.zip压缩包失败", err);
  }
}

//解压
async function unzip() {
  const input = path.join(ASSETS_DIR, "/test02.zip");
  try {
    await compressing.zip.uncompress(input, DIST_DIR);
    console.log("解压test02.zip 文件成功");
  } catch (err) {
    console.log("解压test02.zip 文件失败", err);
  }
}

zip();

unzip();
