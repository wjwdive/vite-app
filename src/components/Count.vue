<template>
    <div @click="add">
        {{count}}
    </div>
</template>

<script setup>
import { computed } from 'vue'
import {  useStore }  from 'vuex'

let store = useStore()
let count = computed(() => store.state.count)

function add() {
    store.commit('add')
}

// const store = createStore({
//     state(){
//         return {
//             count: 66
//         }
//     },
//     getters: {
//         double(state) {
//             return state.count*2
//         }
//     },
//     mutations: {
//         add(state) {
//             state.count++
//         }
//     }
// })
// export default store

</script>