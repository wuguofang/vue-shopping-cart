import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
    detail: {
        desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
        isselected: false,
        name: 'Apple/苹果 iPhone 6S',
        price: '5288-6088',
        style: {
          '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
          '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
          '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
          '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
        },
        storage: {
          '16GB': 5288,
          '64GB': 6088,
          '128GB': 6888
        },
        activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
        activestyle: '银色'
    },
    cart: []
}
const getters = {
    product (state) {
        return state.detail
    },
    cart(state){
        return state.cart
    }
}
const mutations = {
    CHANGEPRICE (state, params) {
        state.detail.price = params.price;
        state.detail.activestorage = params.key;
        state.detail.isselected = true;
    },
    CHANGESTYLE (state,params) {
        state.detail.activestyle = params.key;
        state.detail.activeStyleUrl = params.styleurl;
    },
    ADDCART (state, params){
        let cartinfo = {
            name: state.detail.name,
            type: state.detail.activestorage,
            color: state.detail.activestyle,
            price: state.detail.price
        }
        state.cart.push(cartinfo);
    }
}
const actions = {
    changeprice ({commit},...args) {
        commit('CHANGEPRICE',...args);
    },
    changestyle ({commit},...args) {
        commit('CHANGESTYLE',...args);
    },
    addcart ({commit},param) {
        commit('ADDCART',param);
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

//组件不可以直接修改store里的state，因为我们想让每次状态的改变明确且可以被追踪，只能通过分发mutations来改变。
//组件中通过getter获取state，如$store.getters.loadingState
//组件中通过dispatch分发状态，如$store.dispatch('tips','请选择所属系统');