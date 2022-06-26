<template>
    <div>
        <input type="text" v-model="title" @keydown.enter="addTodo" />
        <button v-if="active < all" @click="clear">清理</button>
        <div v-if="todos.length">
        <span class="dustbin">🗑</span>
            <transition-group name="flip-list" tag="ul">
                <li v-for="(todo, index) in todos" :key="todo.id">
                    <input type="checkbox" v-model="todo.done" />
                    <span class="{done: todo.done}">{{ todo.title }}</span>
                    <span class="remove-btn" @click="removeTodo($event, index)">❌</span>
                </li>
            </transition-group>
        </div>
        <div v-else>暂无数据</div>
        <div>
            全选
            <input type="checkbox" v-model="allDone" />
            <span> {{ active }} / {{ all }}</span>
        </div>
    </div>

    <transition name="modal">
        <div class="info-wrapper" v-if="showModal">
            <div class="info">请输入条目</div>
        </div>
    </transition>

    <div class="animate-wrap">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="animate" v-show="animate.show">📋</div>
        </transition>
    </div>

</template>

<script setup>

import { ref, computed, reactive, nextTick } from 'vue'
import { useMouse } from '../utils/mouse'

let title = ref("");
let todos = ref([
    {
        id: 1,
        title: "学习",
        done: false
    }, {
        id: 2,
        title: "听歌",
        done: false
    }, {
        id: 3,
        title: "rap",
        done: false
    }, {
        id: 4,
        title: "篮球",
        done: false
    },
]);

let showModal = ref(false)

function addTodo() {
    if (!title.value) {
        showModal.value = true
        setTimeout(() => {
            showModal.value = false
        }, 1500);

        return
    }
    todos.value.push({
        id: todos.value.length + 1,
        title: title.value,
        done: false,
    });
    title.value = "";
}
// 删除已选中的条目
function clear() {
    todos.value = todos.value.filter((v) => !v.done);
}

//计算所有 条目数量
let all = computed(() => todos.value.length)
//计算未选中条目数量 未完成的活动 v.done == false
let active = computed(() => {
    return todos.value.filter((v) => !v.done).length;
});

let allDone = computed({
    get: function () {
        return active.value === 0
    },
    set: function (value) {
        todos.value.forEach((todo) => {
            todo.done = value;
        });
    },
});

function removeTodo(e, i) {
    animate.el = e.target
    animate.show = true
    // nextTick()
    setTimeout(() => {
        todos.value.splice(i, 1)
    }, 100);
}


//删除动画 数据源
let animate = reactive({
    show: false,
    el: null
});

function beforeEnter(el) {
    let dom = animate.el
    let rect = dom.getBoundingClientRect()
    let x = window.innerWidth - rect.left - 60
    let y = rect.top - 10
    el.style.transform = `translate(-${x}px, ${y}px)`
}

function enter(el, done) {
    document.body.offsetHeight
    el.style.transform = `translate(0,0)`
    el.addEventListener('transitionend', done)
}

function afterEnter(el) {
    animate.show = false
    el.style.display = 'none'
}

let { x, y } = useMouse()
let count = ref(1)
function add() {
    count.value++
}


const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<!-- 安装了 Sass 之后，就可以在css 里使用变量，嵌套，继承了 -->
<style lang="scss" scoped>
// 定义变量
$padding: 10px;
$white: #fff;

/* 弹出框样式 动画 */
.info-wapper {
    position: fixed;
    top: 20px;
    width: 200px;
}

.info {
    padding: 20px;
    color: white;
    background: red;
}

.modal-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}

.modal-enter-active {
    transition: all 0.3s ease;
}

.modal-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}

.modal-leave-active {
    transition: all 0.3s ease;
}

/* 垃圾桶样式 */
.dustbin {
    font-size: 40px;
    position: fixed;
    align-items: flex-end;
    justify-content: end;
    right: 10px;
    top: 10px;
}

/* 删除按钮样式 */
.remove-btn {
    padding: 3px;
    cursor: pointer;
}

/* js删除 移动垃圾桶动画 */
.animate-wrap .animate {
    position: fixed;
    right: 10px;
    top: 11px;
    z-index: 100;
    transition: all 0.5s linear;
}

/* 删除 条目 条目动画 */
// li {
//     display: flex;
//     margin-right: 10px;
//     width: 50%;
//     left: 25%;
//     right: 25%;
//     display: inline-block;
// }

ul {
    width: 500px;
    margin: 0 auto;
    padding: 0;
    li {
        &:hover {
            cursor: pointer;
        }
        list-style-type: none;
        margin-bottom: $padding;
        padding: $padding;
        background: $white;
        box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 1.0);
    }
}

li:hover {
    background-color: hotpink;
    transition: all 0.8s ease;
}

/* .flip-list-move {
    transition: transform 0.8s ease;
} */
.flip-list-enter-active,
.flip-list-leave-active {
    transition: all .8s ease;
}

.flip-list-enter-from,
.flip-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}


</style>