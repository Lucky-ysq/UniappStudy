"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
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
    common_vendor.onLoad((e) => {
      currentID.value = e.id;
      common_vendor.index.__f__("log", "at pages/detail/detail.vue:134", currentID.value);
      currentIndex.value = limitDataLocal.value.findIndex((item) => item._id == currentID.value);
      detailValue.value = limitDataLocal.value[currentIndex.value];
      seedModel();
    });
    const downLoadImage = async () => {
      try {
        common_vendor.index.showLoading({
          title: "加载中..."
        });
        let {
          classid,
          _id: wallId
        } = detailValue.value;
        let res = await api_apis.apiGetUserDownLoadData({
          classid,
          wallId
        });
        if (res.errCode != 0)
          throw res;
        common_vendor.index.getImageInfo({
          src: detailValue.value.picurl,
          success: (res2) => {
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: res2.path,
              success: (res3) => {
                common_vendor.index.showToast({
                  title: "保存成功",
                  icon: "none"
                });
              },
              fail: (err) => {
                if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                  common_vendor.index.showToast({
                    title: "下载失败，请重新下载",
                    icon: "none"
                  });
                  return;
                }
                common_vendor.index.__f__("log", "at pages/detail/detail.vue:186", err);
                common_vendor.index.showModal({
                  title: "授权提示",
                  content: "请打开相册保存权限",
                  success: (res3) => {
                    if (res3.confirm) {
                      common_vendor.index.openSetting({
                        success(res4) {
                          if (res4.authSetting["scope.writePhotosAlbum"]) {
                            common_vendor.index.showToast({
                              title: "授权成功",
                              icon: "none"
                            });
                          } else {
                            common_vendor.index.showToast({
                              title: "授权失败",
                              icon: "none"
                            });
                          }
                        }
                      });
                    }
                  }
                });
              },
              complete: () => {
                common_vendor.index.hideLoading();
              }
            });
          }
        });
      } catch (err) {
        common_vendor.index.hideLoading();
      }
    };
    const detailValue = common_vendor.ref(null);
    const seedArray = common_vendor.ref([]);
    function seedModel() {
      seedArray.value.push(
        currentIndex.value - 1 <= -1 ? limitDataLocal.value.length - 1 : currentIndex.value - 1,
        currentIndex.value,
        currentIndex.value + 1 >= 12 ? 0 : currentIndex.value + 1
      );
      seedArray.value = [...new Set(seedArray.value)];
    }
    let SwiperItem = (e) => {
      currentIndex.value = e.detail.current;
      detailValue.value = limitDataLocal.value[currentIndex.value];
      seedModel();
    };
    const limitDataLocal = common_vendor.ref([]);
    let limitData = common_vendor.index.getStorageSync("limitData") || [];
    limitDataLocal.value = limitData.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
        // 替换方法
      };
    });
    const currentID = common_vendor.ref();
    const currentIndex = common_vendor.ref();
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
      if (detailValue.value.userScore) {
        isUserScore.value = true;
        userScore.value = detailValue.value.userScore;
      }
      popupScore.value.open();
    };
    const closePopupScore = () => {
      popupScore.value.close();
      userScore.value = 0;
      isUserScore.value = false;
    };
    const userScore = common_vendor.ref(0);
    const isUserScore = common_vendor.ref(false);
    const userScoreQuiet = async () => {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      let {
        classid,
        _id: wallId
      } = detailValue.value;
      let res = await api_apis.apiGetUserScortData({
        classid,
        wallId,
        userScore: userScore.value
      });
      common_vendor.index.hideLoading();
      if (res.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
        limitDataLocal.value[currentIndex.value].userScore = userScore.value;
        common_vendor.index.setStorageSync("limitData", limitDataLocal.value);
        closePopupScore();
      }
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g;
      return common_vendor.e({
        a: detailValue.value
      }, detailValue.value ? common_vendor.e({
        b: common_vendor.f(limitDataLocal.value, (value, index, i0) => {
          return common_vendor.e({
            a: seedArray.value.includes(index)
          }, seedArray.value.includes(index) ? {
            b: common_vendor.o(maskChange, value._id),
            c: value.picurl
          } : {}, {
            d: value._id
          });
        }),
        c: currentIndex.value,
        d: common_vendor.o((...args) => common_vendor.unref(SwiperItem) && common_vendor.unref(SwiperItem)(...args)),
        e: mask.value
      }, mask.value ? {
        f: common_vendor.p({
          type: "left",
          size: "24",
          color: "#fff"
        }),
        g: common_vendor.o(goBack),
        h: common_vendor.unref(utils_system.getStatusHeightValue)() + "px",
        i: common_vendor.t(currentIndex.value + 1),
        j: common_vendor.t(limitDataLocal.value.length),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        l: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        m: common_vendor.p({
          type: "info",
          size: "24"
        }),
        n: common_vendor.o(openPopupDetail),
        o: common_vendor.p({
          type: "star",
          size: "24"
        }),
        p: common_vendor.t((_a = detailValue.value) == null ? void 0 : _a.score),
        q: common_vendor.o(openPopupScore),
        r: common_vendor.p({
          type: "download",
          size: "22"
        }),
        s: common_vendor.o(downLoadImage)
      } : {}, {
        t: common_vendor.p({
          type: "close",
          size: "22"
        }),
        v: common_vendor.o(closePopupDetail),
        w: common_vendor.t((_b = detailValue.value) == null ? void 0 : _b._id),
        x: common_vendor.t((_c = detailValue.value) == null ? void 0 : _c.tabs[1]),
        y: common_vendor.t((_d = detailValue.value) == null ? void 0 : _d.nickname),
        z: common_vendor.p({
          readonly: true,
          touchable: false,
          value: (_e = detailValue.value) == null ? void 0 : _e.score
        }),
        A: common_vendor.t((_f = detailValue.value) == null ? void 0 : _f.score),
        B: common_vendor.t((_g = detailValue.value) == null ? void 0 : _g.description),
        C: common_vendor.f(detailValue.value.tabs, (value, k0, i0) => {
          return {
            a: common_vendor.t(value),
            b: value
          };
        }),
        D: common_vendor.sr(popupDetail, "eca06f3c-6", {
          "k": "popupDetail"
        }),
        E: common_vendor.p({
          type: "bottom",
          ["safe-area"]: false
        }),
        F: common_vendor.t(isUserScore.value ? "已评分" : "评分信息"),
        G: common_vendor.p({
          type: "close",
          size: "24"
        }),
        H: common_vendor.o(closePopupScore),
        I: common_vendor.o(($event) => userScore.value = $event),
        J: common_vendor.p({
          allowHalf: true,
          readonly: isUserScore.value,
          modelValue: userScore.value
        }),
        K: common_vendor.t(userScore.value),
        L: common_vendor.o(userScoreQuiet),
        M: !userScore.value || isUserScore.value,
        N: common_vendor.sr(popupScore, "eca06f3c-9", {
          "k": "popupScore"
        }),
        O: common_vendor.p({
          type: "center",
          ["is-mask-click"]: false
        })
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eca06f3c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map
