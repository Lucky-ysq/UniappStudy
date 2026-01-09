<template>
	<view class="all">
		<view class="navBar">
			<view class="status" :style="{ height: getStatusHeightValue() + 'px' }">
			</view>
			<view class="titleBar" :style="{ height: getMenuButtonValue() + 'px' }">
				<view class="Bigtext">
					<slot></slot>
				</view>
				<navigator url="/pages/search/search" class="search">
					<uni-icons type="search" size="20" color="#999" class="icon"></uni-icons> 
					<text class="text">搜索</text>
				</navigator>
			</view>
		</view>
		<view class="fill" :style="{ height: getNavbar() + 'px' }">
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {getStatusHeightValue,getMenuButtonValue,getNavbar} from '@/utils/system.js';

</script>

<style lang="scss" scoped>
.all {
	.navBar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background:
			linear-gradient(to bottom, transparent, #fff 400rpx),
			linear-gradient(to right, #beecd8 20%, #f4e2d8);

		.titleBar {
			display: flex;
			align-items: center;
			padding-left: 30rpx;

			.Bigtext {
				font-size: 22px;
				font-weight: 700;
			}

			.search {
				width: 220rpx;
				height: 50rpx;
				background: rgba(255, 255, 255, 0.4);
				border-radius: 50rpx;
				margin-left: 20rpx;
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #999;
				border: 1rpx solid #fff;

				.icon {
					margin-left: 10rpx;
				}

				.text {
					margin-left: 10rpx;
				}
			}
		}
	}
}
</style>