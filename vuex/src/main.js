import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import Vuex from 'vuex'


Vue.use( Vuex )

const store = new Vuex.Store({
  state:{
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  getters:{ //添加getters
    saleProducts: (state) => {
      let saleProducts = state.products.map( product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    }
  },

  mutations:{ //添加mutations
    minusPrice (state, payload ) {
      let newPrice = state.products.forEach( product => {
        product.price -= payload
      })
    }
  }
  
})



new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
