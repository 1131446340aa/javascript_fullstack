// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import {Upload,dialog } from 'element-ui';
import "./assets/font/iconfont.css";
import "./assets/font/iconfont.js";
import Navigation from 'vue-navigation'
import { Tabbar, TabbarItem } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { Divider } from 'vant';
import { Search } from 'vant';
import { Lazyload } from 'vant';
import { Tab, Tabs } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NavBar } from 'vant';
import { Icon } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
import { Loading } from 'vant';
import { Toast } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
// import 'lib-flexible/flexible'
import { Notify } from 'vant';
import { Rate } from 'vant';
import { Form } from 'vant';
import { NumberKeyboard } from 'vant';
import { Skeleton } from 'vant';
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
Vue.use(Skeleton);
Vue.use(dialog);
Vue.use(Upload);
Vue.use(NumberKeyboard);
Vue.use(Form);
Vue.use(Rate);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Notify);
Vue.use(Toast);
Vue.use(Loading);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(Field);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Lazyload);
Vue.use(Search);
Vue.use(Divider);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Navigation, { router });
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
