import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Cart from './components/Cart.vue'
import Product from './components/Product.vue'
import Test from 'components/test.vue'
import Slide from 'components/slider.vue'
import Page from 'components/page.vue'

const router = new VueRouter({
	routes: [
		{
			path: '/prodcut',
			component: Product
		},
		{
			path: '/cart',
			component: Cart
		},
		{
			path: '/test',
			component: Test
		},
		{
			path: '/slide',
			component: Slide
		},
		{
			path: '/page',
			component: Page
		},
		{
			path: '*',
			redirect: '/prodcut'
		}
	]
})

export default router;