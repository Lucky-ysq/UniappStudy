import {request} from "@/utils/request.js"

export function apiGetBannerData(){
	return request({url:"/homeBanner"});
}

export function apiGetTitleData(data={}){
	return request({url:"/wallNewsList",data});
}

export function apiGetRandomData(){
	return request({url:"/randomWall"});
}

export function apiGetClassifyData(data={}){
	return request({url:"/classify",data});
}

export function apiGetLimitData(data={}){
	return request({url:"/wallList",data});
}

export function apiGetUserScortData(data={}){
	return request({url:"/setupScore",data})
}

export function apiGetUserDownLoadData(data={}){
	return request({url:"/downloadWall",data})
}

export function apiGetUserPageData(data={}){
	return request({url:"/userInfo",data})
}

export function apiGetUserLimitData(data={}){
	return request({url:"/userWallList",data});
}

export function apiSearchData(data={}){
	return request({url:"/searchWall",data})
}