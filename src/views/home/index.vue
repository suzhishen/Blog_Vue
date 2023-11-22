<template>
	<header id="header" class="app-header">
		<div id="topnav">
			<el-row>
				<span class="call_menu_button" ref="call_menu_button" v-if="show_menu_ref" @click="show_menu_fun">
					<Expand style="width: 1.5em; height: 3em" class="hidden-sm-and-up expand" />
				</span>
				<span class="call_menu_button" ref="call_menu_button" v-if="!show_menu_ref" @click="hidden_menu_fun">
					<Fold style="width: 1.5em; height: 3em" class="hidden-sm-and-up fold" />
				</span>
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
		<el-row class="midland_el-row">
			<el-col :sm="6" :md="4">
				<el-container class="layout-container" ref="layout_container" :style="menuStyle"
					:class="{'show_menu': !show_menu_ref, 'hidden_menu': show_menu_ref}">
					<el-aside id="menu" ref="menu"  @click="handleHeight">
						<blog-menu/>
					</el-aside>
				</el-container>
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
	import {inject} from "vue";
	import BlogMenu from '../../components/Menu/index.vue' // 导入文件
	import 'element-plus/theme-chalk/display.css' // 隐藏 layout 布局
	export default {
		data() {
			return {
				show_menu_ref: false,
				// menuStyle: {
				// 	'height': null
				// }
			};
		},
		components: {
			// 引入静态组件【导入的组件文件】
			BlogMenu
		},
		methods: {
			// toAbout() {
			// 	this.$router.push('/404')
			// },
			show_menu_fun() {
				this.show_menu_ref = false;
				this.click_time()
			},
			hidden_menu_fun() {
				this.show_menu_ref = true
				this.click_time()
			},
			click_time() {
				// 设置0.3秒内不能再点击
				// this.$refs.call_menu_button.style.pointerEvents = 'auto'
				setTimeout(() => {
					this.$refs.call_menu_button.style.pointerEvents = 'none'
				});
				setTimeout(() => {
					this.$refs.call_menu_button.style.pointerEvents = 'auto'
				}, 300);
			},
			// handleHeight() {
			// 	this.menuStyle.height = (window.innerHeight - 50) + 'px';
			// }
		},
		// mounted() {
		// 	this.handleHeight();
		// 	window.addEventListener('resize', this.handleHeight);
		// },
		// beforeUnmount() {
		// 	window.removeEventListener('resize', this.handleHeight);
		// }
	}
</script>

<script setup>
	import {Expand, Fold} from '@element-plus/icons-vue'
	import {inject, onMounted, ref} from "vue";


	const menuStyle = ref({
		'height': null
	});
	const handleHeight = () => {
		menuStyle.value.height = (window.innerHeight - 50).toString() + 'px';
	};
	handleHeight()
	window.addEventListener('resize', handleHeight);
	
	// const scroll_Height = ref({
	// 	'height': null
	// });
	// const handleHeight = () => {
	// 	console.log(window.innerHeight)
	// 	scroll_Height.value.height = (window.innerHeight - 50).toString() + 'px';
	// };
	// handleHeight()
	// window.addEventListener('resize', handleHeight);
</script>


<style>
</style>