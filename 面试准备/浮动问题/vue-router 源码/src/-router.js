let Vue
class VueRouter {
	constructor(options) {
		this.mode = options.mode || 'hash'
		this.routes = options.routes
		this.mapRouter = this.generateMap(this.routes)
		this.currentrouter = new HistoryRouter()
		this.initRouter()
	}
	generateMap(routes) {
		let routers = {}
		routes.forEach(item => {
			routers[item.path] = item.component
		})
		return routers
	}
	initRouter() {
		if (this.mode === 'hash') {
			location.hash ? "" : location.hash = '#/'
			window.addEventListener('load', () => {
				this.currentrouter.current = location.hash.slice(1)
			})
			window.addEventListener('hashchange', () => {
				this.currentrouter.current = location.hash.slice(1)
			})
		}
		else {
			location.pathname ? "" : location.pathname = '/'
			window.addEventListener('load', () => {
				this.currentrouter.current = location.pathname
			})
			window.addEventListener('popstate', () => {
				this.currentrouter.current = location.pathname
			})
		}
	}
}
class HistoryRouter {
	constructor() {
		this.current = null
	}
}
VueRouter.install = function (_vue) {
	Vue = _vue
	Vue.mixin({
		beforeCreate() {
			if (this.$options && this.$options.router) {
				this._router = this.$options.router
				this._root = this
				Vue.util.defineReactive(this, 'route', this._router.currentrouter)
			}
			else {
				this._root = this.$parent._root
			}
			Object.defineProperty(this, '$router', {
				get() {
					return this._root._router
				}
			})
			Object.defineProperty(this, '$route', {
				get() {
					return {
						current: this._root._router.currentrouter.current
					}
				}
			})
		}
	})
	Vue.component('router-view', {
		render(h) {
			let current = this._self._root._router.currentrouter.current
			let routers = this._self._root._router.mapRouter
			return h(routers[current])
		}
	})
	Vue.component('router-link', {
		props: {
			tag: String,
			to: String
		},
		methods: {
			clickHandle() {

				event && event.defaultPrevented && event.defaultPrevented()
				let mode = this._self._root._router.mode
				let path = this.to || this._self._root._router.currentrouter.current
				this._self._root._router.currentrouter.current = path
				if (mode === 'hash') {
					window.history.pushState({}, "", '#/' + path.slice(1))
				}
				else {
					window.history.pushState({}, "", path.slice(1))
				}
			}
		},
		render(h) {
			let tag = this.tag || 'a'
			let to = this.to || this._self._root._router.currentrouter.current
			return h(
			tag,{
				attrs:{
					href:this._self._root._router.mode === 'hash' ? `#${to}` : to
				},
				on:{
					click:this.clickHandle
				}
			},this.$slots.default
			)
		}
	})
}
export default VueRouter