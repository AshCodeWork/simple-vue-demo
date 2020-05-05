let Vue;

class VueRouter {
    constructor (options) {
        this.$options =options;
        let pathMap = {}
        function addPathMap (route, path) {
            if(!path) {
                console.warn('path 不能为空')
                return
            }

            if(route.children && route.children.length) {
                route.children.forEach(child => {
                    let parentPath = /\/$/.test(route.path) ? route.path : route.path + '/'
                    addPathMap(child, parentPath + child.path)
                })
            }
            pathMap[path] = route
        }
        this.$options.routes.forEach(route => {
            addPathMap(route, route.path)
        })

        this.pathMap = pathMap

        Vue.util.defineReactive(this, 'current', '')

        window.addEventListener('hashchange', this.onHashChange.bind(this));
        window.addEventListener('load', this.onHashChange.bind(this) )
    }

    onHashChange () {
        let current = window.location.hash.slice(1) || '/'
        // console.log(current)
        this.current = current
    }
}
VueRouter.install = function (_Vue) {
    Vue = _Vue

    Vue.mixin({
        beforeCreate () {
            if(this.$options.router) {
                Vue.prototype.$router = this.$options.router
            }
        }
    })

    const View = {
        render (h) {
            let component = null
            const { pathMap, current } = this.$router
            if (pathMap[current]) {
                component = pathMap[current].component
            }
            return h(component)
        }
    }
    // router-link: 生成一个a标签，在url后面添加#
    // <a href="#/about">aaaa</a>
    // <router-link to="/about">aaa</router-link>
    const Link = {
        props: {
            to: {
                type: String,
                required: true
            }
        },
        render (h) {
            const { current } = this.$router;
            return h('a',
                { 
                    attrs: { href: '#' + this.to },
                    class: {
                        'router-link-exact-active': current === this.to
                    }
                },
                this.$slots.default// 默认的插槽内容
            )
        }
    }
    Vue.component('router-view', View)
    Vue.component('router-link', Link)
}
export default VueRouter