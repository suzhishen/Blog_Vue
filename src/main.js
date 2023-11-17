import { createApp } from 'vue'
import App from './App.vue'
import router from './router'	// 路由文件	npm install vue-router@4
import store from './store'		// 状态管理文件	npm install vuex@4
import ElementPlus from 'element-plus'

// JS
// import yourJavaScriptFile from './path/to/yourJavaScriptFile.js';

// CSS
import 'element-plus/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import "~bootstrap/scss/bootstrap.scss";
// import * as bootstrap from 'bootstrap'

import './styles/normalize.css';
import './styles/media.css';
import './styles/global.css';
import './styles/index.css';

// 调用自定义初始化函数
(function() {
	var fnText_Popup = function(arr) {
		var index = 0;
		// 随机提示
		// var index = Math.round(Math.random() * 11);
		document.documentElement.addEventListener('click', function(event) {
			var x = event.pageX; //获取鼠标所距离X轴位置  包括右拉位置
			var y = event.pageY; //获取鼠标所距离Y轴位置  包括下拉位置
			// 创建span标签
			var span_Text = document.createElement('span');
			span_Text.className = 'text-popup';
			// 在末尾追加新元素
			this.appendChild(span_Text);
			if (arr[index]) {
				span_Text.innerHTML = arr[index];
			} else {
				index = 0
				span_Text.innerHTML = arr[0];
				// 随机提示
				// index = Math.round(Math.random() * 11);
				// span_Text.innerHTML = Math.round(Math.random() * 11);
			}
			// 动画结束后删除自己
			span_Text.addEventListener('animationend', function() {
				span_Text.parentNode.removeChild(span_Text);
			});
			span_Text.style.left = (x - span_Text.clientWidth / 2) + 'px';
			span_Text.style.top = (y - span_Text.clientHeight) + 'px';
			// index递增
			index++;
			// 随机提示
			// index = Math.round(Math.random() * 11);

			// 获取document的自身宽度
			var d = document.documentElement.clientWidth;
			// 为了让弹出的文字不超出document左右大小来撑大document
			if (x >= d - (span_Text.clientWidth / 2)) {
				span_Text.style.left = (x - span_Text.clientWidth) + 'px';
			} else if ((span_Text.clientWidth / 2) >= x) {
				span_Text.style.left = ((span_Text.clientWidth / 2) / 2) + 'px';
			} else {
				return;
			}
		});
	}
	fnText_Popup(['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']);
})();

const APP = createApp(App)

APP.use(ElementPlus)
APP.use(store)
APP.use(router)

APP.mount('#app')