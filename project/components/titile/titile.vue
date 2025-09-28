<template>
	<view class="titleSty">
		<view class="left">
			<slot name="left">

			</slot>
		</view>
		<view class="right">
			<slot name="right">
				
			</slot>
		</view>
	</view>
</template>

<script setup>

</script>

<style scoped lang="scss">
.titleSty {
	width: 720rpx;
	padding:50rpx 30rpx 30rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.left{
		font-size: 40rpx;
	}
}
</style>