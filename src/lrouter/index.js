import Vue from 'vue'
import Lrouter from './Lrouter'
import Home from '../views/Home.vue'
import Child from '../views/Child.vue'

Vue.use(Lrouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
        {
            path: 'child',
            name: 'Child',
            component: Child
        }
    ]
  }
]

const router = new Lrouter({
  routes
})

export default router