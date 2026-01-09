<template>
	<view class="content pageColor">
		<all-nav-bar>
			<slot>标题</slot>
		</all-nav-bar>
		<!-- 轮播图 -->
		<view class="bannerSty">
			<swiper indicator-dots autoplay circular indicator-color="rgba(255,255,255,0.6)"
				indicator-active-color="#fff">
				<swiper-item v-for="item in bannerData" :key="item._id">
					<navigator v-if="item.target == 'self'" class="like" :url="`/pages/limitList/limitList?${item.url}`">
						<image :src="item.picurl" mode="aspectFill" />
					</navigator> 
					<navigator v-else class="like" :url="item.url" target="miniProgram" :app-id="item.appid">  
						<image :src="item.picurl" mode="aspectFill" />
					</navigator>  
				</swiper-item> 
			</swiper>
		</view> 

		<!-- 公告 -->
		<view class="bannerTwoSty">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<view class="text">公告</view>
			</view>
			<view class="center">
				<swiper autoplay circular vertical interval="2000">
					<swiper-item v-for="item in titleData" :key="item._id">
						{{item.title}}
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="20"></uni-icons>
			</view>
		</view>

		<!-- 推荐 -->
		<view class="MinImageSty">
			<Titile>
				<template #left>
					优选推荐
				</template>
				<template #right>
					<view class="dateSty">
						<uni-icons type="calendar" size="20"></uni-icons>
						<view class="text">
							<uni-dateformat :date="new Date()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</Titile>
			<view class="imageSty">
				<scroll-view scroll-x>
					<view class="box" v-for="value in randomData" :key="value._id" @click="goDetail(value._id)">
						<image :src="value.smallPicurl" mode="aspectFill" />
					</view>
				</scroll-view>
			</view>
		</view>

		<view class="TwoMinImageSty">
			<Titile>
				<template #left>
					分类精选
				</template>
				<template #right>
					<view class="text">
						More+
					</view>
				</template>
			</Titile>
			<view class="imageSty">
				<gripIamge v-for="value in classify" :key="value._id" :item="value"></gripIamge>
				<gripIamge :isBox="true"></gripIamge>
			</view>

		</view>



	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import Titile from '../../components/titile/titile.vue';
	import gripIamge from '../../components/gripImag/gripImag.vue';
	import allNavBar from '../../components/all-nav-bar/all-nav-bar.vue'
	import {
		apiGetBannerData,
		apiGetRandomData,
		apiGetTitleData,
		apiGetClassifyData
	} from '@/api/apis.js'
	import {
		onShareAppMessage,
		onShareTimeline
	} from '@dcloudio/uni-app'

	// 分享功能给好友 
	onShareAppMessage(() => {
		return {
			title: "分享给朋友",
			path: "/pages/index/index"
		}
	})

	// 分享功能到朋友圈
	onShareTimeline(() => {
		return {
			title: "分享到朋友圈",
			imageUrl: ''
		}
	})

	const bannerData = ref([]);
	const titleData = ref([]);
	const randomData = ref([]);
	const classify = ref([]);

	//跳转到详细界面 
	const goDetail = (id) => {
		console.log(id);
		uni.setStorageSync("limitData", randomData.value)
		uni.navigateTo({
			url: "../../pages/detail/detail?id=" + id
		});
	}

	// 获取轮播图数据
	let getBannerData = async () => {
		let value = await apiGetBannerData();
		bannerData.value = value.data; 
		console.log(value.data);
	}
 
	// 获取公告数据
	let getTitleData = async () => {
		let value = await apiGetTitleData({
			select: true
		});
		titleData.value = value.data
	}

	// 获取推荐数据
	let getRandomData = async () => {
		let value = await apiGetRandomData()
		randomData.value = value.data
	}

	let getClassifyData = async () => {
		let value = await apiGetClassifyData({
			select: true
		});
		classify.value = value.data
	}

	getBannerData();
	getRandomData();
	getTitleData();
	getClassifyData();
</script>

<style lang="scss" scoped>
	.bannerSty {
		width: 750rpx;
		padding: 30rpx 0;
		swiper {
			width: 750rpx;
			height: 340rpx;
			&-item {
				width: 100%;
				height: 100%;
				padding: 0 30rpx;
				.like {
					width: 100%;
					height: 100%;
					image {
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
					}
				}
			}
		}
	}

	.bannerTwoSty {
		width: 690rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin: 0 auto;
		background: #f8f6f6;
		display: flex;
		border-radius: 80rpx;

		.left {
			width: 140rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			:deep() {
				.uni-icons {
					color: $theme-color !important;
				}
			}


			.text {
				color: $theme-color;
				font-size: 28rpx;
				font-weight: 600;
				margin-bottom: 1rpx;
			}
		}

		.center {
			flex: 1;

			swiper {
				height: 100%;

				&-item {
					height: 100%;
					font-size: 28rpx;
					color: #666;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}

		.right {
			width: 70rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.MinImageSty {
		.dateSty {
			display: flex;
			align-items: center;
			justify-content: center;

			:deep() {
				.uni-icons {
					color: $theme-color !important;
				}
			}

			.text {
				font-size: 28rpx;
				color: $theme-color;
				margin-left: 5rpx;
			}
		}

		.imageSty {
			width: 720rpx;
			margin-left: 30rpx;

			scroll-view {
				white-space: nowrap;

				.box {
					width: 200rpx;
					height: 430rpx;
					display: inline-block;
					margin-right: 15rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}

				.box:last-child {
					margin-right: 30rpx;
				}
			}
		}
	}

	.TwoMinImageSty {
		padding-bottom: 40rpx;

		.text {
			font-size: 30rpx;
			color: #666;
		}

		.imageSty {
			padding: 0 30rpx;
			display: grid;
			gap: 20rpx;
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>