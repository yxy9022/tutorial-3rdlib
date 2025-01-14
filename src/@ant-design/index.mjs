/**
 * 说明: 色板生成，vhall-ui库色彩生成使用的就是该组件
 * 链接:https://www.npmjs.com/package/@ant-design/colors
       https://ui.vhall.com/#/zh-CN/component/color
 */
import { generate } from '@ant-design/colors';

export const tintColor = c => {
  return generate(c);
};

const primaryColor = '#fb2626'; // 主色
const themeColors = tintColor(primaryColor);
const htmlArr = [
  `<style>
    .color-block{ display:inline-block;width:100px;height:40px; }
</style>\r\n`
];
htmlArr.push('<div>\r\n');
for (let i = 0; i < themeColors.length; i++) {
  htmlArr.push(
    `    <div><div class="color-block" style="background-color:${themeColors[i]}">${themeColors[i]}</div> B-${
      i + 1
    }</div>\r\n`
  );
}
htmlArr.push('</div>');
console.log(htmlArr.join(''));
