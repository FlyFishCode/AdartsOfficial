import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import { Carousel, Button, Calendar, Badge } from 'antd';
import { GlobalOutlined, VideoCameraOutlined, BankOutlined, DesktopOutlined, UserOutlined } from '@ant-design/icons';
import { indexNewsListHttp, indexShopListHttp, indexBannerListHttp } from './api/index.ts'
import icon1 from '@/assets/img/icon1.jpeg'
import icon2 from '@/assets/img/icon2.jpeg'
import video from '@/assets/img/video.mp4'
import 'antd/dist/antd.css';
import './App.css';

// 引入国际化
import '@/i18n/i18n';
import { useTranslation } from 'react-i18next';

import NewsPage from './view/news';
import MyPage from './view/myPage'
import AdartsShop from './view/adartsShop'
import MatchPage from './view/match';
import Head from './common/components/head/Head.js'
import UserCard from './common/components/UserCard'
import LoginBox from './common/components/head/loginBox/login.js'
import ForgetID from './common/components/head/loginBox/forgetID.js'
import ForgetPW from './common/components/head/loginBox/forgetPW.js'
import AddUser from './common/components/head/loginBox/addUser.js'


const App = () => {
    const [userName, setUserName] = useState('');
    const currentUserName = sessionStorage.getItem('websiteUserName')
    const handleUserName = (value) => {
        setUserName(value)
    }
    useEffect(() => {
        if (currentUserName) {
            setUserName(currentUserName)
        }
    }, [currentUserName])
    return (
        <BrowserRouter >
            <div className='containerBox'>
                <Head userName={userName} loginOut={handleUserName} />
                <Switch>
                    <Route path='/' exact>
                        <Container userName={userName} />
                    </Route>
                    <Route path='/News'>
                        <NewsPage />
                    </Route>
                    <Route path='/Mypage'>
                        <MyPage />
                    </Route>
                    <Route path='/AdartsShop'>
                        <AdartsShop />
                    </Route>
                    <Route path='/Match'>
                        <MatchPage />
                    </Route>
                    <Route path='/Login'>
                        <LoginBox changeUserName={handleUserName} />
                    </Route>
                    <Route path='/ForgetID'>
                        <ForgetID />
                    </Route>
                    <Route path='/ForgetPW'>
                        <ForgetPW />
                    </Route>
                    <Route path='/AddUser'>
                        <AddUser />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter >
    );
}

