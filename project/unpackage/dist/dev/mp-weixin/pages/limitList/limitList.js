"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "limitList",
  setup(__props) {
    common_vendor.onShareAppMessage(() => {
      return {
        title: "分享给朋友" + limitLocalName.value,
        path: "/pages/limitList/limitList?id=" + limitLocalData.classid + "&name=" + limitLocalName.value
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "分享到朋友圈",
        imageUrl: ""
      };
    });
    const limitData = common_vendor.ref([]);
    const limitLocalData = {
      pageNum: 1,
      pageSize: 12
    };
    const requireBool = common_vendor.ref(false);
    const limitLocalName = common_vendor.ref(null);
    common_vendor.onLoad((e) => {
      let {
        id,
        name,
        type
      } = e;
      if (type)
        limitLocalData.type = type;
      if (id)
        limitLocalData.classid = id;
      limitLocalName.value = name;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getLimitData();
    });
    common_vendor.onReachBottom(() => {
      if (requireBool.value)
        return;
      limitLocalData.pageNum++;
      getLimitData();
    });
    const getLimitData = async () => {
      let res;
      if (limitLocalData.classid)
        res = await api_apis.apiGetLimitData(limitLocalData);
      if (limitLocalData.type)
        res = await api_apis.apiGetUserLimitData(limitLocalData);
      limitData.value = [...limitData.value, ...res.data];
      if (limitLocalData.pageSize > res.data)
        requireBool.value = true;
      common_vendor.index.setStorageSync("limitData", limitData.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !limitData.value.length
      }, !limitData.value.length ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(limitData.value, (value, k0, i0) => {
          return {
            a: value.smallPicurl,
            b: "/pages/detail/detail?id=" + value._id,
            c: value._id
          };
        }),
        d: limitData.value.length
      }, limitData.value.length ? {
        e: common_vendor.p({
          status: requireBool.value ? "noMore" : "loading"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2324a4de"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/limitList/limitList.js.map
