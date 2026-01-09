"use strict";
const common_vendor = require("../common/vendor.js");
function formatRelativeTime(timestamp) {
  const targetTime = new Date(timestamp).getTime();
  const now = Date.now();
  if (isNaN(targetTime)) {
    common_vendor.index.__f__("error", "at utils/newDate.js:13", "无效的时间戳");
    return null;
  }
  const diff = now - targetTime;
  if (diff < 0)
    return "1分钟内";
  const minute = 60 * 1e3;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  if (diff < minute) {
    return "1分钟内";
  } else if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return `${minutes}分钟前`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours}小时前`;
  } else if (diff < month) {
    const days = Math.floor(diff / day);
    return `${days}天前`;
  } else if (diff < 12 * month) {
    const months = Math.floor(diff / month);
    return `${months}个月前`;
  } else {
    return null;
  }
}
exports.formatRelativeTime = formatRelativeTime;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/newDate.js.map
