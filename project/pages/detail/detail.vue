<template>
	<view class="topView" v-if="detailValue">
		<swiper circular :current="currentIndex" @change="SwiperItem">
			<swiper-item v-for="(value,index) in limitDataLocal" :key="value._id">
				<image v-if="seedArray.includes(index)" @click="maskChange" :src="value.picurl" mode="aspectFill">
				</image>
			</swiper-item>
		</swiper>

		<!-- 遮蔽层 -->
		<view class="viewTop" v-if="mask">
			<view class="goBack" @click="goBack" :style="{top: getStatusHeightValue() + 'px'}">
				<uni-icons type="left" size="24" color="#fff" />
			</view>
			<view class="limit">{{currentIndex + 1}} / {{limitDataLocal.length}}</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="day">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="openPopupDetail">
					<uni-icons type="info" size="24" />
					<text class="text">信息</text>
				</view>

				<view class="box" @click="openPopupScore">
					<uni-icons type="star" size="24" />
					<text class="text">{{detailValue?.score}}分</text>
				</view>

				<view class="box" @click="downLoadImage">
					<uni-icons type="download" size="22" />
					<text class="text">下载</text>
				</view>
			</view>
		</view>

		<!-- 详情弹窗 -->
		<uni-popup ref="popupDetail" type="bottom" :safe-area="false">
			<view class="infoMain">
				<view class="PopHead">
					<view></view>
					<view class="headCentent">壁纸信息</view>
					<view class="close" @click="closePopupDetail">
						<uni-icons type="close" size="22"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID：</view>
							<text selectable class="popupText">{{detailValue?._id}}</text>
						</view>

						<view class="row">
							<view class="label">分类：</view>
							<text selectable class="popupText color">{{detailValue?.tabs[1]}}</text>
						</view>

						<view class="row">
							<view class="label">发布者：</view>
							<text selectable class="popupText">{{detailValue?.nickname}}</text>
						</view>

						<view class="row">
							<view class="label">评分：</view>
							<view selectable class="popupText scoreText">
								<uni-rate class="rate" readonly :touchable="false" :value="detailValue?.score" />
								<text class="color">{{detailValue?.score}}分</text>
							</view>
						</view>

						<view class="row">
							<view class="label">摘要：</view>
							<text selectable class="popupText">{{detailValue?.description}}</text>
						</view>

						<view class="row">
							<view class="label">壁纸ID：</view>
							<text selectable class="popupText tabs">
								<text class="tab" v-for="value in detailValue.tabs" :key="value">{{value}}</text>
							</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>

		<!-- 评分弹窗 -->
		<uni-popup ref="popupScore" type="center" :is-mask-click="false">
			<view class="ScoreMain">
				<view class="PopHead">
					<view></view>
					<view class="headCentent">{{isUserScore ?'已评分' : '评分信息'}}</view>
					<view class="close" @click="closePopupScore">
						<uni-icons type="close" size="24"></uni-icons>
					</view>
				</view>
				<view class="content">
					<uni-rate v-model="userScore" allowHalf :readonly="isUserScore" />
					<text class="userScoreText">{{ userScore }}分</text>
				</view>
				<view class="footer">
					<button @click="userScoreQuiet" :disabled="!userScore || isUserScore" class="ScoreButton"
						size="mini" plain>确认评分</button>
				</view>
			</view>
		</uni-popup>


	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		getStatusHeightValue
	} from '@/utils/system.js'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		apiGetUserScortData,
		apiGetUserDownLoadData
	} from "@/api/apis.js"


	onLoad((e) => {
		currentID.value = e.id;
		console.log(currentID.value);
		currentIndex.value = limitDataLocal.value.findIndex(item => item._id == currentID.value)
		detailValue.value = limitDataLocal.value[currentIndex.value];
		seedModel();
	})


	// 下载功能
	const downLoadImage = async () => {
		// #ifdef H5
		uni.showModal({
			content: "请长按图片进行保存",
			showCancel: false
		})
		// #endif


		// #ifndef H5
		try {
			uni.showLoading({
				title: "加载中..."
			})

			let {
				classid,
				_id: wallId
			} = detailValue.value
			let res = await apiGetUserDownLoadData({
				classid,
				wallId
			})
			if (res.errCode != 0) throw res

			uni.getImageInfo({
				src: detailValue.value.picurl,
				success: (res) => {
					uni.saveImageToPhotosAlbum({
						filePath: res.path,
						success: (res) => {
							uni.showToast({
								title: "保存成功",
								icon: "none"
							})
						},
						fail: (err) => {
							if (err.errMsg == 'saveImageToPhotosAlbum:fail cancel') {
								uni.showToast({
									title: "下载失败，请重新下载",
									icon: "none"
								});
								return;
							}
							console.log(err);
							uni.showModal({
								title: "授权提示",
								content: "请打开相册保存权限",
								success: (res) => {
									if (res.confirm) {
										uni.openSetting({
											success(res) {
												if (res.authSetting[
														'scope.writePhotosAlbum'
													]) {
													uni.showToast({
														title: "授权成功",
														icon: "none"
													})
												} else {
													uni.showToast({
														title: "授权失败",
														icon: "none"
													})
												}
											}
										})
									}
								}
							})
						},
						complete: () => {
							uni.hideLoading();
						}
					})
				}
			})
		} catch (err) {
			uni.hideLoading();
		}
		// #endif
	}

	// 获取信息内容
	const detailValue = ref(null)

	//预加载
	const seedArray = ref([]);

	function seedModel() {
		seedArray.value.push(
			currentIndex.value - 1 <= -1 ? limitDataLocal.value.length - 1 : currentIndex.value - 1,
			currentIndex.value,
			currentIndex.value + 1 >= 12 ? 0 : currentIndex.value + 1
		)
		seedArray.value = [...new Set(seedArray.value)]
	}

	// 滑动索引
	let SwiperItem = (e) => {
		currentIndex.value = e.detail.current;
		detailValue.value = limitDataLocal.value[currentIndex.value];
		seedModel();
	}

	// 获取图片信息
	const limitDataLocal = ref([])
	let limitData = uni.getStorageSync("limitData") || []
	limitDataLocal.value = limitData.map(item => {
		return {
			...item,
			picurl: item.smallPicurl.replace("_small.webp", ".jpg") // 替换方法
		}
	})

	// 当前id
	const currentID = ref();
	// 当前索引
	const currentIndex = ref();

	// 遮罩层
	const mask = ref(true);
	const maskChange = () => {
		mask.value = !mask.value;
	};

	const popupDetail = ref(null);
	// 开启弹窗
	const openPopupDetail = () => {
		popupDetail.value.open();
	};
	// 关闭弹窗
	const closePopupDetail = () => {
		popupDetail.value.close();
	}

	const popupScore = ref(null);
	// 开启评分弹窗
	const openPopupScore = () => {
		if (detailValue.value.userScore) {
			isUserScore.value = true;
			userScore.value = detailValue.value.userScore
		}
		popupScore.value.open();
	};
	// 关闭评分弹窗
	const closePopupScore = () => {
		popupScore.value.close();
		userScore.value = 0;
		isUserScore.value = false
	};

	// 用户默认评分
	const userScore = ref(0);
	const isUserScore = ref(false)

	// 确认评分
	const userScoreQuiet = async () => {
		uni.showLoading({
			title: "加载中"
		})
		let {
			classid,
			_id: wallId
		} = detailValue.value
		let res = await apiGetUserScortData({
			classid,
			wallId,
			userScore: userScore.value
		})
		uni.hideLoading();
		if (res.errCode === 0) {
			uni.showToast({
				title: "评分成功",
				icon: 'none'
			})
			limitDataLocal.value[currentIndex.value].userScore = userScore.value;
			uni.setStorageSync("limitData", limitDataLocal.value)
			closePopupScore();

		}

	}


	//返回上一页
	const goBack = () => {
		uni.navigateBack();
	}
