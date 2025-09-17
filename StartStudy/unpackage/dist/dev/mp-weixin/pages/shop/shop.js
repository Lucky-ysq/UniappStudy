"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "shop",
  setup(__props) {
    let shop = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(shop)
      }, common_vendor.unref(shop) ? {} : {}, {
        b: common_vendor.o(($event) => common_vendor.isRef(shop) ? shop.value = !common_vendor.unref(shop) : shop = !common_vendor.unref(shop))
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/shop/shop.js.map
