/**
 * 我们使用 defineComponent 定义一个组件，组件内部配置了 props 和 setup。
 * 这里的 setup 函数返回值是一个函数，就是我们所说的 render 函数。
 * render 函数返回 h 函数的执行结果，h 函数的第一个参数就是标签名，我们可以很方便地使用字符串拼接的方式，实现和上面代码一样的需求。
 * 像这种连标签名都需要动态处理的场景，就需要通过手写 h 函数来实现。
 */
import { defineComponent ,h } from 'vue'

export default defineComponent({
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    setup(props, {slots}) {
        return () => h (
            'h' + props.level, //标签名
            {},// prop, attribute
            slots.default()// 子节点
        )
    }

    //这种在 JavaScript 里面写 HTML 的语法，就叫做 JSX，算是对 JavaScript 语法的一个扩展

    //  const element = <h1 id="app">Hello, Geekbang!</h1>

})