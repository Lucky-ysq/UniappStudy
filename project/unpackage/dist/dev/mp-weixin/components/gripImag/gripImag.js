"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_newDate = require("../../utils/newDate.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "gripImag",
  props: {
    isBox: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default() {
        return {
          name: "默认名字",
          picurl: "/common/image/classify1.jpg",
          updateTime: Date.now() - 1e3 * 60 * 60 * 5
        };
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isBox
      }, !__props.isBox ? {
        b: __props.item.picurl,
        c: common_vendor.t(__props.item.name),
        d: common_vendor.t(common_vendor.unref(utils_newDate.formatRelativeTime)(__props.item.updateTime)),
        e: "/pages/limitList/limitList?id=" + __props.item._id + "&name=" + __props.item.name
      } : {}, {
        f: __props.isBox
      }, __props.isBox ? {
        g: common_assets._imports_0$1,
        h: common_vendor.p({
          type: "more-filled",
          size: "26",
          color: "#fff"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8ab7261d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/gripImag/gripImag.js.map
