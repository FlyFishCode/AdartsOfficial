import { useState, useEffect } from 'react';
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom'
import { Carousel } from 'antd';
import { GlobalOutlined, VideoCameraOutlined, BankOutlined, DesktopOutlined, LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { indexNewsListHttp, indexShopListHttp, indexBannerListHttp } from './api/index.ts';
import { setCountryIconPosition } from '@/common/Utlis';

import A1 from '@/assets/img/A1.png';
import W1 from '@/assets/img/W1.png';
import productA from '@/assets/img/productA.jpg';
import productW from '@/assets/img/productW.jpg';
import shopImg from '@/assets/img/shop.png';
import 'antd/dist/antd.css';
import './App.css';

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


import Head from './common/components/head/Head.js';
import UserCard from './common/components/UserCard';
import LoginBox from './common/components/head/loginBox/login.js';
import ForgetID from './common/components/head/loginBox/forgetID.js';
import ForgetPW from './common/components/head/loginBox/forgetPW.js';
import AddUser from './common/components/head/loginBox/addUser.js';
import DartsInfo from './view/darts/dartsInfo.js'


const App = () => {
    const [userName, setUserName] = useState('');
    const currentUserName = sessionStorage.getItem('websiteUserName');
    const handleUserName = (value) => {
        setUserName(value)
    }
    useEffect(() => {
        if (currentUserName) {
            setUserName(currentUserName)
        }
    }, [currentUserName])
    return (
        <HashRouter >
            {/* <div className='containerBox'> */}
            <Head userName={userName} loginOut={handleUserName} />
            <Switch>
                <Route path='/adartsoffice' exact>
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
                <Route path='/Darts'>
                    <Darts />
                </Route>
                <Route path='/DartsInfo'>
                    <DartsInfo />
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
                <Route path="*">
                    <Container userName={userName} />
                </Route>
            </Switch>
            <Footer />
            {/* </div> */}
        </HashRouter >
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
                {/* <Activity /> */}
                <Video />
                <Product />
            </div>
        </div>
    )
}
const Banner = () => {
    let [bannerList, setBannerList] = useState([]);
    const getData = () => {
        indexBannerListHttp({ countryId: 208 }).then(res => {
            setBannerList(res.data.data);
        })
    }
    const PrevIcon = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
                style={{ ...style, display: "block", fontSize: '26px', color: '#fff', marginLeft: "10px", opacity: "0.5" }}
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
                style={{ ...style, display: "block", fontSize: '26px', color: '#fff', marginRight: "10px", opacity: "0.5" }}
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
        nextArrow: <NextIcon />
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <Carousel {...setting}>
            {bannerList.map((item, index) => {
                return (
                    <div className='contentStyle' key={index} onClick={() => window.open(item.link)}>
                        <img src={item.image} alt="" />
                    </div>
                )
            })}
        </Carousel>
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
            countryId: 208,
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
            countryId: 208,
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
            state: { id }
        })
    }
    const handleShopClick = (id) => {
        history.push({
            pathname: '/AdartsShop/ShopInfo',
            state: { id }
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
            history.push('/News')
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
                    <div className='contentStyle' key={index}>
                        <img src={item.img} alt="" style={{ cursor: 'pointer' }} onClick={() => handleClick(item.id)} />
                    </div>
                )
            })}
            {/*</Carousel>*/}
        </div>
    )
}
// const Activity = () => {
//     const { t } = useTranslation();
//     const [list, setList] = useState([])
//     const getDate = () => {
//         // indexNewsListHttp().then(res => {
//         //     console.log((res));
//         // })
//         setList(
//             [
//                 {
//                     id: 1, count: 99, date: '2021-6-3', matchList: [
//                         { type: 1, count: 2 },
//                         { type: 2, count: 5 }
//                     ]
//                 },
//                 {
//                     id: 2, count: 4, date: '2021-6-4', matchList: [
//                         { type: 1, count: 2 },
//                         { type: 2, count: 5 }
//                     ]
//                 },
//                 {
//                     id: 3, count: 5, date: '2021-6-5', matchList: [
//                         { type: 1, count: 2 },
//                         { type: 2, count: 5 }
//                     ]
//                 },
//                 {
//                     id: 6, count: 5, date: '2021-6-17', matchList: [
//                         { type: 1, count: 2 },
//                         { type: 2, count: 5 }
//                     ]
//                 },
//             ]
//         )
//     }
//     useEffect(() => {
//         getDate()
//     }, [])
//     const getListData = (date) => {
//         const [year, month, day] = [new Date(date._d).getFullYear(), new Date(date._d).getMonth() + 1, new Date(date._d).getDate()];
//         const today = `${year}-${month}-${day}`;
//         return list.filter(i => i.date === today)
//     }
//     const handleDayClick = (count) => {
//         console.log(count);
//     }
//     const dateChange = (date) => {
//         const obj = {
//             year: date._d.getFullYear(),
//             month: date._d.getMonth() + 1
//         };
//         console.log(obj);
//     }
//     const dateCellRender = (value) => {
//         const list = getListData(value)
//         return (
//             <div>
//                 {list.map((item, index) => {
//                     return (
//                         <div key={index} className='badgeBox'>
//                             {item.matchList.map((ele, jndex) => {
//                                 return (
//                                     <div key={jndex} onClick={() => handleDayClick(item.count)}>
//                                         <Badge count={item.count} >
//                                             {ele.type === 1 ? <img className='activityImg' src={icon1} alt="" /> : <img className='activityImg' src={icon2} alt="" />}
//                                         </Badge>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
//     return (
//         <div className='activity'>
//             <h1><GlobalOutlined />{t(13)}</h1>
//             <div className='activityContainer'>
//                 <div className='activityOtherBox'>
//                     <div className='iconBtnBox'>
//                         <img src={icon1} alt="" />
//                         <div className='activityBtnBox'><Button type="primary" block>{t(7)}</Button></div>
//                     </div>
//                     <div className='iconBtnBox'>
//                         <img src={icon2} alt="" />
//                         <div className='activityBtnBox'><Button type="primary" block>{t(8)}</Button></div>
//                     </div>
//                 </div>
//                 <Calendar dateCellRender={dateCellRender} onPanelChange={dateChange} />
//             </div>
//         </div>
//     )
// }

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
