/**
 * 说明：一个用于在 JavaScript 中进行 Base64 编码和解码的轻量级库。
 * 链接：https://www.npmjs.com/package/js-base64
 */
import { toUint8Array } from 'js-base64';
import { gunzip } from 'fflate';

console.log(1111);

/**
 * 解压数据
 * @param {*} data
 * @returns
 */
async function decompressData(data) {
  return new Promise((resolve, reject) => {
    gunzip(data, (err, decompressedData) => {
      if (err) {
        reject(err);
      } else {
        resolve(decompressedData);
      }
    });
  });
}

async function tran(str) {
  const str =
    'H4sIAAAAAAAAAE1Ta2+bMBT9KxPSvrWSHzzzrUrahmzrmqbdo2NCxjbBIzHMmCTt1P8+2yQ0CGHr3nOv7zk+/PL+ZV6/y7wJusg8RjQx28wEs8yrBON2nYALu3QNrbnOBXMx+9kevs4xDNuoX0w1VH/X8+LGxh1cv7R8RC4aIe36ZpPetlvnXdMryt1hreKlOADocu1pFloRKfnGIWiVN42/Wj9XKwfquGRc2VFsdic6ofMdjEOIAxiGAQAIAN+PwRGsdoLy3A1k8adAIzdCcocpepcZRjAqGLTYDmgEkH8J4SWKP0A8wckEY4eijdT8oN/lUs2G55JsB9bIidAqsSNU8O5die09fnwQ3++XMEqK1Xw5VbG4RbG8C6YxW/1omn2hH1Py9Hq9fJVF0t2l9eJPfVO1V1dJzZ7TT+mX2c/++fob5utIf05e9pun/Uc8M++oPeOOYKeJ7oejoYuTngku6TChVj130VrQOt8SVY9DgiJmJIkDGqE4iRGKfDz2NhdkYcFAUJrakbP99GGAURThZCxw7c9cU0YABygMwpAFScRRxBJAQmT2jNGCF2PhWjV9m0qhZ9aWttzpLLpU3tqUC5Vk0w00ur3QxihnpMHbuRqjIY9a7ExXNU41niq6vLDOY8cWw2VvjG7DXVdBXqhmb0w0evnoQ7v1EY/NY+hEZQkoQRzwkgFGAlqGmJeuhrTtqaaEPmcQJObX8H7/Bz6Hoz2NAwAA';
  const decodeContent = toUint8Array(str);
  console.log('decodeContent:', decodeContent);
  try {
    // 当前只支持gzip压缩
    const u8sData = await decompressData(decodeContent); // gunzip 解压缩，必须是b64_2解码数据,不是则说明服务端数据处理有问题
    let originalContentStr = new TextDecoder().decode(u8sData); // 将Uint8Array转回字符串
    console.log(JSON.parse(originalContentStr));
  } catch (ex) {
    console.error('gunzip data error:', ex);
  }
}

window.tran = tran;
