import { decode, toUint8Array } from "js-base64";
import { gunzip } from "fflate";
import { __src } from "../../base.mjs";
import { loadJSON5 } from "../json5/tool.mjs";

async function parseData(msg) {
  if (typeof msg === "string") {
    msg = JSON.parse(msg);
  }

  // 有 comp_alg 字段则按照新消息格式处理，没有的按照老消息格式处理；新消息有可能有多条压缩的，老消息都是单条的
  const compAlg = msg?.comp_alg; // 压缩算法，n:无压缩 gz:gzip压缩
  // 老消息直接返回
  if (!compAlg) return msg;

  // 以下是新消息格式处理
  const encoding = msg.encoding; // 内容编码格式，text-原始文本 b64-base64编码
  let tempContent;
  if (encoding === "b64") {
    tempContent = decode(msg.content); // base64常规解码
  } else if (encoding === "b64_2") {
    tempContent = toUint8Array(msg.content); // base64二进制编码解码
  } else {
    tempContent = msg.content;
  }

  let result;
  if (compAlg === "gz") {
    // 当前只支持gzip压缩
    const u8sData = await new Promise((resolve, reject) => {
      gunzip(tempContent, (err, decompressedData) => {
        if (err) {
          reject(err);
        } else {
          resolve(decompressedData);
        }
      });
    }); // gunzipSync解压缩，必须是b64_2解码数据,不是则说明服务端数据处理有问题
    const originalContentStr = new TextDecoder().decode(u8sData); // 将Uint8Array转回字符串
    const originalContent = JSON.parse(originalContentStr); // 转json对象
    result = originalContent;
  } else {
    result =
      typeof tempContent === "string" ? JSON.parse(tempContent) : tempContent;
  }
  return result;
}

async function run(start = 0, end = 100) {
  const filePath = `${__src}/fflate/sources.json5`;
  const sources = await loadJSON5(filePath);
  // console.log(sources);
  if (end > sources.length) {
    end = sources.length;
  }
  let rlt;
  for (let i = start; i < end; i++) {
    const item = sources[i];
    if (item.isChatChannel) {
      const mess = decodeURIComponent(item.message.text);
      // console.log("mess:", mess);
      rlt = await parseData(mess);
    } else {
      rlt = await parseData(item.message);
    }
    console.log(`---------${item.description}-----------------`);
    console.log(JSON.stringify(rlt, null, 2));
  }
}

run(3);
