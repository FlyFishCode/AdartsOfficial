import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import { Carousel, Badge, Button, Calendar } from 'antd';
import { GlobalOutlined, VideoCameraOutlined, BankOutlined, DesktopOutlined, LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { indexNewsListHttp, indexShopListHttp, indexBannerListHttp, activityDateListHttp } from './api/index.ts';
import { setCountryIconPosition } from '@/common/Utlis';

import A1 from '@/assets/img/A1.png';
import W1 from '@/assets/img/W1.png';
import productA from '@/assets/img/productA.jpg';
import productW from '@/assets/img/productW.jpg';
import shopImg from '@/assets/img/shop.png';
import icon1 from '@/assets/img/icon1.jpeg';
import icon2 from '@/assets/img/icon2.jpeg';

import 'antd/dist/antd.css';
import './App.css';
import './Mobile.css';

// 引入国际化
import '@/i18n/i18n';
import { useTranslation } from 'react-i18next';

import NewsPage from './view/news';
import MyPage from './view/myPage';
import AdartsShop from './view/adartsShop';
import MatchPage from './view/match';
import Darts from './view/darts';
import Players from './view/players';
import PlayerInfo from './view/players/playerInfo';
import ShopProp from './view/shop';
import MatchRanting from './view/matchRanting';
import ShopActivitie from './view/shopActivitie';


import Head from './common/components/head/Head.js';
import UserCard from './common/components/UserCard';
import LoginBox from './common/components/head/loginBox/login.js';
import ForgetID from './common/components/head/loginBox/forgetID.js';
import ForgetPW from './common/components/head/loginBox/forgetPW.js';
import AddUser from './common/components/head/loginBox/addUser.js';
import DartsInfo from './view/darts/dartsInfo.js';
import Download from './view/other/download.js';

import MobileTab from './common/components/MobileTbs';

//hash nginx地址配置问题 https://www.cnblogs.com/BlueBerryCode/p/12358140.html  BrowserRouter -》HashRouter #

sessionStorage.setItem('websiteCountryId', 17829);


const App = () => {
    const [userName, setUserName] = useState('');
    const [visible, setVisible] = useState(true);
    const currentUserName = sessionStorage.getItem('websiteUserName');
    const handleUserName = (value) => {
        setUserName(value)
    }
    const setVisibleTrue = () => {
        setVisible(true);
    }
    const setVisibleFalse = () => {
        setVisible(false);
    }
    useEffect(() => {
        if (currentUserName) {
            setUserName(currentUserName)
        }
    }, [currentUserName])
    return (
        <BrowserRouter >
            {/* <div className='containerBox'> */}
            <Head userName={userName} loginOut={handleUserName} setVisibleTrue={setVisibleTrue} setVisibleFalse={setVisibleFalse} />
            {visible ? <div className='InWebDisplay'><MobileTab setVisibleFalse={setVisibleFalse} /></div> : null}
            <Switch>
                <Route path='/' exact>
                    <Container userName={userName} />
                </Route>
                <Route path='/News'>
                    <NewsPage />
                </Route>
                <Route path='/MyPageIndex'>
                    <MyPage />
                </Route>
                <Route path='/AdartsShop'>
                    <AdartsShop />
                </Route>
                <Route path='/Match'>
                    <MatchPage />
                </Route>
                <Route path='/Players'>
                    <Players />
                </Route>
                <Route path='/PlayerInfo'>
                    <PlayerInfo />
                </Route>
                <Route path='/MatchRanting'>
                    <MatchRanting />
                </Route>
                <Route path='/ShopActivitie'>
                    <ShopActivitie />
                </Route>
                <Route path='/Darts'>
                    <Darts />
                </Route>
                <Route path='/ShopProp'>
                    <ShopProp />
                </Route>
                <Route path='/DartsInfo'>
                    <DartsInfo />
                </Route>
                <Route path='/alpha/download'>
                    <Download />
                </Route>
                <Route path='/Login'>
                    <LoginBox changeUserName={handleUserName} setVisibleFalse={setVisibleFalse} />
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
                <Route path="*">
                    <Container userName={userName} />
                </Route>
            </Switch>
            <Footer />
            {/* </div> */}
        </BrowserRouter >
    );
}

const Container = ({ userName }) => {
    return (
        <div>
            <div><Banner /></div>
            <div className='containerBox'>
                {userName ? <UserCard /> : ''}
                <News />
                {/* <PlayerDes /> */}
                <Activity />
                <Video />
                <Product />
            </div>
        </div>
    )
}
const Banner = () => {
    let [bannerList, setBannerList] = useState([]);
    const getData = () => {
        indexBannerListHttp({ countryId: sessionStorage.getItem('websiteCountryId') }).then(res => {
            setBannerList(res.data.data);
        })
    }
    const PrevIcon = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
                style={{ ...style, display: "block", fontSize: '26px', color: '#fff', marginLeft: "10px" }}
            >
                <LeftCircleOutlined />
            </div>
        )
    }
    const NextIcon = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
                style={{ ...style, display: "block", fontSize: '26px', color: '#fff', marginRight: "10px" }}
            >
                <RightCircleOutlined />
            </div>
        )
    }
    const setting = {
        autoplay: true,
        variableWidth: true,
        arrows: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 0,
        autoplaySpeed: 2000,
        prevArrow: <PrevIcon />,
        nextArrow: <NextIcon />,
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    bottom: 0
                }}
            >
                <ul style={{ display: 'flex', alignItems: 'center', height: '20px', margin: 0, padding: 0 }}> {dots} </ul>
            </div>
        )
    }
    const handleClick = (e) => {
        if (e.target.children[2]) {
            window.open(e.target.children[2].children[0].firstChild.getAttribute('data-item'))
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div onClick={handleClick} className='CarouselBox'>
            {bannerList.length > 1 ? <Carousel {...setting}>
                {bannerList.map(item => {
                    return (
                        <div className='contentStyle' data-item={item.link} key={item.id} onClick={() => window.open(item.link)}>
                            <img src={item.image} alt="" />
                        </div>
                    )
                })}
            </Carousel> :
                bannerList.map((item, index) => {
                    return (
                        <div className='contentStyle' style={{ margin: '0 auto' }} data-item={item.link} key={index} onClick={() => window.open(item.link)}>
                            <img src={item.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}
const News = () => {
    const [newsList, setNewsList] = useState([]);
    const [shopList, setshopList] = useState([]);
    const [type, setType] = useState(0);
    const { t } = useTranslation();
    const history = useHistory();
    const getShopList = () => {
        const ShopData = {
            countryId: sessionStorage.getItem('websiteCountryId'),
            pageNum: 1,
            pageSize: 5
        }
        indexShopListHttp(ShopData).then(res => {
            setshopList(res.data.data.list)
        })
    }
    const getNewsList = (type) => {
        const NewsData = {
            category: type,
            countryId: sessionStorage.getItem('websiteCountryId'),
            pageNum: 1,
            pageSize: 4
        }
        indexNewsListHttp(NewsData).then(res => {
            setNewsList(res.data.data.list)
        })
    };
    const handleNewsClick = (id) => {
        history.push({
            pathname: '/News/NewsInfo',
            search: `?id=${id}`
        })
    }
    const handleShopClick = (id) => {
        history.push({
            pathname: '/AdartsShop/ShopInfo',
            search: `?id=${id}`
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
    };
    const moreClick = (type) => {
        if (type === 1) {
            history.push('/News');
        }
        if (type === 2) {
            history.push({
                pathname: '/AdartsShop/ShopSearch',
                state: { type: '2' }
            })
        }
    }
    useEffect(() => {
        getShopList();
        return () => setshopList([]);
    }, [])
    useEffect(() => {
        getNewsList(type);
        return () => setNewsList([]);
    }, [type]);
    return (
        <div className='All'>
            <div className='AllLeft'>
                <div className='AllHead'>
                    <div className='new'>{t(6)}</div>
                    <div className='newsOther'>
                        <div className={type === 0 ? 'newsActiveClass' : 'newsDefaultClass'} onClick={() => setType(0)}>{t(5)}</div>
                        <div className={type === 4 ? 'newsActiveClass' : 'newsDefaultClass'} onClick={() => setType(4)}>{t(7)}</div>
                        <div className={type === 3 ? 'newsActiveClass' : 'newsDefaultClass'} onClick={() => setType(3)}>{t(8)}</div>
                        <div className={type === 6 ? 'newsActiveClass' : 'newsDefaultClass'} onClick={() => setType(6)}>{t(9)}</div>
                    </div>
                </div>
                <div className='Allcontainer'>
                    {newsList.map(item => {
                        return (
                            <div className='container' key={item.id} onClick={() => handleNewsClick(item.id)}>
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
                <div className='AllFooter' onClick={() => moreClick(1)}>
                    <div className='footerText'><DesktopOutlined /><div className='footerTextInner'>{t(11)}</div></div>
                    <div className='footerMore'>{'>'}</div>
                </div>
            </div>
            <div className='AllRight'>
                <div className='AllHead'>
                    <div>{t(10)}</div>
                </div>
                <div className='Allcontainer'>
                    {shopList.map(item => {
                        return (
                            <div className='AllRightBox' key={item.shopId} onClick={() => handleShopClick(item.shopId)}>
                                <div className='AllImgBox'>
                                    <img src={item.shopImg ? item.shopImg : shopImg} onError={(e) => e.target.src = shopImg} alt="" />
                                </div>
                                <div className='AllImgContent'>
                                    <div>
                                        <div className='shopBox'>
                                            <div className='countryIconPosition'>
                                                <div style={{ backgroundPosition: setCountryIconPosition(item.countryCode) }} />
                                            </div>
                                            <div style={{ color: 'red', fontWeight: 'bold', marginLeft: '2px', fontSize: '10px' }}>[{item.countryName}]</div>
                                            <div className='textOverFlow' title={item.shopName} style={{ width: '90px' }}>{item.shopName}</div>
                                        </div>
                                        <div style={{ fontSize: '10px', color: '#505050' }}>{item.shopAddress}</div>
                                        <div>{item.machineList && item.machineList.map((i, index) => {
                                            return (
                                                <div key={index} >
                                                    <span style={{ color: 'red', fontSize: '10px' }}>{i.machineType}：</span><span>{i.machineNum}</span>
                                                </div>
                                            )
                                        })}</div>
                                        <div className='iconImg'>
                                            {item.machineList.length ?
                                                item.machineList.some(i => i.machineType === 'A1') ?
                                                    <div className='iconImg'>
                                                        <img src={A1} alt="" />
                                                    </div> :
                                                    <div className='iconImg'>
                                                        <img src={W1} alt="" />
                                                    </div>
                                                : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='AllFooter' onClick={() => moreClick(2)}>
                    <div className='footerText'><BankOutlined /><div className='footerTextInner'>{t(12)}</div></div>
                    <div className='footerMore'>{'>'}</div>
                </div>
            </div>
        </div>
    )
}
const Product = () => {
    const { t } = useTranslation();
    const bannerList = [
        { id: 1, img: productA },
        { id: 2, img: productW }
    ]
    const handleClick = (id) => {
        if (id === 1) {
            window.open("http://static.adarts-cn.com/static/webResource/pdf/A1.pdf");
        } else if (id === 2) {
            window.open("http://static.adarts-cn.com/static/webResource/pdf/W1.pdf");
        }
    }
    // const PrevIcon = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             onClick={onClick}
    //             style={{ ...style, display: "block", fontSize: '30px', color: '#000' }}
    //         >
    //             <LeftCircleOutlined />
    //         </div>
    //     )
    // }
    // const NextIcon = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             onClick={onClick}
    //             style={{ ...style, display: "block", fontSize: '30px', color: '#000' }}
    //         >
    //             <RightCircleOutlined />
    //         </div>
    //     )
    // }
    // const setting = {
    //     autoplay: true,
    //     arrows: true,
    //     autoplaySpeed: 2000,
    //     prevArrow: <PrevIcon />,
    //     nextArrow: <NextIcon />
    // }
    return (
        <div className='product'>
            <div className='productContent'><GlobalOutlined />
                <div className='productContentInterText'>{t(14)}</div>
            </div>
            {/*<Carousel {...setting}>*/}
            {bannerList.map((item, index) => {
                return (
                    /*<div className='contentStyle' key={index} onClick={() => handleClick(item.id)}>*/
                    <div className='productBox' key={index}>
                        <img src={item.img} alt="" style={{ cursor: 'pointer' }} onClick={() => handleClick(item.id)} />
                    </div>
                )
            })}
            {/*</Carousel>*/}
        </div>
    )
}
const Activity = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const [list, setList] = useState([]);
    const getDate = () => {
        let month = new Date().getMonth() + 1;
        if (month <= 9) {
            month = '0' + month
        }
        const obj = {
            type: null,
            title: '',
            month,
            year: new Date().getFullYear(),
            countryId: sessionStorage.getItem('websiteCountryId')
        };
        activityDateListHttp(obj).then(res => {
            const temp1 = res.data.data.activityList.map(i => {
                return {
                    type: 1,
                    count: i.amount,
                    id: i.activityId,
                    date: i.date
                }
            })
            const temp2 = res.data.data.matchList.map(i => {
                return {
                    type: 2,
                    count: i.amount,
                    id: i.activityId,
                    date: i.date
                }
            })
            setList(temp1.concat(temp2));
        });
    }
    useEffect(() => {
        getDate();
    }, [])
    const getListData = (date) => {
        let [year, month, day] = [new Date(date._d).getFullYear(), new Date(date._d).getMonth() + 1, new Date(date._d).getDate()];
        if (month <= 9) {
            month = '0' + month
        }
        if (day <= 9) {
            day = '0' + day
        }
        const today = `${year}-${month}-${day}`;
        return list.filter(i => i.date === today)
    }
    const handleClick = (id) => {
        history.push('/ShopActivitie')
    }
    const dateChange = (date) => {
        const obj = {
            year: date._d.getFullYear(),
            month: date._d.getMonth() + 1
        };
        console.log(obj);
    }
    const dateCellRender = (value) => {
        const currentList = getListData(value);
        return currentList.map((item, index) => {
            return (
                <div key={index} onClick={() => handleClick(item.id)}>
                    <Badge count={item.count} >
                        {item.type === 1 ? <img className='activityImg' src={icon1} alt="" /> : <img className='activityImg' src={icon2} alt="" />}
                    </Badge>
                </div>
            )
        })
    }
    const handleBtnClick = (type) => {
        history.push({
            pathname: '/ShopActivitie',
            search: `?type=${type}`
        })
    }
    return (
        <div className='activity'>
            <h1><GlobalOutlined />{t(13)}</h1>
            <div className='activityContainer'>
                <div className='activityOtherBox'>
                    <div className='iconBtnBox'>
                        <img src={icon1} alt="" />
                        <div className='activityBtnBox'><Button type="primary" onClick={() => handleBtnClick(0)} block>{t(7)}</Button></div>
                    </div>
                    <div className='iconBtnBox'>
                        <img src={icon2} alt="" />
                        <div className='activityBtnBox'><Button type="primary" onClick={() => handleBtnClick(1)} block>{t(8)}</Button></div>
                    </div>
                </div>
                <Calendar dateCellRender={dateCellRender} onPanelChange={dateChange} />
            </div>
        </div>
    )
}

const Video = () => {
    const [TVData, setTVData] = useState({});
    useEffect(() => {
        getTVData()
    }, []);
    const getTVData = () => {
        setTVData({
            src: 'http://static.adarts-cn.com/static/bulletin/advert/20191227/advert_2.mp4',
            title: '',
            text: ''
        })
    };
    return (
        <div className='video'>
            <div className='videoBG'>
                <div className='tvBox'>
                    <div><VideoCameraOutlined /><div className='tvBoxInnerText'>Adarts.TV</div></div>
                    {/* <div>MORE</div> */}
                </div>
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
    return (
        <div className='footer'>
            <div className='footerContent'>
                <div className='footerContentCopy'>© Copyright 2021, All Rights Reserved</div>
            </div>
            {/*<div className='footerContainer'>
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
            </div>*/}
        </div>
    )
}
export default App;
