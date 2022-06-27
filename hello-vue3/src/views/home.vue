<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2022-06-27 14:36:53
 * @LastEditTime: 2022-06-27 16:17:45
-->
<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    <HelloWorld ref="hwRef" msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@cp/HelloWorld.vue'
import logo from '@img/logo.png'
import { ref, reactive, toRefs } from 'vue'
interface numType {
  user: string
}

const numTemp: numType[] = reactive([
  {
    user: 'Jamboy',
  },
  {
    user: 'Jamboy',
  },
])
console.log('numTemp: ', numTemp)

const numTemp1 = toRefs(numTemp)
numTemp[0].user = 'Jamboy1'
console.log('numTemp1: ', numTemp1)

const hwRef = ref<typeof HelloWorld | null>(null)
console.log('hwRef: ', hwRef)
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @color-black;
  padding: (@margin * 3) 0;
  margin: 0 auto;
}
</style>
