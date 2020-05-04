import Vue from 'vue'
import App from './App.vue'
import CreateNotice from './components/notice/createNotice'
import Notice from './components/notice/Notice.vue'

console.log(CreateNotice)
Vue.prototype.$notice = (props) => {
  CreateNotice(Notice, props) 
}
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
