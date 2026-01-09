<template>
	<view class="leave pageColor">
		<all-nav-bar>
			<slot>壁纸</slot>
		</all-nav-bar>
		<view class="leaveCentent">
			<gripImag v-for="value in classify" :key="value._id" :item="value"></gripImag>
		</view>
	</view>
</template>

<script setup>
	import gripImag from '../../components/gripImag/gripImag.vue'
	import allNavBar from '../../components/all-nav-bar/all-nav-bar.vue'
	import {
		apiGetClassifyData
	} from '@/api/apis.js'
	import {
		ref
	} from 'vue'
	import {
		onShareAppMessage,
		onShareTimeline
	} from '@dcloudio/uni-app'

	// 分享功能给好友 
	onShareAppMessage(() => {
		return {
			title: "分享给朋友",
			path: "/pages/leave/leave"
		}
	})

	// 分享功能到朋友圈
	onShareTimeline(() => {
		return {
			title: "分享到朋友圈",
			imageUrl: ''
		}
	})

	const classify = ref([]);
	let getClassifyData = async () => {
		let value = await apiGetClassifyData({
			pageSize: 20
		});
		console.log(value);
		classify.value = value.data
	}

	getClassifyData();
</script>

<style lang="scss" scoped>
	.leaveCentent {
		padding: 30rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15rpx;
	}
</style>