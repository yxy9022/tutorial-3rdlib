/**
 * 说明：JavaScript库，用于不可变的颜色转换和操作，支持CSS颜色字符串。
 * 链接：https://www.npmjs.com/package/color
 */
const Color = require('color');

function generateThemeColors(primaryColorHex) {
  const primaryColor = Color(primaryColorHex);

  return {
    lighten8: primaryColor.lighten(0.8).hex(),
    lighten7: primaryColor.lighten(0.7).hex(),
    lighten6: primaryColor.lighten(0.6).hex(),
    lighten5: primaryColor.lighten(0.5).hex(),
    lighten4: primaryColor.lighten(0.4).hex(),
    lighten3: primaryColor.lighten(0.3).hex(),
    lighten2: primaryColor.lighten(0.2).hex(),
    lighten1: primaryColor.lighten(0.1).hex(),
    primary: primaryColor.hex(),
    darken1: primaryColor.darken(0.1).hex(),
    darken2: primaryColor.darken(0.2).hex(),
    darken3: primaryColor.darken(0.3).hex(),
    darken4: primaryColor.darken(0.4).hex(),
    darken5: primaryColor.darken(0.5).hex()
  };
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
const primaryColor = '#409EFF'; // 主色
// const themeColors = generateThemeColors(primaryColor);
const color = Color(primaryColor);
console.log(color.mix(Color('#ffffff'), 0.1).hex().toLocaleLowerCase());
console.log(color.mix(Color('#ffffff'), 0.2).hex().toLocaleLowerCase());
console.log(color.mix(Color('#ffffff'), 0.3).hex().toLocaleLowerCase());
console.log(color.mix(Color('#ffffff'), 0.4).hex().toLocaleLowerCase());
console.log(color.mix(Color('#ffffff'), 0.5).hex().toLocaleLowerCase());
console.log(color.mix(Color('#ffffff'), 0.6).hex().toLocaleLowerCase());
console.log(color.mix(Color('#ffffff'), 0.7).hex().toLocaleLowerCase());
console.log(color.mix(Color('#ffffff'), 0.8).hex().toLocaleLowerCase());
console.log(color.mix(Color('#ffffff'), 0.9).hex().toLocaleLowerCase());
// 输出:
// {
//     primary: "#409EFF",
//     lighten1: "#69AFF2",
//     lighten2: "#93C0F5",
//     lighten3: "#BDD2F7",
//     lighten4: "#E6E4FA",
//     darken1: "#3788E0",
//     darken2: "#2F70C1"
// }
// const htmlArr = [];
// for (const k in themeColors) {
//   htmlArr.push(`<div style="width:100px;height:40px;background-color:${themeColors[k]}">${themeColors[k]}</div>`);
// }
// console.log(htmlArr.join(''));
