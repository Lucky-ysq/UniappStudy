"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("你好");
    function num() {
      for (let i = 0; i < 10; i++) {
        console.log(i % 4);
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.o(num)
      };
    };
  }
};
wx.createPage(_sfc_main);
