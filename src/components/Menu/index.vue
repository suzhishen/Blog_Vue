<!-- 博客左侧菜单 -->
<template>
	<el-row class="tac">
		<el-col>
			<div id="picture">
				<el-avatar :style="randomColor()">之深</el-avatar>
				<el-avatar :style="randomColor()">之深1</el-avatar>
				<el-avatar :style="randomColor()">之深2</el-avatar>
			</div>
			<el-menu default-active="首页" class="el-menu-blog" @open="handleOpen" @close="handleClose">
				<el-menu-item v-for="item in menuData" v-show="!item.children" v-bind:key="item.name"
					:index="item.label">
					<el-icon>
						<component :is="item.icon" />
					</el-icon>
					<span>{{item.label}}</span>
				</el-menu-item>

				<el-sub-menu v-for="item in menuData" v-show="item.children" v-bind:key="item.name" :index="item.label">
					<template #title>
						<el-icon>
							<component :is="item.icon" />
						</el-icon>
						<span>{{item.label}}</span>
					</template>
					<el-menu-item-group v-for="child in item.children">
						<el-menu-item v-bind:key="child.name" :index="child.label">
							<span>{{child.label}}</span>
						</el-menu-item>
					</el-menu-item-group>
				</el-sub-menu>
			</el-menu>
		</el-col>
	</el-row>
</template>


<script lang="ts" setup>
	import { ref } from 'vue'
	import {
		Document,
		Menu as IconMenu,
		Location,
		Setting,
		House,
		UserFilled
	} from '@element-plus/icons-vue'

	var menuData = [{
		path: "/",
		name: "home",
		label: "首页",
		icon: House,
		url: "Home/Home",
	}, {
		path: "/",
		name: "home",
		label: "归档",
		icon: House,
		url: "Home/Home",
	}, {
		path: "/",
		name: "home",
		label: "投稿",
		icon: House,
		url: "Home/Home",
	}, {
		path: "/",
		name: "home",
		label: "记事本",
		icon: House,
		url: "Home/Home",
	}, {
		path: "/",
		name: "home1",
		label: "留言板",
		icon: Setting,
		url: "Home/Home",
	}, {
		path: "/",
		name: "home2",
		label: "链接库",
		icon: Location,
		url: "Home/Home",
	}, {
		path: "/",
		name: "home2",
		label: "技术分类",
		icon: Location,
		url: "Home/Home",
		children: [{
			path: "/",
			name: "home",
			label: "python",
			url: "Home/Home",
		}, {
			path: "/",
			name: "home",
			label: "odoo",
			url: "Home/Home",
		}]
	}, {
		path: "/",
		name: "home2",
		label: " 友链",
		icon: Location,
		url: "Home/Home",
		children: [{
			path: "/",
			name: "home",
			label: "123",
			url: "Home/Home",
		}, {
			path: "/",
			name: "home",
			label: "321",
			url: "Home/Home",
		}]
	}]

	const handleOpen = (key : string, keyPath : string[]) => {
		console.log(key, keyPath)
	}
	const handleClose = (key : string, keyPath : string[]) => {
		console.log(key, keyPath)
	}

	const randomColor = () => {
		// 生成随机RGB颜色值
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);

		// 返回RGB格式的颜色
		return `backgroundColor:rgb(${r}, ${g}, ${b}, 0.9)`;
	}
</script>

<!-- <style scoped>   scoped 刷新页面才会生效 -->
<style>
	#picture {
		height: 100px;
		line-height: 100px;
		background-color: #f9f9f9;
		border-right: 1px solid #ddd;
		/* padding-top: 20px; */
	}

	.el-menu-blog li {
		color: #777;
	}
	
	.el-menu-blog li div{
		color: #777;
	}

	.el-menu-item.is-active {
		background-color: var(--el-color-primary-light-8);
	}

	.el-avatar--circle {
		background-color: randomColor()
	}

	/* menu */
	.el-menu-blog:not(.el-menu--collapse) {
		width: 100%;
		height: 100vh;
		/* min-height: 800px; */
		background-color: #f9f9f9;
		/* border: none; */
	}
</style>