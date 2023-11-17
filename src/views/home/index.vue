<!-- <template>
	<header id="header" class="app-header row">
		<div id="topnav">
			<div class="hidden-xs col-sm-3 col-md-2 topnav_div1">
				<a href="javascript:;" class="blog">博客园</a>
			</div>
			<div class="col-sm-9 col-md-7 topnav_div2">
				<a href="javascript:;" class="blog">博客园</a>
			</div>
			<div class="hidden-xs hidden-sm col-md-3 topnav_div3">
				<a href="javascript:;" class="blog">博客园</a>
			</div>
		</div>
	</header>
	<div class="common-layout row" id="midland">
		<el-container>
			<el-aside class="hidden-xs col-sm-3 col-md-2">
				<blog-menu />
			</el-aside>
			<el-main class="col-sm-9 col-md-7" id="blog_midland">
				<div class="midland_header">
					<h1 class="midland_header_1">之深</h1>
					<div class="midland_header_2 color_777">12345678910111213141516171819</div>
				</div>
			</el-main>
			<el-aside class="hidden-xs hidden-sm col-md-3">Aside</el-aside>
		</el-container>
	</div>
</template> -->

<template>
	<header id="header" class="app-header">
		<div id="topnav">
			<el-row>
				<el-col :sm="6" :md="4">
					<div class="hidden-xs-only topnav_div1">
						<a href="javascript:;" class="blog">博客园</a>
					</div>
				</el-col>
				<el-col :xs="24" :sm="18" :md="15">
					<div class="topnav_div2">
						<a href="javascript:;" class="blog">博客园</a>
					</div>
				</el-col>
				<el-col :md="5">
					<div class="hidden-sm-and-down topnav_div3">
						<a href="javascript:;" class="blog">博客园</a>
					</div>
				</el-col>
			</el-row>
		</div>
	</header>
	<div id="midland">
		<el-row>
			<el-col :sm="6" :md="4">
				<div class="hidden-xs-only">
					<el-aside>
						<blog-menu />
					</el-aside>
				</div>
			</el-col>
			<el-col :sm="18" :md="15">
				<el-main id="blog_midland">
					<div class="midland_header hidden-xs-only">
						<h1 class="midland_header_1">之深</h1>
						<div class="midland_header_2 color_777">12345678910111213141516171819</div>
					</div>
				</el-main>
			</el-col>
			<el-col :md="5">
				<div class="hidden-sm-and-down">
					<el-aside>Aside</el-aside>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import BlogMenu from '../../components/Menu/index.vue' // 导入文件

	// 隐藏 layout 布局
	// https://element-plus.org/zh-CN/component/layout.html#%E5%9F%BA%E4%BA%8E%E6%96%AD%E7%82%B9%E7%9A%84%E9%9A%90%E8%97%8F%E7%B1%BB
	import 'element-plus/theme-chalk/display.css' // 隐藏 layout 布局

	export default {
		components: {
			// 引入静态组件【导入的文件】
			BlogMenu
		},
		methods: {
			toAbout() {
				this.$router.push('/404')
			}
		}
	}
</script>

<style>
</style>