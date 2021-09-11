import axios from 'axios';
import { message } from 'antd'
// import { useHistory } from 'react-router-dom';

// 公共
import { sendEmail,sendPhone,upLoadImg,shopList } from './common/index';

// 我的页面
import {
	myPageIndexUserCardInfo,
	about30GameList,
	myPageIndexGameInfo,
	allGameData,
	awardHistoryData,
	accountInfo,
	passwordChange,
	accountInfoUpdate,
	adartsCardList,
	adartsCardDelete,
	adartsBind,
	adartsMainCard,
	aboutSevenPlayerList,
	handleFriends,
	friendsList,
	starSetting,
	addFriends
} from './mypage';

// adarts店铺
import { newShopList,shopInfo } from './adartsShop'
// 选手
import { playerList,playerInfo } from './player';
// 飞镖
import { dartsList,dartsInfo } from './darts';
// 活动
import { activityDateList,activityList,activityInfo } from './activity';
// 道具
import { shopPropsList,shopPropsInfo,shopPropsTypeList,myItemAllList,shopPropsBuy,shopPropSet,shopPropUsingList,templateList,templateAdd,templateUpdate,templateDelete } from './shop';

const baseWeb = '/rps/';
const baseWebsite = '/rpi/';

const qs = require('qs');

// 登录
const indexLogin = `${baseWeb}login`
// 注册
const indexRegister = `${baseWebsite}websitsMember/register`;
// 找回账号
const findAccount  = `${baseWebsite}websitsMember/forgetAccount`;
// 找回密码
const findPassWord = `${baseWebsite}websitsMember/forgetPassword`;
// 国家列表
const countryList = `${baseWeb}countrylist`;
// 首页新闻列表
const indexNewsList = `${baseWebsite}websitenews/officialNewsList`;
// 首页新闻详情
const indexNewsInfo = `${baseWebsite}websitenews/newsInfo`;
// 首页店铺列表
const indexShopList = `${baseWebsite}websiteshop/newShop`;
// 首页轮播图列表
const indexBannerList = `${baseWebsite}banner/bannerShow`;
// 首页用户卡列表
const indexUserCardList = `${baseWebsite}websitsMember/memberCardALL`;

const indexLoginHttp = (data:any) =>{
    return axios.post(getNewUrl(indexLogin, data))
}
const indexNewsListHttp = (data:any) => {
    return axios.post(getNewUrl(indexNewsList, data))
}
const indexNewsInfoHttp = (data:any) => {
    return axios.post(getNewUrl(indexNewsInfo, data))
}
const indexShopListHttp = (data:any) =>{
	return axios.post(getNewUrl(indexShopList, data))
}
const findAccountHttp = (data:any) =>{
	return axios.post(findAccount, qs.stringify(data));
}
const findPassWordHttp = (data:any) =>{
	return axios.post(findPassWord, data);
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
	return axios.post(`${baseWebsite}${upLoadImg}`, data);
}
// 发送邮箱验证
const sendEmailHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${sendEmail}`, qs.stringify(data));
}
// 发送手机验证
const sendPhoneHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${sendPhone}`, qs.stringify(data));
}
// 店铺列表
const shopListHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${shopList}`, qs.stringify(data));
}

// 我的页面首页卡
const myPageIndexUserCardInfoHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${myPageIndexUserCardInfo}`, qs.stringify(data));
}
// 我的页面首页游戏资料
const myPageIndexGameInfoHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${myPageIndexGameInfo}`, qs.stringify(data));
}
const about30GameListHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${about30GameList}`, qs.stringify(data));
}
// 我的页面整体数据
const allGameDataHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${allGameData}`, qs.stringify(data));
}
// 近七日好友列表
const aboutSevenPlayerListHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${aboutSevenPlayerList}`, qs.stringify(data));
}
// 星星 好友
const starSettingHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${starSetting}`, qs.stringify(data));
}
// 请求好友
const addFriendsHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${addFriends}`, qs.stringify(data));
}
// 接受、拒绝好友
const handleFriendsHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${handleFriends}`, qs.stringify(data));
}
// 好友列表
const friendsListHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${friendsList}`, qs.stringify(data));
}
// Award记录数据
const awardHistoryDataHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${awardHistoryData}`, qs.stringify(data));
}
// 我的页面 账号信息
const accountInfoHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${accountInfo}`, qs.stringify(data));
}
// 我的页面 账号信息修改
const accountInfoUpdateHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${accountInfoUpdate}`, data);
}
// 我的页面 修改密码
const passwordChangeHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${passwordChange}`, qs.stringify(data));
}
// Adarts卡列表
const adartsCardListHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${adartsCardList}`, qs.stringify(data));
}
// adats卡绑定
const adartsBindHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${adartsBind}`, qs.stringify(data));
}
// adarts卡删除
const adartsCardDeleteHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${adartsCardDelete}`, qs.stringify(data));
}
// adarts 设置主卡
const adartsMainCardHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${adartsMainCard}`, qs.stringify(data));
}

