<template>
	<view class="all">
		<view class="navBar">
			<view class="status">
			</view>
			<view class="titleBar">
				<view class="text">
					<slot></slot>
				</view>
				<view class="search">
					<uni-icons type="search" size="24"></uni-icons>
					<text>搜索</text>
				</view>
			</view>
		</view>
		<view class="fill">
			
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>