"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  gripImag();
}
const gripImag = () => "../../components/gripImag/gripImag.js";
const _sfc_main = {
  __name: "leave",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(15, (value, k0, i0) => {
          return {
            a: "70c09db4-0-" + i0
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-70c09db4"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/leave/leave.js.map
