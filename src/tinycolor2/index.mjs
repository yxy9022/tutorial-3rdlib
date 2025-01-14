/**
 * 说明：一个用于JavaScript中颜色操作和转换的小型快速库。它允许多种形式的输入，同时提供颜色转换和其他颜色实用程序功能。它没有依赖关系。
 * 链接：https://www.npmjs.com/package/tinycolor2
 */
import tinycolor from 'tinycolor2';

function generateThemeColors(primaryColor) {
  const colors = {
    lighten5: tinycolor(primaryColor).lighten(50).toString(),
    lighten4: tinycolor(primaryColor).lighten(40).toString(),
    lighten3: tinycolor(primaryColor).lighten(30).toString(),
    lighten2: tinycolor(primaryColor).lighten(20).toString(),
    lighten1: tinycolor(primaryColor).lighten(10).toString(),
    primary: primaryColor,
    darken1: tinycolor(primaryColor).darken(10).toString(),
    darken2: tinycolor(primaryColor).darken(20).toString(),
    darken3: tinycolor(primaryColor).darken(30).toString(),
    darken4: tinycolor(primaryColor).darken(40).toString()
  };

  return colors;
}
// $-primary-1: #e6f7ff !default;
// $-primary-2: #ade1ff !default;
// $-primary-3: #85ceff !default;
// $-primary-4: #5cb8ff !default;
// $-primary-5: #33a0ff !default;

// $-primary-6: #0a7ff5 !default;------------

// $-primary-7: #0060cf !default;
// $-primary-8: #0049a8 !default;
// $-primary-9: #003482 !default;
// $-primary-10: #00225c !default;

// 使用示例
const primaryColor = '#0a7ff5'; // 主色
const themeColors = generateThemeColors(primaryColor);
// console.log(themeColors);
// const htmlArr = [];
// for (const k in themeColors) {
//   htmlArr.push(`<div style="width:100px;height:40px;background-color:${themeColors[k]}">${themeColors[k]}</div>`);
// }
// console.log(htmlArr.join(''));

console.log(tinycolor(primaryColor).lighten(5).toString());
