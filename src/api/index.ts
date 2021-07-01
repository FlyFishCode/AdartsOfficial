import axios from 'axios'
import { message } from 'antd'

const baseWeb = '/rps/';
const baseWebsite = '/rpi/';

// 登录
const indexLogin = `${baseWeb}login`
// 国家列表
const countryList = `${baseWeb}countrylist`
// 首页新闻列表
const indexNewsList = `${baseWebsite}websitenews/officialNewsList`
// 首页店铺列表
const indexShopList = `${baseWebsite}websiteshop/newShop`
// 首页轮播图列表
const indexBannerList = `${baseWebsite}banner/bannerShow`

const indexLoginHttp = (data:any) =>{
    return axios.post(getNewUrl(indexLogin, data))
}
const indexNewsListHttp = (data:any) => {
    return axios.post(getNewUrl(indexNewsList, data))
}
const indexShopListHttp = (data:any) =>{
	return axios.post(getNewUrl(indexShopList, data))
}
const indexBannerListHttp = (data:any) =>{
	return axios.post(getNewUrl(indexBannerList, data))
}
const countryListHttp = ()=>{
	return axios.get(countryList)
}

axios.interceptors.request.use(function(config) {
    const token = sessionStorage.getItem('websiteToken');
		let flag = false
		const NotLoginServer = ['login','newShop','officialNewsList','bannerShow','countrylist']
		NotLoginServer.forEach(i =>{
			if(config.url?.includes(i)){
				flag = true
			}
		})
		if(!flag && !token){
				message.info('未登录');
		}else{
			config.headers.common['Authorization'] = token;
		}
    return config;
}, function(error) {

    return Promise.reject(error);
});


axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {

    return Promise.reject(error);
});

const getNewUrl = (url: string, data: any = null) => {
	if (data) {
		let src = url + '?';
		for (const [key, value] of Object.entries(data)) {
			src += `${key}=${value}&`;
		}
		return src.substring(0, src.length - 1);
	}
	return url;
};


export {
    indexLoginHttp,
    indexNewsListHttp,
		indexShopListHttp,
		indexBannerListHttp,
		countryListHttp
}