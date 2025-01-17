/**
 * 说明：一个可以提高开发者效率、提高原生 JS 方法性能的 JavaScript 第三方实用工具库。
 * 链接：https://lodash.com/
 */
const _ = require('lodash');

const fileds = [
  'name',
  'bookName',
  'responsibleEditor_ref',
  'chiefEditor_ref',
  'author_refs',
  'externalAuditExpert_refs',
  'firstAuditExpert_ref',
  'firstAuditExpertExt_ref',
  'secondAuditExpert_ref',
  'secondAuditExpertExt_ref',
  'thirdAuditExpert_ref',
  'thirdAuditExpertExt_ref',
  'proofreader_ref',
  'firstProofreader_ref',
  'firstProofreaderExt_refs',
  'secondProofreader_ref',
  'secondProofreaderExt_refs',
  'thirdProofreader_ref',
  'thirdProofreaderExt_refs',
  'coverDesigner_ref',
  'typesetDesigner_ref',
  'typesetter_ref',
  'typesetterExt_refs'
];
// 转换数组为对象，并给所有的key赋初值为1
console.log(_.zipObject(fileds, _.fill(Array(fileds.length), 1)));
