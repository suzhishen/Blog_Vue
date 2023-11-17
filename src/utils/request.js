import axios from 'axios'

// axios函数请求的url地址前面会被拼接基地址, 即为axios请求baseURL+url后台完整地址
const request = axios.create({
	baseURL: '/api',	// proxy 代理名称
	timeout: 1000 * 30,	// 请求时间 30 s
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json; charset=utf-8'
	}
})

// request interceptor
request.interceptors.request.use(
	config => {
		config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
		// do something before request is sent
		// if (store.getters.token) {
		//   // let each request carry token
		//   // ['X-Token'] is a custom headers key
		//   // please modify it according to the actual situation
		//   // config.headers['X-Token'] = getToken()
		//   // config.headers.cookie = getToken()
		// }
		return config
	},
	error => {
		// do something with request error
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

// 导出自定义的axios方法, 供外面调用传参发请求
export default request