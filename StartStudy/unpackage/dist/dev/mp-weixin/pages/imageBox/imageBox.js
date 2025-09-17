"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "imageBox",
  setup(__props) {
    request();
    const data = common_vendor.ref([]);
    function request() {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      common_vendor.index.request({
        url: "https://tea.qingnian8.com/tools/taoShow",
        data: {
          size: 10
        },
        header: {
          "access-key": "992017"
        }
      }).then((res) => {
        data.value = [...data.value, ...res.data.data];
      }).finally(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.stopPullDownRefresh();
      });
    }
    function bigImg(i) {
      common_vendor.index.previewImage({
        urls: data.value.map((item) => item.url),
        current: i
      });
    }
    common_vendor.onReachBottom(() => {
      request();
    });
    common_vendor.onPullDownRefresh(() => {
      data.value = [];
      request();
    });
    function PullRefresh() {
      common_vendor.index.startPullDownRefresh();
    }
    function toUp() {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.value, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.o(($event) => bigImg(index), data.value.id),
            c: common_vendor.t(item.id)
          };
        }),
        b: data.value.id,
        c: common_vendor.p({
          type: "arrow-up",
          size: "30"
        }),
        d: common_vendor.o(toUp),
        e: common_vendor.p({
          type: "refreshempty",
          size: "30"
        }),
        f: common_vendor.o(PullRefresh),
        g: common_vendor.p({
          status: "loading"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-be56699b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/imageBox/imageBox.js.map
