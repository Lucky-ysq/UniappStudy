"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Math) {
  (allNavBar + gripImag)();
}
const gripImag = () => "../../components/gripImag/gripImag.js";
const allNavBar = () => "../../components/all-nav-bar/all-nav-bar.js";
const _sfc_main = {
  __name: "leave",
  setup(__props) {
    common_vendor.onShareAppMessage(() => {
      return {
        title: "分享给朋友",
        path: "/pages/leave/leave"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "分享到朋友圈",
        imageUrl: ""
      };
    });
    const classify = common_vendor.ref([]);
    let getClassifyData = async () => {
      let value = await api_apis.apiGetClassifyData({
        pageSize: 20
      });
      common_vendor.index.__f__("log", "at pages/leave/leave.vue:47", value);
      classify.value = value.data;
    };
    getClassifyData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classify.value, (value, k0, i0) => {
          return {
            a: value._id,
            b: "70c09db4-1-" + i0,
            c: common_vendor.p({
              item: value
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-70c09db4"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/leave/leave.js.map
