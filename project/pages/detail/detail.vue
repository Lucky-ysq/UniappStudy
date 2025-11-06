<template>
	<view class="topView">
		<swiper circular>
			<swiper-item v-for="value in 6">
				<image @click="maskChange" src="../../common/image/preview1.jpg" mode="aspectFill">
				</image>
			</swiper-item>
		</swiper>

		<view class="viewTop" v-if="mask">
			<view class="goBack"></view>
			<view class="limit">4 / 12</view>
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
					<text class="text">5分</text>
				</view>

				<view class="box">
					<uni-icons type="download" size="22" />
					<text class="text">下载</text>
				</view>
			</view>
		</view>

		<!-- 详情弹窗 -->
		<uni-popup ref="popupDetail" type="bottom">
			<view class="infoMain">
				<view class="PopHead">
					<view></view>
					<view class="headCentent">壁纸信息</view>
					<view class="close" @click="closePopupDetail">
						<uni-icons type="close" size="24"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID：</view>
							<text selectable class="popupText">321312321sad</text>
						</view>

						<view class="row">
							<view class="label">分类：</view>
							<text selectable class="popupText color">明星美女</text>
						</view>

						<view class="row">
							<view class="label">发布者：</view>
							<text selectable class="popupText">咸虾米</text>
						</view>

						<view class="row">
							<view class="label">评分：</view>
							<view selectable class="popupText scoreText">
								<uni-rate class="rate" readonly :touchable="false" :value="4.5" />
								<text class="color">5分</text>
							</view>
						</view>

						<view class="row">
							<view class="label">摘要：</view>
							<text selectable class="popupText">摘要内容填充部分，摘要内容填充部分，摘要内容填充部分，摘要内容填充部分</text>
						</view>

						<view class="row">
							<view class="label">壁纸ID：</view>
							<text selectable class="popupText tabs">
								<text class="tab" v-for="value in 3">标签名</text>
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
					<view class="headCentent">评分信息</view>
					<view class="close" @click="closePopupScore">
						<uni-icons type="close" size="24"></uni-icons>
					</view>
				</view>
				<view class="content">
					<uni-rate v-model="userScore" allowHalf />
					<text class="userScoreText">{{userScore}}分</text>
				</view>
				<view class="footer">
					<button @click="userScoreQuiet" :disabled="!userScore" class="ScoreButton" size="mini"
						plain>确认评分</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

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
		popupScore.value.open();
	};
	// 关闭评分弹窗
	const closePopupScore = () => {
		popupScore.value.close();
	};

	// 用户默认评分
	const userScore = ref(0);

	// 确认评分
	const userScoreQuiet = () => {
		console.log("评分成功");
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

			.goBack {}

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