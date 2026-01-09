"use strict";
const common_vendor = require("../common/vendor.js");
const statusHeight = common_vendor.index.getSystemInfoSync();
const getStatusHeightValue = () => statusHeight.statusBarHeight || 15;
const getMenuButtonValue = () => {
  const {
    top,
    height
  } = common_vendor.index.getMenuButtonBoundingClientRect();
  return height + (top - getStatusHeightValue()) * 2;
};
const getNavbar = () => getStatusHeightValue() + getMenuButtonValue();
exports.getMenuButtonValue = getMenuButtonValue;
exports.getNavbar = getNavbar;
exports.getStatusHeightValue = getStatusHeightValue;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/system.js.map
