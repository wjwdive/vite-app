import { createStore } from 'vuex'
const store = createStore({
    state() {
        count: 666
    },
    mutations: {
        add(state) {
            state.count++
        }
    }
})

export default store