// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navigation from 'vue-navigation'
import { Tabbar, TabbarItem } from 'vant';
import { Search } from 'vant';
import { Lazyload } from 'vant';
import { PullRefresh } from 'vant';
import { Loading } from 'vant';
import { Toast } from 'vant';
import { Rate } from 'vant';
import { Tab, Tabs } from 'vant';
Vue.prototype.HOST = '/api'
import { Popup } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Picker } from 'vant';
import { Col, Row } from 'vant';
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
Vue.use(Col);
Vue.use(Row);
Vue.use(Navigation,{router});
Vue.use(Picker);
Vue.use(Button);
Vue.use(Field);
Vue.use(Popup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Rate);
Vue.use(Toast);
Vue.use(Loading);
Vue.use(PullRefresh);
Vue.use(Lazyload);
Vue.use(Search);
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
