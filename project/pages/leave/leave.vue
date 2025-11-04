<template>
  <view class="leave pageColor">
    <view class="leaveCentent">
      <gripImag v-for="value in 15"></gripImag>
    </view>
  </view>
</template>

<script setup>
import gripImag from '../../components/gripImag/gripImag.vue'
</script>

<style lang="scss" scoped>
.leaveCentent {
  padding: 30rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15rpx;
}
</style>