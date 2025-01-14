/**
 * 说明：SparkMD5是md5算法的快速md5实现。该脚本基于JKM md5库，这是目前最快的算法。这最适合浏览器使用，因为nodejs版本可能更快。
 * 链接：https://www.npmjs.com/package/spark-md5
 */
import SparkMD5 from 'spark-md5';

const spark = new SparkMD5();
spark.append('Hi');
spark.append(' there');
var hexHash1 = spark.end(); // hex hash
console.log(hexHash1);

var hexHash2 = SparkMD5.hash('Hi there');
console.log(hexHash2);

console.log('hexHash1===hexHash2:', hexHash1 === hexHash2);

/**
 * 应用场景
 * 自定义图片上传处理, 在上传之前就可以生成hash，这样在服务端优先就可以判断是否存在重复上传
 */
// function imagesUploadHandler(blobInfo, success, failure) {
//   var hexHash = SparkMD5.hash(blobInfo.base64());
//   console.log('hexHash:', hexHash);
//   let formData = new FormData();
//   formData.append('filehash', hexHash);
//   formData.append('file', blobInfo.blob(), blobInfo.filename());
//   /* prettier-ignore */
//   uploadApi.uploadImg(formData).then(res => {
//     if (res?.data?.url) {
//       success(res.data.url);
//     } else {
//       failure('上传失败');
//     }
//   })
//   .catch(error => {
//     failure(error);
//   });
// }
