// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Tabbar, TabbarItem } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { Divider } from 'vant';

Vue.use(Divider);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
