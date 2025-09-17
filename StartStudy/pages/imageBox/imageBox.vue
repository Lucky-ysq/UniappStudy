<template>
	<view>
		<view class="bodyImg">

			<view class="box" v-for="(item,index) in data" :key="data.id">
				<view class="pic">
					<image lazy-load :src="item.url" alt="" mode="widthFix" @click="bigImg(index)"></image>
				</view>
				<view class="text">
					{{ item.id }}
				</view>
			</view>
		</view>

		<view class="buttonSty">
			<view class="item" @click="toUp">
				<uni-icons type="arrow-up" size="30"></uni-icons>
			</view>
			<view class="item" @click="PullRefresh">
				<uni-icons type="refreshempty" size="30"></uni-icons>
			</view>
		</view>

		<view class="loadImg">
			<uni-load-more status="loading"></uni-load-more>
		</view>

	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onReachBottom,
		onPullDownRefresh
	} from '@dcloudio/uni-app';

	request();
	const data = ref([]);

	//网络请求
	function request() {

		uni.showLoading({
			title: '加载中'
		});
		uni.request({
			url: "https://tea.qingnian8.com/tools/taoShow",
			data: {
				size: 10
			},
			header:{
				"access-key":"992017"
			}
		}).then(res => {
			data.value = [...data.value, ...res.data.data];
		}).finally(() => {
			uni.hideLoading();
			uni.stopPullDownRefresh();
		})
	}



	//预览图片
	function bigImg(i) {
		uni.previewImage({
			urls: data.value.map(item => item.url),
			current: i
		})
	}

	//触底刷新
	onReachBottom(() => {
		request();
	})

	//监听下拉刷新
	onPullDownRefresh(() => {
		data.value = [];
		request();
	})

	//下拉刷新
	function PullRefresh() {
		uni.startPullDownRefresh();
	}



	//返回顶部
	function toUp() {
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 300
		});
	}
</script>


<style scoped>
	.bodyImg {
		padding: 50rpx;
	}

	.box {
		margin-bottom: 40rpx;
		box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.08);
		border-radius: 30rpx;
	}

	.pic image {
		width: 100%;
	}

	.text {
		padding: 20rpx 0;
		font-size: 32rpx;
		text-align: center;
	}

	.buttonSty {
		position: fixed;
		bottom: 80rpx;
		right: 20rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.item {
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.9);
		margin-bottom: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #8b8585;
	}

	.loadImg {
		padding-bottom: calc(env(safe-area-inset-bottom) + 50rpx);
	}
</style>