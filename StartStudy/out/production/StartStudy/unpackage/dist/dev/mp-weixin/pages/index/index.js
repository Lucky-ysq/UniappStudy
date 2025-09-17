"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_UserShop2 = common_vendor.resolveComponent("UserShop");
  _easycom_UserShop2();
}
const _easycom_UserShop = () => "../../components/UserShop/UserShop.js";
if (!Math) {
  _easycom_UserShop();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("你好");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.o((...args) => _ctx.num && _ctx.num(...args))
      };
    };
  }
};
wx.createPage(_sfc_main);
