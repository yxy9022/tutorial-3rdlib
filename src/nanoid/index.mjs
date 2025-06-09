/**
 * 说明：一个小巧、安全、URL友好、唯一的 JavaScript 字符串ID生成器。
 * 小巧. 118字节 (经过压缩和Brotli处理)。没有依赖。Size Limit 控制大小。
 * 安全. 它使用硬件随机生成器。可在集群中使用。
   紧凑. 它使用比 UUID（A-Za-z0-9_-）更大的字母表。因此，ID 大小从36个符号减少到21个符号。
   可移植. Nano ID 已被移植到 20种编程语言。
 * 链接：https://github.com/ai/nanoid/blob/HEAD/README.zh-CN.md
 */
import { nanoid } from 'nanoid';
const id = nanoid(); //=> "ZWwMnC-dP9x_WZxpUjRZg"

console.log(id);
