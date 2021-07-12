import axios from 'axios'
// import { message } from 'antd'


// 我的页面
import {myPageIndexUserCardInfo,about30GameList,myPageIndexGameInfo,allGameData,awardHistoryData} from './Mypage'



const baseWeb = '/rps/';
const baseWebsite = '/rpi/';

const qs = require('qs')


// 登录
const indexLogin = `${baseWeb}login`
// 注册
const indexRegister = `${baseWebsite}websitsMember/register`;
// 国家列表
const countryList = `${baseWeb}countrylist`
// 首页新闻列表
const indexNewsList = `${baseWebsite}websitenews/officialNewsList`
// 首页店铺列表
const indexShopList = `${baseWebsite}websiteshop/newShop`
// 首页轮播图列表
const indexBannerList = `${baseWebsite}banner/bannerShow`
// 首页用户卡列表
const indexUserCardList = `${baseWebsite}websitsMember/memberCardALL`
// 上传图片接口
const upLoadImg = `${baseWebsite}news/uploadAbsolutelyPictures`

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
const indexRegisterHttp = (data:any) =>{
	return axios.post(indexRegister, data)
}
const indexUserCardListHttp = (data:any) =>{
	return axios.post(getNewUrl(indexUserCardList, data))
}
const upLoadImgHttp = (data:any) =>{
	return axios.post(upLoadImg, data);
}

// 我的页面首页卡
const myPageIndexUserCardInfoHttp = (data:any) =>{
	return axios.post(myPageIndexUserCardInfo, qs.stringify(data));
}
// 我的页面首页游戏资料
const myPageIndexGameInfoHttp = (data:any) =>{
	return axios.post(myPageIndexGameInfo, qs.stringify(data));
}
const about30GameListHttp = (data:any) =>{
	return axios.post(about30GameList, qs.stringify(data));
}
// 我的页面整体数据
const allGameDataHttp = (data:any) =>{
	return axios.post(allGameData, qs.stringify(data));
}
// Award记录数据
const awardHistoryDataHttp = (data:any) =>{
	return axios.post(awardHistoryData, qs.stringify(data));
}

axios.interceptors.request.use(function(config) {
    const token = sessionStorage.getItem('websiteToken');
		// let flag = false
		// const NotLoginServer = ['login','newShop','officialNewsList','bannerShow','countrylist']
		// NotLoginServer.forEach(i =>{
		// 	if(config.url?.includes(i)){
		// 		flag = true
		// 	}
		// })
		// if(flag && !token){
		// 		message.info('未登录');
		// }else{
			config.headers.common['Authorization'] = token;
		// }
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
		indexUserCardListHttp,
		countryListHttp,
		upLoadImgHttp,
		indexRegisterHttp,
		myPageIndexUserCardInfoHttp,
		myPageIndexGameInfoHttp,
		about30GameListHttp,
		allGameDataHttp,
		awardHistoryDataHttp
}