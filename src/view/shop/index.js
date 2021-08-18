import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Carousel } from 'antd';
import { indexBannerListHttp } from '@/api';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

import ShopPropIndex from './ShopPropIndex';
import MySetting from './MySetting';
import MyPropList from './MyPropList';
import RedeemProp from './RedeemProp';
import ItemBuy from './ItemBuy';

import './index.css';

const { SubMenu } = Menu;

const ShopProp = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [bannerList, setBannerList] = useState([]);
  const [current, setCurrent] = useState('ShopProp');
  const handleClick = ({ key }) => {
    setCurrent(key)
    history.push(key)
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
  const getData = () => {
    const obj = {
      countryId: sessionStorage.getItem('websiteCountryId'),
      status: 1,
      type: 1
    }
    indexBannerListHttp(obj).then(res => {
      setBannerList(res.data.data)
    });
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
    getData()
  }, [])
  return (
    <div>
      <div className="shopMenuBox containerBox">
        <Menu onClick={(e) => handleClick(e)} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="/ShopProp">{t(162)}</Menu.Item>
          <SubMenu key="2" title={t(163)}>
            <Menu.Item key="/ShopProp/MySetting">{t(166)}</Menu.Item>
            <Menu.Item key="/ShopProp/MyPropList">{t(167)}</Menu.Item>
            <Menu.Item key="/ShopProp/RedeemProp">{t(168)}</Menu.Item>
          </SubMenu>
          <Menu.Item key="/ShopProp/ItemBuy">{t(164)}</Menu.Item>
          <Menu.Item key="/alpha/download">{t(165)}</Menu.Item>
        </Menu>
      </div>
      <Carousel {...setting}>
        {bannerList.map((item, index) => {
          return (
            <div className='contentStyle' data-item={item.link} key={index} onClick={() => window.open(item.link)}>
              <img src={item.image} alt="" />
            </div>
          )
        })}
      </Carousel>
      <div className="containerBox">
        <Switch>
          <Route path='/ShopProp' exact>
            <ShopPropIndex />
          </Route>
          <Route path='/ShopProp/MySetting'>
            <MySetting />
          </Route>
          <Route path='/ShopProp/MyPropList'>
            <MyPropList />
          </Route>
          <Route path='/ShopProp/RedeemProp'>
            <RedeemProp />
          </Route>
          <Route path='/ShopProp/ItemBuy'>
            <ItemBuy />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
export default ShopProp;