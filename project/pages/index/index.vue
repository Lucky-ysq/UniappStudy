<template>
	<view class="content">
		<view class="bannerSty">
			<swiper indicator-dots autoplay circular indicator-color="rgba(255,255,255,0.6)"
				indicator-active-color="#fff">
				<swiper-item>
					<image src="/common/image/banner1.jpg" mode="aspectFill" />
				</swiper-item>
				<swiper-item>
					<image src="/common/image/banner2.jpg" mode="aspectFill" />
				</swiper-item>
				<swiper-item>
					<image src="/common/image/banner3.jpg" mode="aspectFill" />
				</swiper-item>
			</swiper>
		</view>

		<view class="bannerTwoSty">
			<view class="left">
				<uni-icons type="sound-filled" size="20" color="#28B389"></uni-icons>
				<view class="text">公告</view>
			</view>
			<view class="center">
				<swiper autoplay circular vertical interval="2000">
					<swiper-item v-for="value in 5">
						我是内容你发送的呢发付款了啊发发呆沙发斯蒂芬
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="20"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
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

				image {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
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
			.text {
				color: #28b389;
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
</style>