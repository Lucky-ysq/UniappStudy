"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const mask = common_vendor.ref(true);
    const maskChange = () => {
      mask.value = !mask.value;
    };
    const popupDetail = common_vendor.ref(null);
    const openPopupDetail = () => {
      popupDetail.value.open();
    };
    const closePopupDetail = () => {
      popupDetail.value.close();
    };
    const popupScore = common_vendor.ref(null);
    const openPopupScore = () => {
      popupScore.value.open();
    };
    const closePopupScore = () => {
      popupScore.value.close();
    };
    const userScore = common_vendor.ref(0);
    const userScoreQuiet = () => {
      common_vendor.index.__f__("log", "at pages/detail/detail.vue:151", "评分好了");
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(6, (value, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(maskChange),
        c: common_assets._imports_0$3,
        d: mask.value
      }, mask.value ? {
        e: common_vendor.p({
          type: "left",
          size: "24",
          color: "#fff"
        }),
        f: common_vendor.o(goBack),
        g: common_vendor.unref(utils_system.getStatusHeightValue)() + "px",
        h: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        i: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        j: common_vendor.p({
          type: "info",
          size: "24"
        }),
        k: common_vendor.o(openPopupDetail),
        l: common_vendor.p({
          type: "star",
          size: "24"
        }),
        m: common_vendor.o(openPopupScore),
        n: common_vendor.p({
          type: "download",
          size: "22"
        })
      } : {}, {
        o: common_vendor.p({
          type: "close",
          size: "22"
        }),
        p: common_vendor.o(closePopupDetail),
        q: common_vendor.p({
          readonly: true,
          touchable: false,
          value: 4.5
        }),
        r: common_vendor.f(3, (value, k0, i0) => {
          return {};
        }),
        s: common_vendor.sr(popupDetail, "eca06f3c-6", {
          "k": "popupDetail"
        }),
        t: common_vendor.p({
          type: "bottom"
        }),
        v: common_vendor.p({
          type: "close",
          size: "24"
        }),
        w: common_vendor.o(closePopupScore),
        x: common_vendor.o(($event) => userScore.value = $event),
        y: common_vendor.p({
          allowHalf: true,
          modelValue: userScore.value
        }),
        z: common_vendor.t(userScore.value),
        A: common_vendor.o(userScoreQuiet),
        B: !userScore.value,
        C: common_vendor.sr(popupScore, "eca06f3c-9", {
          "k": "popupScore"
        }),
        D: common_vendor.p({
          type: "center",
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eca06f3c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map
