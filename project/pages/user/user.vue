<template>
  <view class="user">
    <view class="ImageSty">
      <view class="bac">
        <image src="/static/xxmLogo.png" mode="aspectFill" />
      </view>
      <view class="row1">
        如初
      </view>
      <view class="row2">
        来自于：河北
      </view>
    </view>
    <view class="section ">
      <view class="row" v-for="value in 2">
        <view class="left">
          <uni-icons type="contact" size="20" color="#28B389"></uni-icons>
          <view class="text">
            我的下载
          </view>
        </view>
        <view class="right">
          <view class="text">22</view>
          <uni-icons type="right" size="16"></uni-icons>
        </view>
      </view>

      <view class="row">
        <view class="left">
          <uni-icons type="chatboxes-filled" size="20" color="#28B389"></uni-icons>
          <view class="text">
            联系客服
          </view>
        </view>
        <view class="right">
          <view class="text"></view>
          <uni-icons type="right" size="16"></uni-icons>
        </view>
        <!-- #ifdef MP -->
        <button open-type="contact">联系客服</button>
        <!-- #endif -->
        <!-- #ifndef MP -->
        <button open-type="contact">拨打电话</button>
        <!-- #endif -->
      </view>

    </view>


    <view class="section too">
      <view class="row" v-for="value in 2">
        <view class="left">
          <uni-icons type="contact" size="20" color="#28B389"></uni-icons>
          <view class="text">
            我的下载
          </view>
        </view>
        <view class="right">
          <view class="text">22</view>
          <uni-icons type="right" size="16"></uni-icons>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.ImageSty {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 70rpx 0;

  .bac {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    overflow: hidden;
  }

  image {
    width: 100%;
    height: 100%;
  }

  .row1 {
    font-size: 34rpx;
    padding: 20rpx 0 5rpx 0;
  }

  .row2 {
    font-size: 22rpx;
    color: #9e9e9e;
  }
}

.section {
  width: 690rpx;
  margin: 0 auto;
  border: 1rpx solid #eee;
  border-radius: 15rpx;
  box-shadow: 0 0 0 2rpx rgba(0, 0, 0, 0.05);

  .row {
    width: 100%;
    height: 80rpx;
    padding: 0 25rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1rpx solid #eee;
    position: relative;

    &:last-child {
      border-bottom: none;
    }

    .left {
      display: flex;
      align-items: center;

      .text {
        padding-left: 15rpx;
        font-size: 26rpx;
      }
    }

    .right {
      display: flex;
      align-items: center;
      color: #aaa;

      .text {
        font-size: 26rpx;
        color: #aaa;
      }
    }

    button {
      width: 100%;
      height: 80rpx;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.5;
    }
  }


}

.too {
  margin-top: 50rpx;
}
</style>