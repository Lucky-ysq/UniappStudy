"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  (allNavBar + _easycom_uni_icons + _easycom_uni_dateformat + Titile + gripIamge)();
}
const Titile = () => "../../components/titile/titile.js";
const gripIamge = () => "../../components/gripImag/gripImag.js";
const allNavBar = () => "../../components/all-nav-bar/all-nav-bar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onShareAppMessage(() => {
      return {
        title: "分享给朋友",
        path: "/pages/index/index"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "分享到朋友圈",
        imageUrl: ""
      };
    });
    const bannerData = common_vendor.ref([]);
    const titleData = common_vendor.ref([]);
    const randomData = common_vendor.ref([]);
    const classify = common_vendor.ref([]);
    const goDetail = (id) => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:127", id);
      common_vendor.index.setStorageSync("limitData", randomData.value);
      common_vendor.index.navigateTo({
        url: "../../pages/detail/detail?id=" + id
      });
    };
    let getBannerData = async () => {
      let value = await api_apis.apiGetBannerData();
      bannerData.value = value.data;
      common_vendor.index.__f__("log", "at pages/index/index.vue:138", value.data);
    };
    let getTitleData = async () => {
      let value = await api_apis.apiGetTitleData({
        select: true
      });
      titleData.value = value.data;
    };
    let getRandomData = async () => {
      let value = await api_apis.apiGetRandomData();
      randomData.value = value.data;
    };
    let getClassifyData = async () => {
      let value = await api_apis.apiGetClassifyData({
        select: true
      });
      classify.value = value.data;
    };
    getBannerData();
    getRandomData();
    getTitleData();
    getClassifyData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(bannerData.value, (item, k0, i0) => {
          return common_vendor.e({
            a: item.target == "self"
          }, item.target == "self" ? {
            b: item.picurl,
            c: `/pages/limitList/limitList?${item.url}`
          } : {
            d: item.picurl,
            e: item.url,
            f: item.appid
          }, {
            g: item._id
          });
        }),
        b: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        c: common_vendor.f(titleData.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item._id
          };
        }),
        d: common_vendor.p({
          type: "right",
          size: "20"
        }),
        e: common_vendor.p({
          type: "calendar",
          size: "20"
        }),
        f: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "dd日"
        }),
        g: common_vendor.f(randomData.value, (value, k0, i0) => {
          return {
            a: value.smallPicurl,
            b: value._id,
            c: common_vendor.o(($event) => goDetail(value._id), value._id)
          };
        }),
        h: common_vendor.f(classify.value, (value, k0, i0) => {
          return {
            a: value._id,
            b: "1cf27b2a-7-" + i0,
            c: common_vendor.p({
              item: value
            })
          };
        }),
        i: common_vendor.p({
          isBox: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
