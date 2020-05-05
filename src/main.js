import Vue from 'vue'
import App from './App.vue'
import CreateNotice from './components/notice/createNotice'
import Notice from './components/notice/Notice.vue'
import router from './lrouter'
import store from './lstore'

Vue.prototype.$notice = (props) => {
  CreateNotice(Notice, props) 
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
