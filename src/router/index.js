//router.js
import {
	createRouter,
	createWebHistory
} from "vue-router";

import Main from '../views/main.vue'
import home from './modules/home.js'
import login from './modules/login.js'

const routes = [
	// 访问主链接进入
	{
		path: '/',
		component: Main,
		redirect: '/home',	// 重定向，进入就跳转到
		children: [
			home,
			login,
		]
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

export const asyncRoutes = [
	// home,
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
