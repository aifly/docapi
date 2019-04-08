import Vue from "vue";
import Obserable from './common/lib/obserable';
import Main from './common/main/index';
import Home from './components/home/index'

import iView from 'iview';
import VueRouter from 'vue-router'
import './components/css/index.css';
import './components/css/theme.less';

Vue.use(VueRouter)
Vue.use(iView)
var obserable = new Obserable();

Vue.obserable = obserable;
const router = new VueRouter({
  routes: [
		{
			path: "/",
			name: "home",
			component: Home,
			props: true
		},
    {
      path: "/home",
      name: "home",
      component: Home,
      props: true
    },
  ]
});

new Vue({
	router,
	data: {
		obserable,
		viewH: document.documentElement.clientHeight,
	},
	el: '#app',
	template: `<div id="app1">
      <Main :obserable='obserable'></Main>
    </div>`,
	methods: {},
	components: {
		Main,
	},
	mounted() {
		this.$router.obserable = obserable;

	}
}).$mount('#app1')