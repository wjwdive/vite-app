<!-- <script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">主页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>第一个</template>
      <el-menu-item index="2-1">菜单2-1</el-menu-item>
      <el-menu-item index="2-2">菜单2-1</el-menu-item>
      <el-menu-item index="2-3">菜单2-1</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>菜单2-4+</template>
        <el-menu-item index="2-4-1">2-4-1</el-menu-item>
        <el-menu-item index="2-4-2">2-4-2</el-menu-item>
        <el-menu-item index="2-4-3">2-4-3</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
  <div class="h-6" />

  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="15%">
        <div>
          <router-link to="/">首页</router-link>
        </div>
        <div>
          <router-link to="/about">关于</router-link>
        </div>
        <div>
          <router-link to="/my">我的</router-link>
        </div>
        <div>
          <router-link to="/login">登陆</router-link>
        </div>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>

</template>

<script>
import { ref } from 'vue'



</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0;
}

body>.el-container {
  margin-bottom: 40px;
}
</style>
