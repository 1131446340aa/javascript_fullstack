import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { Button, CarouselItem , Carousel , Divider} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button)
Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(Divider)
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
