let Vue // 用于保存vue实例
class VueRouter {
	// router类
	constructor(options) {
		// 默认为hash模式
		this.mode = options.mode || 'hash'
		this.routes = options.routes || []
		// 路由映射表
		this.routeMaps = this.generateMap(this.routes)
		// 当前路
		this.currentHistory = new historyRoute()
		// 初始化路由函数
		this.initRoute()
		
		
	}
	generateMap(routes) {
		// let prev = {}
		// routes.forEach(item => {
		// 	prev[item.path] = item.component
		// })
		// return prev
		return routes.reduce((prev, current) => {
			prev[current.path] = current.component
			return prev
		}, {})
	}
	initRoute() {
		// 这里仅处理hash模式与history模式
		if (this.mode === 'hash') {
			// 先判断用户打开时url中有没有hash，没有重定向到#/
			location.hash ? '' : (location.hash = '/')
			// 监控浏览器load事件,改变当前存储的路由变量
			window.addEventListener('load', () => {
				this.currentHistory.current = location.hash.slice(1)
			})
			window.addEventListener('hashchange', () => {
				this.currentHistory.current = location.hash.slice(1)
			})
		} else {
			location.pathname ? '' : (location.pathname = '/')
			window.addEventListener('load', () => {
				this.currentHistory.current = location.pathname
			})
			window.addEventListener('popstate', () => {
				this.currentHistory.current = location.pathname
			})
		}
	}
}
class historyRoute {
	constructor() {
		this.current = null
	}
}
VueRouter.install = function (_vue) {
	// 装载函数
	//每个组件都有 this.$router / this.$route 所以要mixin一下
	Vue = _vue
	// 在每个组件中都可以获取到 this.$router与this.$route，这里进行混入vue实例中
	Vue.mixin({
		beforeCreate() {
			// 如果是根组件则
			if (this.$options && this.$options.router) {
				
				this._root = this //把当前vue实例保存到_root上
				this._router = this.$options.router // 把router的实例挂载在_router上
				//利用vue工具库对当前路由进行劫持
				console.log(this);
			
				Vue.util.defineReactive(this, 'route', this._router.currentHistory)
			} else {
				// 如果是子组件则去继承父组件的实例(这样所有组件共享一个router实例)
				this._root = this.$parent._root
			}
			// 定义router实例 当访问this.$router时即返回router实例
			Object.defineProperty(this, '$router', {
				get() {
					return this._root._router
				}
			})
			// 定义route 当访问this.$route时即返回当前页面路由信息
			Object.defineProperty(this, '$route', {
				get() {
					console.log(this._root._router.history.current);
					return {
						// 当前路由
					
						
						current: this._root._router.history.current
					}
				}
			})
		}
	})
	// 全局注册 router的两个组件
	Vue.component('router-link', {
		props: {
			to: String,
			tag: String
		},
		methods: {
			handleClick(event) {
				// 阻止a标签默认跳转
				event && event.preventDefault && event.preventDefault()
				let mode = this._self._root._router.mode
				let path = this.to
				this._self._root._router.currentHistory.current = path
				if (mode === 'hash') {
					window.history.pushState({}, '', '#/' + path.slice(1))
				} else {
					window.history.pushState({}, '', path.slice(1))
				}
			}
		},
		render(h) {
			let mode = this._self._root._router.mode
			let tag = this.tag || 'a'
			
			return (
				<tag on-click={this.handleClick} href={mode === 'hash' ? `#${this.to}` : this.to}>
					{this.$slots.default}
				</tag>
			)
		}
	})
	Vue.component('router-view', {
		render(h) {
			// 这里的current通过上面的劫持已经是动态了
			
			
			let current = this._self._root._router.currentHistory.current
			let routeMap = this._self._root._router.routeMaps
			return h(routeMap[current]) // 动态渲染对应组件
		}
	})
}
export default VueRouter