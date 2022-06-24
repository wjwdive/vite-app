<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>


<!-- 
  lighthouse 插件， 评判如何网页性能指标？
  网页性能的五个评判维度：
  性能、可访问性、最佳实践、SEO 和 PWA


vue3项目通过vite打包后，如何支持dev-tools啊？
新增这个命令     "build:dev": "vue-tsc --noEmit && vite build --mode=development",

这样就打包了一个支持devtools的打包版
 -->