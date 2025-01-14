/**
 * 说明: fflate（fast-flate的缩写）是目前最快、最小、最通用的纯JavaScript压缩和解压缩库，
 * 在性能基准测试中轻松击败了pako、micro-inbule和UZIP.js，同时其轻量级提高了数倍。
 * 它的压缩比甚至比原始的ZlibC库都要好。它包括对DEFLATE、GZIP和Zlib数据的支持。
 * fflate压缩的数据可以通过其他工具进行解压缩，反之亦然。
 * 链接: https://www.npmjs.com/package/fflate
 */
import {gzipSync, gunzipSync} from "fflate";

// 压缩
const uncompressedData = new TextEncoder().encode(
  "大家好范德萨范德萨发 范德萨发生大家好范德萨范德萨发 范德萨发生的大家好范德萨范德萨发 范德萨发生的大家好范德萨范德萨发 范德萨发生的大家好范德萨范德萨发 范德萨发生的的,D"
);
console.log("uncompressedData:", uncompressedData);
const compressedData = gzipSync(uncompressedData);
console.log("Compressed data:", compressedData);

// 解压缩
const originalData = gunzipSync(compressedData);
console.log("Original data:", originalData);

// 将Uint8Array转回字符串
const originalText = new TextDecoder().decode(originalData);
console.log("Original text:", originalText);
