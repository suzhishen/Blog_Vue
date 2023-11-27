<template>
  <header id="header" class="app-header">
    <div id="topnav">
      <el-row>
				<span class="call_menu_button" ref="call_menu_button" v-if="show_menu_ref" @click="showMenuFun">
					<Expand style="width: 1.5em; height: 3em" class="hidden-sm-and-up expand" />
				</span>
        <span class="call_menu_button" ref="call_menu_button" v-if="!show_menu_ref" @click="hiddenMenuFun">
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
      <el-col :sm="6" :md="4" id="left">
        <el-container class="layout-container" ref="layout_container" :style="adaptiveHeightStyle"
                      :class="{'show_menu': !show_menu_ref, 'hidden_menu': show_menu_ref}">
          <el-aside id="menu" ref="menu" @click="handleHeight">
            <blog-menu @menuButtonClick="handleMenuButtonClick"/>
          </el-aside>
        </el-container>
      </el-col>
      <el-col :sm="18" :style="leftStyle" :class="{'el-col-md-15': md15, 'el-col-md-20': md20}">
        <div class="resize_left_line" v-on:mousemove="mouseEnterHandler" v-show="md20"
             @mouseover="mouseoverFun(true, false)" @mouseleave="mouseleaveFun(true, false)"
             @mousedown="mousedownFun(true, false)">
          <!--					<CaretLeft id="caret_left" :style="{'top':mouseY}" v-show="caretLeft" />-->
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 15 15" id="caret_left" :style="{'top':mouseY}" v-show="caretLeft">
            <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
          </svg>
        </div>
        <el-main id="blog_midland" :style="adaptiveHeightStyle">
          <div class="midland_header hidden-xs-only">
            <h1 class="midland_header_1">{{ title }}</h1>
            <div class="midland_header_2 color_777">12345678910111213141516171819</div>
          </div>
          <router-view />
          <div>
            页码
          </div>
          <div>
            备案号
          </div>
        </el-main>
      </el-col>
      <el-col id="right" ref="right" :class="{'el-col-md-5': hiddenRight}" :style="rightStyle">
        <div class="resize_right_line" v-on:mousemove="mouseEnterHandler" @mouseover="mouseoverFun(false, true)"
             @mouseleave="mouseleaveFun(false, true)" @mousedown="mousedownFun(false, true)">
          <!--					<CaretRight id="caret_right" :style="{'top':mouseY}" v-show="caretRight" />-->
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 15 15" id="caret_right" :style="{'top':mouseY}" v-show="caretRight">
            <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
          </svg>
        </div>
        <div class="hidden-sm-and-down">
          <el-aside :style="adaptiveHeightStyle">
            <div style="padding-top: 200px">
              Aside
            </div>
            <div style="padding-top: 200px">
              Aside
            </div>
            <div style="padding-top: 200px">
              Aside
            </div>
            <div style="padding-top: 200px">
              Aside
            </div>
            <div style="padding-top: 200px">
              Aside
            </div>
          </el-aside>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  inject,
  ref
} from "vue";
import BlogMenu from '../components/Menu/index.vue' // 导入文件
import 'element-plus/theme-chalk/display.css' // 隐藏 layout 布局
export default {
  data() {
    return {
      show_menu_ref: false,
      mouseY: null,
      caretRight: false,
      caretLeft: false,
      md15: true,
      md20: false,
      hiddenRight: true,
      timer: false,
      title: '首页',
      leftStyle: ref({
        'transition': 'all .5s ease 0s'
      }),
      rightStyle: ref({
        'position': 'absolute',
        'right': 0,
        'height': '100%',
        'transition': 'all .5s ease 0s',
      })
    };
  },
  mounted() {
    window.addEventListener('resize', this.onchangeRight);
  },
  components: {
    // 引入静态组件【导入的组件文件】
    BlogMenu
  },
  methods: {
    // toAbout() {
    // 	this.$router.push('/404')
    // },
    showMenuFun() {
      this.show_menu_ref = false;
      this.clickTime()
    },
    hiddenMenuFun() {
      this.show_menu_ref = true
      this.clickTime()
    },
    clickTime() {
      // 设置0.3秒内不能再点击
      setTimeout(() => {
        this.$refs.call_menu_button.style.pointerEvents = 'none'
      });
      setTimeout(() => {
        this.$refs.call_menu_button.style.pointerEvents = 'auto'
      }, 300);
    },
    mouseEnterHandler(event) {
      // 获取鼠标坐标并更新数据
      // this.mouseY = event.layerY - 62;
      this.mouseY = event.clientY - 56;
    },
    mouseoverFun(caret_left, caret_right) {
      console.log('悬停')
      if (caret_left) {
        this.caretLeft = true
      } else if (caret_right) {
        this.caretRight = true
      }
    },
    mouseleaveFun(caret_left, caret_right) {
      console.log('离开')
      // window.clearTimeout(this.timer)
      if (caret_left) {
        this.caretLeft = false
      } else if (caret_right) {
        this.caretRight = false
      }
    },
    mousedownFun(caret_left, caret_right) {
      let rightRefWidth = this.$refs.right.$el.clientWidth
      if (caret_left) {
        this.hiddenRight = true
        this.md15 = true
        this.md20 = false
        this.rightStyle['right'] = '0%'
      } else if (caret_right) {
        this.hiddenRight = false
        this.md15 = false
        this.md20 = true
        this.rightStyle['right'] = '-' + rightRefWidth.toString() + 'px'
      }
    },
    onchangeRight(){
      if (!this.hiddenRight) {
        let rightRefWidth = this.$refs.right.$el.clientWidth
        this.rightStyle['right'] = '-' + rightRefWidth.toString() + 'px'
      }
    },
    handleMenuButtonClick(message) {
      // console.log('按钮被点击了！子组件传递的信息:', message);
      this.title = message.label;
    },
  },
  // beforeRouteUpdate(to, from, next) {
  //   // 在子路由发生变化时触发
  //   console.log('子路由发生变化');
  //   // 继续导航
  //   next();
  // },

  // watch: {
  //   // 用于监听数据的变化并执行相应的回调函数。它通常用于响应式地处理数据的变化
  //   '$route'(to, from) {
  //     console.log('监听$route')
  //   }
  // }
}
</script>

<script setup>
import {
  Expand,
  Fold,
  CaretRight,
  CaretLeft
} from '@element-plus/icons-vue'
import {
  inject,
  ref
} from "vue";


const adaptiveHeightStyle = ref({
  'height': null
});

const handleHeight = () => {
  adaptiveHeightStyle.value.height = (window.innerHeight - 50).toString() + 'px';
};
handleHeight()
window.addEventListener('resize', handleHeight);
</script>


<style>
</style>