</script>

<style lang="scss" scoped>
	.topView {
		width: 100%;
		height: 100vh;
		position: relative;

		swiper {
			width: 100%;
			height: 100%;

			swiper-item {
				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.viewTop {
			&>view {
				position: absolute;
				color: #fff;
				left: 0;
				right: 0;
				margin: auto;
				width: fit-content;
			}

			.goBack {
				width: 38px;
				height: 38px;
				top: 0;
				left: 30rpx;
				margin-left: 0;
				background: rgba(0, 0, 0, 0.5);
				border-radius: 100px;
				border: 1rpx solid rgba(255, 255, 255, 0.3);
				backdrop-filter: blur(10rpx);
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.limit {
				top: 10vh;
				background:
					rgba(0, 0, 0, 0.5);
				padding: 10rpx 24rpx;
				border-radius: 32rpx;
				line-height: 1em;
				backdrop-filter: blur(10rpx);
				font-size: 28rpx;
			}

			.time {
				top: calc(10vh + 40rpx);
				font-size: 160rpx;
				font-weight: 100;
				text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
			}

			.day {
				top: calc(10vh + 240rpx);
				font-size: 28rpx;
				text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
			}

			.footer {
				background-color: rgba(255, 255, 255, 0.8);
				bottom: 10vh;
				width: 60vw;
				height: 120rpx;
				border-radius: 120rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(20rpx);

				.box {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 6rpx 14rpx;

					.text {
						font-size: 24rpx;
						color: #333;
					}
				}
			}
		}

		.PopHead {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.headCentent {
				font-size: 28rpx;
				color: $text-font-color-2;
			}

			.close {
				padding: 5rpx;
			}
		}

		.infoMain {
			background: #fff;
			overflow: hidden;
			padding: 30rpx;
			border-radius: 30rpx 30rpx 0 0;

			scroll-view {
				max-height: 60vh;

				.content {
					.row {
						display: flex;
						padding: 16rpx 0;
						line-height: 1.7em;

						.label {
							text-align: right;
							width: 160rpx;
							color: $text-font-color-3;
						}

						.popupText {
							flex: 1;
							width: 0;
						}

						.scoreText {
							display: flex;
							align-items: center;

							.color {
								margin-left: 10rpx;
							}
						}

						.color {
							color: $theme-color;
						}

						.tabs {
							display: flex;
							flex-wrap: wrap;

							.tab {
								border: 1rpx solid $theme-color;
								color: $theme-color;
								font-size: 22rpx;
								padding: 10rpx 30rpx;
								border-radius: 40rpx;
								line-height: 1em;
								margin: 0rpx 10rpx 10rpx 0rpx;
							}
						}
					}
				}
			}
		}

		.ScoreMain {
			background: #fff;
			overflow: hidden;
			padding: 30rpx;
			width: 60vw;
			border-radius: 30rpx;

			.content {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 30rpx 0;

				.userScoreText {
					color: #ffca3e;
					padding-left: 10rpx;
					width: 80rpx;
					line-height: 1em;
					text-align: right;
				}
			}

			.footer {
				padding: 10rpx 0;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

	}
</style>