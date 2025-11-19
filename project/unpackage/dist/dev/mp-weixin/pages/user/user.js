"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (allNavBar + _easycom_uni_icons)();
}
const allNavBar = () => "../../components/all-nav-bar/all-nav-bar.js";
const _sfc_main = {
  __name: "user",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.p({
          type: "contact",
          size: "20"
        }),
        c: common_vendor.p({
          type: "right",
          size: "16"
        }),
        d: common_vendor.p({
          type: "contact",
          size: "20"
        }),
        e: common_vendor.p({
          type: "right",
          size: "16"
        }),
        f: common_vendor.p({
          type: "chatboxes-filled",
          size: "20"
        }),
        g: common_vendor.p({
          type: "right",
          size: "16"
        }),
        h: common_vendor.p({
          type: "contact",
          size: "20"
        }),
        i: common_vendor.p({
          type: "right",
          size: "16"
        }),
        j: common_vendor.p({
          type: "contact",
          size: "20"
        }),
        k: common_vendor.p({
          type: "right",
          size: "16"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
