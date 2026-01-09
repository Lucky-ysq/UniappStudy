<template>
	<view class="limit">
		<view class="loadingSty" v-if="!limitData.length">
			<uni-load-more status="loading"></uni-load-more>
		</view>
		<view class="centent">
			<navigator :url="'/pages/detail/detail?id='+value._id" class="item" v-for="value in limitData"
				:key="value._id">
				<image :src="value.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="loadingSty" v-if="limitData.length">
			<uni-load-more :status="requireBool?'noMore':'loading'"></uni-load-more>
		</view> 

		<view class="safe-height">

		</view>
	</view> 

</template>

<script setup>
	import {
		onLoad,
		onReachBottom,
		onShareAppMessage,
		onShareTimeline
	} from '@dcloudio/uni-app';
	import {
		ref
	} from 'vue'
	import {
		apiGetLimitData,
		apiGetUserLimitData
	} from '../../api/apis';


	// 分享功能给好友 
	onShareAppMessage(() => {
		return {
			title: "分享给朋友" + limitLocalName.value,
			path: "/pages/limitList/limitList?id=" + limitLocalData.classid + "&name=" + limitLocalName.value
		}
	})

	// 分享功能到朋友圈
	onShareTimeline(() => {
		return {
			title: "分享到朋友圈",
			imageUrl: ''
		}
	})

	const limitData = ref([]);
	const limitLocalData = {
		pageNum: 1,
		pageSize: 12
	}
	const requireBool = ref(false)
	const limitLocalName = ref(null)

	onLoad((e) => {
		let {
			id,
			name,
			type
		} = e;
		if (type) limitLocalData.type = type;
		if (id) limitLocalData.classid = id;
		limitLocalName.value = name;
		uni.setNavigationBarTitle({
			title: name,
		})

		getLimitData();
	})


	onReachBottom(() => {
		if (requireBool.value) return
		limitLocalData.pageNum++;
		getLimitData();
	})

	const getLimitData = async () => {
		let res;
		if (limitLocalData.classid) res = await apiGetLimitData(limitLocalData);
		if (limitLocalData.type) res = await apiGetUserLimitData(limitLocalData);
		limitData.value = [...limitData.value, ...res.data];
		if (limitLocalData.pageSize > res.data) requireBool.value = true
		uni.setStorageSync("limitData", limitData.value)
	} 
</script>

<style lang="scss" scoped>
	.limit {
		.centent {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 5rpx;
			padding: 5rpx;

			.item {
				height: 440rpx;

				image {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
</style>