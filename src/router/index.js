//router.js
import {
	createRouter,
	createWebHistory
} from "vue-router";

import Home from '../views/home/index.vue'

const routes = [
	// 访问主链接进入
	{
		path: '/',
		component: Home,
		redirect: '/home',	// 重定向，进入就跳转到
		children: [{
			path: 'home',
			name: 'Home',
			hidden: true,
			alwaysShow: true,
			component: () => import('@/views/home/index.vue'),
			meta: {
				title: '首页',
				icon: 'dashboard',
				affix: true
			}
		}]
	},
	// 添加其他路由
	{
		path: '/login',
		component: () => import('@/views/login/index.vue'),
		hidden: true
	},
	{
		path: '/404',
		component: () => import('@/views/404.vue'),
		hidden: true
	},
];

const asyncRoutes = [
	// purchasing,
	// admin,
	// 404 page must be placed at the end !!!
	{
		path: '*',
		redirect: '/404',
		hidden: true
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes
});
export default router;
