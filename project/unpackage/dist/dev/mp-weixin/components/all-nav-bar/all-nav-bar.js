"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.getStatusHeightValue)() + "px",
        b: common_vendor.p({
          type: "search",
          size: "20",
          color: "#999"
        }),
        c: common_vendor.unref(utils_system.getMenuButtonValue)() + "px",
        d: common_vendor.unref(utils_system.getNavbar)() + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1760e8ad"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/all-nav-bar/all-nav-bar.js.map