// adarts店铺
const newShopListHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${newShopList}`, qs.stringify(data));
}
// 店铺详情
const shopInfoHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${shopInfo}`, qs.stringify(data));
}

// 选手列表
const playerListHttp = (data:any) =>{
	return axios.get(getNewUrl(`${baseWebsite}${playerList}`, data))
}
// 选手详情
const playerInfoHttp = (data:any) =>{
	return axios.get(getNewUrl(`${baseWebsite}${playerInfo}`, data))
}

// 飞镖列表
const dartsListHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${dartsList}`, data)
}
// 飞镖详情
const dartsInfoHttp = (data:any) =>{
	return axios.post(getNewUrl(`${baseWebsite}${dartsInfo}`, data))
}

// 活动日历列表
const activityDateListHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${activityDateList}`, data)
}
// 活动列表
const activityListHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${activityList}`, data)
}
// 活动详情
const activityInfoHttp = (data:any) =>{
	return axios.post(getNewUrl(`${baseWebsite}${activityInfo}`, data))
}

// 道具首页列表
const shopPropsListHttp = (data:any) =>{
	return axios.get(`${baseWebsite}${shopPropsList}`, data)
}
// 道具首页列表
const shopPropsInfoHttp = (data:any) =>{
	return axios.get(getNewUrl(`${baseWebsite}${shopPropsInfo}`, data))
}
// 道具首页列表
const shopPropsTypeListHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${shopPropsTypeList}`, data)
}
// 我的Item List ALL 列表
const myItemAllListHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${myItemAllList}`, data)
}
// 道具购买
const shopPropsBuyHttp = (data:any) =>{
	return axios.post(getNewUrl(`${baseWebsite}${shopPropsBuy}`, data))
}
// 道具设定
const shopPropSetHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${shopPropSet}`, data)
}
// 道具设定列表
const shopPropUsingListHttp = (data:any) =>{
	return axios.get(`${baseWebsite}${shopPropUsingList}`, data)
}
// 模板列表
const templateListHttp = (data:any) =>{
	return axios.get(`${baseWebsite}${templateList}`, data)
}
// 模板添加
const templateAddHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${templateAdd}`, data)
}
// 模板修改
const templateUpdateHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${templateUpdate}`, data)
}
// 模板删除
const templateDeleteHttp = (data:any) =>{
	return axios.post(`${baseWebsite}${templateDelete}`, data)
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
	// if(!sessionStorage.getItem('websiteMemberId')){
	// 	const history  = useHistory();
	// 	history.push('/')
	// }
	if(response.data.code === 198){
		window.location.href = window.location.origin;
		message.warning('未登录');
	}
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
		indexNewsInfoHttp,
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
		awardHistoryDataHttp,
		accountInfoHttp,
		accountInfoUpdateHttp,
		sendEmailHttp,
		sendPhoneHttp,
		passwordChangeHttp,
		newShopListHttp,
		shopListHttp,
		adartsCardListHttp,
		adartsCardDeleteHttp,
		adartsBindHttp,
		findPassWordHttp,
		findAccountHttp,
		playerListHttp,
		playerInfoHttp,
		dartsListHttp,
		dartsInfoHttp,
		adartsMainCardHttp,
		shopInfoHttp,
		aboutSevenPlayerListHttp,
		handleFriendsHttp,
		friendsListHttp,
		starSettingHttp,
		addFriendsHttp,
		activityDateListHttp,
		activityListHttp,
		activityInfoHttp,
		shopPropsListHttp,
		shopPropsInfoHttp,
		shopPropsTypeListHttp,
		myItemAllListHttp,
		shopPropsBuyHttp,
		shopPropSetHttp,
		shopPropUsingListHttp,
		templateListHttp,
		templateAddHttp,
		templateUpdateHttp,
		templateDeleteHttp
}