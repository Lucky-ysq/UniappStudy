<template>
  <view class="centent">
    <navigator class="box" v-if="!isBox">
      <image src="/common/image/classify1.jpg" mode="aspectFill" />
      <view class="bottomText">鞠婧祎</view>
      <view class="leftText">3天前更新</view>
    </navigator>

    <navigator class="box more" v-if="isBox">
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
  isBox:{
    type:Boolean,
    default:false
  }
})
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
      padding: 2rpx 10rpx;
      font-size: 22rpx;
      border-radius: 0 0 20rpx 0;
      backdrop-filter: blur(10rpx);
      transform: scale(0.8);
      transform-origin: left top;
    }
  }

  .box.more{
    .bottomText{
      width: 100%;
      height: 100%;
      flex-direction: column;
    }
  }
}
</style>