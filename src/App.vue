<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <router-link to="/hello">Hello</router-link> &nbsp;|&nbsp;
  <router-link to="/about">About</router-link> &nbsp;|&nbsp;
  <router-link to="/products">Products</router-link> &nbsp;|&nbsp;
  <router-link to="/products/Details">Product Details</router-link>

  <router-view></router-view>

  <HelloWorld msg="This is for all of the hours that is waisted hosting something online!" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
