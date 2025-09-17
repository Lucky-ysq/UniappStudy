<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>

    <view>----</view>
    <text space="emsp">你好 哈哈哈</text>
    <view>------</view>
    <!-- 上下滑动 -->
    <scroll-view scroll-x class="boxVery">
      <view class="box">1423423</view>
      <view class="box">24342</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
      <view class="box">321312312</view>
    </scroll-view>

    <view>-------</view>

    <navigator
        url="/pages/demo/demo"
        open-type="navigate"
    >
      跳转到demo1
    </navigator>


    <navigator
        url="/pages/shop/shop"
        open-type="navigate"
    >
      跳转到shop
    </navigator>


    <view @click="num">点击运行</view>
  </view>

  <UserShop></UserShop>
</template>

<script setup>
import {ref} from 'vue';

const title = ref('你好');
uni.setStorageSync('name', '张三');


</script>

<style>
.boxVery {
  width: 100%;
  height: 100px;
  white-space: nowrap;
}

.box {
  width: 100px;
  height: 80px;
  display: inline-block;
  background: red;
}
</style>
