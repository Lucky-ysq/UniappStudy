"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons + _easycom_uni_rate + _easycom_uni_popup)();
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
      common_vendor.index.__f__("log", "at pages/detail/detail.vue:147", "评分好了");
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
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        f: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        g: common_vendor.p({
          type: "info",
          size: "24"
        }),
        h: common_vendor.o(openPopupDetail),
        i: common_vendor.p({
          type: "star",
          size: "24"
        }),
        j: common_vendor.o(openPopupScore),
        k: common_vendor.p({
          type: "download",
          size: "22"
        })
      } : {}, {
        l: common_vendor.p({
          type: "close",
          size: "24"
        }),
        m: common_vendor.o(closePopupDetail),
        n: common_vendor.p({
          readonly: true,
          touchable: false,
          value: 4.5
        }),
        o: common_vendor.f(3, (value, k0, i0) => {
          return {};
        }),
        p: common_vendor.sr(popupDetail, "eca06f3c-5", {
          "k": "popupDetail"
        }),
        q: common_vendor.p({
          type: "bottom"
        }),
        r: common_vendor.p({
          type: "close",
          size: "24"
        }),
        s: common_vendor.o(closePopupScore),
        t: common_vendor.o(($event) => userScore.value = $event),
        v: common_vendor.p({
          allowHalf: true,
          modelValue: userScore.value
        }),
        w: common_vendor.t(userScore.value),
        x: common_vendor.o(userScoreQuiet),
        y: !userScore.value,
        z: common_vendor.sr(popupScore, "eca06f3c-8", {
          "k": "popupScore"
        }),
        A: common_vendor.p({
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
