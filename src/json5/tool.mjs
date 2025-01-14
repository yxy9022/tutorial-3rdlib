import fs from "fs/promises";
import JSON5 from "json5";

export const loadJSON5 = async (filePath) => {
  // 读取json5文件数据
  const data = await fs.readFile(filePath, "utf8");
  return JSON5.parse(data);
};
