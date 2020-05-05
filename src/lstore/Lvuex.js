let Vue;

class Store {
    constructor (options) {
        this._vm = new Vue ({
            data: {
                $$state: options.state
            }
        })
        this._mutations = options.mutations;
        this._actions = options.actions;

        // 实现getter
        const computed = {}
        function forEachValue (obj, fn) {
            Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
        }
        function partial (fn, arg) {
            return function () {
              return fn(arg)
            }
        }
        forEachValue(options.getters, (fn, key) => {
            // use computed to leverage its lazy-caching mechanism
            // direct inline function use will lead to closure preserving oldVm.
            // using partial to return function with only arguments preserved in closure environment.
            computed[key] = partial(fn, this);
            Object.defineProperty(this.getters, key, {
                get: function () { return this._vm[key]; },
                enumerable: true // for local getters
            });
        })
        this._vm.computed = computed
       

        this.commit = this.commit.bind(this);
        this.dispatch = this.dispatch.bind(this);
    }

    set state(val){
        console.error('不能直接赋值呀，请换别的方式');
    }

    get state() {
        return this._vm._data.$$state
    }
    // 实现commit方法，可以修改state
    commit (type, payload) {
        const entry = this._mutations[type];
        if(!entry) {
            console.error('未知mutaion类型')
            return
        }
        entry(this.state, payload)
    }

    dispatch(type, payload) {
        const entry = this._actions[type];
        if(!entry) {
            console.error('未知action类型')
            return
        }
        entry(this, payload)
    }
}

function install (_Vue) {
    Vue = _Vue;
    // 混入store实例
    Vue.mixin({
        beforeCreate () {
            if(this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}

export default { Store, install }