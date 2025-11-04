<template>
	<view class="limit">
		<view class="centent">
			<navigator url="/pages/detail/detail" class="item" v-for="a in 10">
				<image src="/common/课程需要的资料/wallpaper/preview2.jpg" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>

</template>

<script setup>
</script>

<style lang="scss" scoped>
.limit{
  .centent{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 5rpx;
    padding: 5rpx;
    .item{
      height: 440rpx;
      image{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>