// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // data () {
  //   return {
  //     count: 1
  //   }
  // },
  router,
  components: { App },
  template: '<App/>'
  // methods: {
  //   increment () {
  //     this.count++
  //   }
  // }
})
// console.log(vue)
// const store = new Vuex.Store({
//   state: {
//     count: 1
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

// console.log('store', store)

// store.commit('increment')

// console.log('dasdasa', store.state.count)
