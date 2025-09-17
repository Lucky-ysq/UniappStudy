<template>
  <view>
    <view v-if="shop">淘宝</view>
    <view v-else>京东</view>
    <view @click="shop = !shop">点击换平台</view>
  </view>

</template>

<script lang="ts" setup>
import {ref} from 'vue'
let shop = ref(false)

</script>

<style scoped></style>