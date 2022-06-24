// 自定义一个简单的 vuex ,

import {inject, reactive } from 'vue'
import { Store } from 'vuex'

const STORE_KEY = '__store__'
function useStore() {
    return inject(STORE_KEY)
}

function createStore(options) {
    return new Store(options)
}

class Store {
    constructor(options) {
        this._state = reactive({
            data: options.state()
        })
        this._mutations = options.mutations
    }
    //Store 类内部变量 _state 存储响应式数据，读取的时候直接获取响应式数据_state.data, 并且提供了commit函数去执行用户配置好的mutations
    get state() {
        return this._state.data
    }

    commit = (type, payload) => {
        const entry = this._mutations[type]
        entry && entry(this.state, payload)
    }
    // main.js 入口处，app.use(store) 的时候会执行这个函数
    install(app) {
        app.provide(STORE_KEY, this)
    }
}

export { createStore, useStore }