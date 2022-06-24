<template>
    <h1>这是关于界面 Jarvis</h1>
    <p>h函数的用法， 手写h函数，可以处理动态性更高的场景。
        但是如果是复杂的场景，h函数写起来就显得非常繁琐，需要自己把所有的属性转变为对象。
        并且组件嵌套的时候，对象也会变得非常复杂。
        不过h函数也是返回虚拟DOM的，可以用JSX更加方便的写h函数。
        使用level 传递标签的级别</p>
    <Heading :level = '3'> hello </Heading>
</template>


<script setup>
import Heading from '../components/Heading';


</script>