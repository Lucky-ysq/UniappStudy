"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (allNavBar + _easycom_uni_icons + _easycom_uni_load_more)();
}
const allNavBar = () => "../../components/all-nav-bar/all-nav-bar.js";
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const Data = common_vendor.ref(null);
    const getUserPageData = async () => {
      let res = await api_apis.apiGetUserPageData();
      Data.value = res.data;
    };
    getUserPageData();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return common_vendor.e({
        a: Data.value
      }, Data.value ? {
        b: common_assets._imports_0,
        c: common_vendor.t((_a = Data.value) == null ? void 0 : _a.IP),
        d: common_vendor.t(((_b = Data.value) == null ? void 0 : _b.address.city) || ((_c = Data.value) == null ? void 0 : _c.address.country) || ((_d = Data.value) == null ? void 0 : _d.address.province)),
        e: common_vendor.p({
          type: "contact",
          size: "20"
        }),
        f: common_vendor.t((_e = Data.value) == null ? void 0 : _e.downloadSize),
        g: common_vendor.p({
          type: "right",
          size: "16"
        }),
        h: common_vendor.p({
          type: "contact",
          size: "20"
        }),
        i: common_vendor.t((_f = Data.value) == null ? void 0 : _f.scoreSize),
        j: common_vendor.p({
          type: "right",
          size: "16"
        }),
        k: common_vendor.p({
          type: "chatboxes-filled",
          size: "20"
        }),
        l: common_vendor.p({
          type: "right",
          size: "16"
        }),
        m: common_vendor.p({
          type: "contact",
          size: "20"
        }),
        n: common_vendor.p({
          type: "right",
          size: "16"
        }),
        o: common_vendor.p({
          type: "contact",
          size: "20"
        }),
        p: common_vendor.p({
          type: "right",
          size: "16"
        })
      } : {
        q: common_vendor.p({
          status: "loading"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
