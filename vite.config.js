import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue' // 引入Unocss

// 引入Unocss
// import Unocss from 'unocss/vite';
// import {
// 	presetUno,
// 	presetAttributify,
// 	presetIcons
// } from "unocss"
import path from 'path'

// import { fileURLToPath } from 'url'
// const __filenameNew = fileURLToPath(import.meta.url)
// const __dirnameNew = path.dirname(__filenameNew)


// https://vitejs.dev/config/
// export default defineConfig({
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: { // 这里就是需要配置resolve里的别名
			// '@': fileURLToPath(new URL('/src', import.meta.url)),
			// '@': path.resolve(__dirname, './src')
			"@": path.join(__dirname, "./src"), // path记得引入
			// '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),	// 引入 bootstrap？
		},
	},
	lintOnSave: false, // 关闭eslint校验
	outDir: 'dist',
	build: {
		chunkSizeWarningLimit: 1500,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString();
					}
				}
			}
		}
	},

	server: {
		host: 'localhost',
		port: '3000',
		// 是否自动在浏览器打开
		open: true,
		// 是否开启 https
		https: false,
		// 服务端渲染
		ssr: false,
		overlay: {
			warnings: false,
			errors: true
		},
		proxy: {
			'/api': {
				target: 'http://192.168.2.105:8011', //跨域地址
				changeOrigin: true, //支持跨域
				rewrite: (path) => path.replace(/^\/api/, ''),
			}
		}
	}
})