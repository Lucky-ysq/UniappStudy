"use strict";
const utils_request = require("../utils/request.js");
function apiGetBannerData() {
  return utils_request.request({ url: "/homeBanner" });
}
function apiGetTitleData(data = {}) {
  return utils_request.request({ url: "/wallNewsList", data });
}
function apiGetRandomData() {
  return utils_request.request({ url: "/randomWall" });
}
function apiGetClassifyData(data = {}) {
  return utils_request.request({ url: "/classify", data });
}
function apiGetLimitData(data = {}) {
  return utils_request.request({ url: "/wallList", data });
}
function apiGetUserScortData(data = {}) {
  return utils_request.request({ url: "/setupScore", data });
}
function apiGetUserDownLoadData(data = {}) {
  return utils_request.request({ url: "/downloadWall", data });
}
function apiGetUserPageData(data = {}) {
  return utils_request.request({ url: "/userInfo", data });
}
function apiGetUserLimitData(data = {}) {
  return utils_request.request({ url: "/userWallList", data });
}
function apiSearchData(data = {}) {
  return utils_request.request({ url: "/searchWall", data });
}
exports.apiGetBannerData = apiGetBannerData;
exports.apiGetClassifyData = apiGetClassifyData;
exports.apiGetLimitData = apiGetLimitData;
exports.apiGetRandomData = apiGetRandomData;
exports.apiGetTitleData = apiGetTitleData;
exports.apiGetUserDownLoadData = apiGetUserDownLoadData;
exports.apiGetUserLimitData = apiGetUserLimitData;
exports.apiGetUserPageData = apiGetUserPageData;
exports.apiGetUserScortData = apiGetUserScortData;
exports.apiSearchData = apiSearchData;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/apis.js.map
