<template>
	<view class="centent">
		<navigator :url="'/pages/limitList/limitList?id='+item._id +'&name='+item.name" class="box" v-if="!isBox">
			<image :src="item.picurl" mode="aspectFill" />
			<view class="bottomText">{{item.name}}</view>
			<view class="leftText">{{formatRelativeTime(item.updateTime)}}更新</view>
		</navigator>

		<navigator url="/pages/leave/leave" open-type="reLaunch" class="box more" v-if="isBox">
			<image src="/common/image/more.jpg" mode="aspectFill" />
			<view class="bottomText">
				<uni-icons type="more-filled" size="26" color="#fff"></uni-icons>
				更多
			</view>
		</navigator>
	</view>
</template>

<script setup>
	defineProps({
		isBox: {
			type: Boolean,
			default: false
		},
		item: {
			type: Object,
			default () {
				return {
					name: "默认名字",
					picurl: "/common/image/classify1.jpg",
					updateTime: Date.now() - 1000 * 60 * 60 * 5
				}
			}
		}
	})

	import {
		formatRelativeTime
	} from '@/utils/newDate.js'
</script>

<style lang="scss" scoped>
	.centent {
		.box {
			height: 340rpx;
			border-radius: 15rpx;
			overflow: hidden;
			position: relative;

			image {
				width: 100%;
				height: 100%;
			}

			.bottomText {
				width: 100%;
				height: 70rpx;
				position: absolute;
				left: 0;
				bottom: 0;
				background: rgba(0, 0, 0, .2);
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				backdrop-filter: blur(10rpx);
			}

			.leftText {
				position: absolute;
				left: 0;
				top: 0;
				background: rgba(250, 129, 90, .7);
				color: #fff;
				padding: 8rpx 14rpx;
				font-size: 22rpx;
				border-radius: 0 0 25rpx 0;
				backdrop-filter: blur(10rpx);
				transform: scale(0.8);
				transform-origin: left top;
			}
		}

		.box.more {
			.bottomText {
				width: 100%;
				height: 100%;
				flex-direction: column;
			}
		}
	}
</style>