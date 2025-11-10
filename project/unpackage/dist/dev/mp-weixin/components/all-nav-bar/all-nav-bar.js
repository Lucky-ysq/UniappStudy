"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "all-nav-bar",
  setup(__props) {
    let statusHeight = common_vendor.index.getSystemInfoSync();
    let statusHeightValue = common_vendor.ref(statusHeight.statusBarHeight);
    let { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    let menuButtonValue = common_vendor.ref(height + (top - statusHeightValue.value) * 2);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(statusHeightValue) + "px",
        b: common_vendor.p({
          type: "search",
          size: "20",
          color: "#999"
        }),
        c: common_vendor.unref(menuButtonValue) + "px",
        d: common_vendor.unref(statusHeightValue) + common_vendor.unref(menuButtonValue) + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1760e8ad"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/all-nav-bar/all-nav-bar.js.map