const Container = ({ userName }) => {
    return (
        <div className='container'>
            <Banner />
            {userName ? <UserCard /> : ''}
            <News />
            <Activity />
            <Video />
            <Product />
        </div>
    )
}
const Banner = () => {
    let [bannerList, setBannerList] = useState([])
    const getData = () => {
        indexBannerListHttp({ countryId: 208 }).then(res => {
            setBannerList(res.data.data)
        })
    }
    const handleClick = (id) => {
        console.log(id)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <Carousel autoplay effect="fade" className='bannerBox'>
            {bannerList.map((item, index) => {
                return (
                    <div className='contentStyle' key={index} onClick={() => handleClick(item.id)}>
                        <img src={item.image} alt="" />
                    </div>
                )
            })}
        </Carousel>
    )
}
const News = () => {
    const [newsList, setNewsList] = useState([])
    const [shopList, setshopList] = useState([])
    const history = useHistory();
    const { t } = useTranslation();
    useEffect(() => {
        getDate()
    }, [])
    const getDate = () => {
        const NewsData = {
            category: 0,
            countryId: 208,
            pageNum: 1,
            pageSize: 4
        }
        const ShopData = {
            countryId: 208,
            pageNum: 1,
            pageSize: 5
        }
        indexNewsListHttp(NewsData).then(res => {
            setNewsList(res.data.data.list)
        })
        indexShopListHttp(ShopData).then(res => {
            setshopList(res.data.data.list)
        })
    }
    const getTypeStr = (type) => {
        let str = ''
        switch (type) {
            case 3:
                str = t(8);
                break;
            case 4:
                str = t(7);
                break;
            default:
                str = t(9);
                break;
        }
        return str
    }
    const handleLink = (link) => {
        history.push({
            pathname: '/News',
            state: {
                type: link
            }
        })
    }
    return (
        <div className='All'>
            <div className='AllLeft'>
                <div className='AllHead'>
                    <div className='new'>{t(6)}</div>
                    <div className='newsOther'>
                        <div onClick={() => handleLink('News')}>{t(5)}</div>
                        <div onClick={() => handleLink('Match')}>{t(7)}</div>
                        <div onClick={() => handleLink('Activity')}>{t(8)}</div>
                        <div onClick={() => handleLink('Info')}>{t(9)}</div>
                    </div>
                </div>
                <div className='Allcontainer'>
                    {newsList.map(item => {
                        return (
                            <div className='container' key={item.id}>
                                <div className='newsImgBox'>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='newsContent'>
                                    <div className='newsText'>
                                        <div>{item.date}</div>
                                        <div>{getTypeStr(item.category)}</div>
                                    </div>
                                    <div className='newsTitle'>{item.title}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='AllFooter'>
                    <div className='footerText'><DesktopOutlined />{t(11)}</div>
                    <div className='footerMore'>{'》'}</div>
                </div>
            </div>
            <div className='AllRight'>
                <div className='AllHead'>
                    <div>{t(10)}</div>
                </div>
                <div className='Allcontainer'>
                    {shopList.map(item => {
                        return (
                            <div className='AllRightBox' key={item.shopId}>
                                <div className='AllImgBox'>
                                    <img src={item.shopImg} alt="" />
                                </div>
                                <div className='AllImgContent'>
                                    <div>
                                        <div className='shopBox'>
                                            <div className='shopIconBox'>
                                                <img src={item.icon} alt="" />
                                            </div>
                                            <div> <span style={{ color: 'red', fontWeight: 'bold' }}>[{item.countryName}]</span> {item.shopName}</div>
                                        </div>
                                        <div>{item.shopAddress}</div>
                                        <div>{item.machineList && item.machineList.map((i, index) => {
                                            return (
                                                <div key={index} >
                                                    <span style={{ color: 'red' }}>{i.machineType}：</span><span>{i.machineNum}</span>
                                                </div>
                                            )
                                        })}</div>
                                        <div className='iconImg'>
                                            {item.machineList && item.machineList.map((icon, jndex) => {
                                                return (
                                                    <div className='iconImg' key={jndex}>
                                                        <img src={icon.img} alt="" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='AllFooter'>
                    <div className='footerText'><BankOutlined />{t(12)}</div>
                    <div className='footerMore'>{'》'}</div>
                </div>
            </div>
        </div>
    )
}
const Product = () => {
    const { t } = useTranslation();
    return (
        <div className='product'>
            <h1><GlobalOutlined />{t(14)}</h1>
        </div>
    )
}
const Activity = () => {
    const { t } = useTranslation();
    const [list, setList] = useState([])
    const getDate = () => {
        // indexNewsListHttp().then(res => {
        //     console.log((res));
        // })
        setList(
            [
                {
                    id: 1, count: 99, date: '2021-6-3', matchList: [
                        { type: 1, count: 2 },
                        { type: 2, count: 5 }
                    ]
                },
                {
                    id: 2, count: 4, date: '2021-6-4', matchList: [
                        { type: 1, count: 2 },
                        { type: 2, count: 5 }
                    ]
                },
                {
                    id: 3, count: 5, date: '2021-6-5', matchList: [
                        { type: 1, count: 2 },
                        { type: 2, count: 5 }
                    ]
                },
                {
                    id: 6, count: 5, date: '2021-6-17', matchList: [
                        { type: 1, count: 2 },
                        { type: 2, count: 5 }
                    ]
                },
            ]
        )
    }
    useEffect(() => {
        getDate()
    }, [])
    const getListData = (date) => {
        const [year, month, day] = [new Date(date._d).getFullYear(), new Date(date._d).getMonth() + 1, new Date(date._d).getDate()]
        const today = `${year}-${month}-${day}`
        return list.filter(i => i.date === today)
    }
    const handleDayClick = (count) => {
        console.log(count);
    }
    const dateChange = (date) => {
        const obj = {
            year: date._d.getFullYear(),
            month: date._d.getMonth() + 1
        }
        console.log(obj);
    }
    const dateCellRender = (value) => {
        const list = getListData(value)
        return (
            <div>
                {list.map((item, index) => {
                    return (
                        <div key={index} className='badgeBox'>
                            {item.matchList.map((ele, jndex) => {
                                return (
                                    <div key={jndex} onClick={() => handleDayClick(item.count)}>
                                        <Badge count={item.count} >
                                            {ele.type === 1 ? <img className='activityImg' src={icon1} alt="" /> : <img className='activityImg' src={icon2} alt="" />}
                                        </Badge>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className='activity'>
            <h1><GlobalOutlined />{t(13)}</h1>
            <div className='activityContainer'>
                <div className='activityOtherBox'>
                    <div className='iconBtnBox'>
                        <img src={icon1} alt="" />
                        <div className='activityBtnBox'><Button type="primary" block>{t(7)}</Button></div>
                    </div>
                    <div className='iconBtnBox'>
                        <img src={icon2} alt="" />
                        <div className='activityBtnBox'><Button type="primary" block>{t(8)}</Button></div>
                    </div>
                </div>
                <Calendar dateCellRender={dateCellRender} onPanelChange={dateChange} />
            </div>
        </div>
    )
}
const Video = () => {
    const [TVData, setTVData] = useState({})
    useEffect(() => {
        getTVData()
    }, [])
    const getTVData = () => {
        setTVData({
            src: video,
            title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            text: '2222222222222222'
        })
    }
    return (
        <div className='video'>
            <div className='tvBox'>
                <div><VideoCameraOutlined />Adarts.TV</div>
                <div>MORE</div>
            </div>
            <div className='videoBG'>
                <div className='videoContainer'>
                    <video src={TVData.src} controls></video>
                </div>
                <div className='videoBox'>
                    <div className='title'>{TVData.title}</div>
                    <div>{TVData.text}</div>
                </div>
            </div>
        </div>
    )
}
const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className='footer'>
            <div className='footerBox'>
                <div><UserOutlined /> {t(15)}</div>
            </div>
            <div className='footerContainer'>
                <div className='footerLeft'>
                    <h1>联系我们</h1>
                    <p>欢迎成为我们的合作伙伴</p>
                </div>
                <div className='footerRight'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </div>
    )
}
export default App;