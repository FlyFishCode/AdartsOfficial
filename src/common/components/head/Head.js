import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { UnorderedListOutlined, LoginOutlined } from '@ant-design/icons';
import { Col, Menu, message, Row, Select, Drawer, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/img/logo.png';
import LoginBtn from './LoginBtn';
import AMapLoader from '@amap/amap-jsapi-loader';
import { countryListHttp } from '@/api';


const { SubMenu } = Menu;
const { Option } = Select;


const Head = (prop) => {
  const { userName, loginOut, setVisibleTrue, setVisibleFalse } = prop;
  const [language, setLanguage] = useState('en');
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const handleLoginOut = () => {
    setVisible(false);
    history.push('/');
    setVisibleFalse();
    loginOut();
  }
  const handlePushClick = (value) => {
    const userId = sessionStorage.getItem('websiteMemberId')
    if (userId) {
      history.push(value);
    } else {
      message.info(t(130));
      history.push('/login');
    }
    setVisibleTrue();
    setVisible(false);
  }
  const handleMobilePush = (value) => {
    history.push(value);
    setVisibleTrue();
    setVisible(false);
  }
  const handleChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  }
  const handleMobileLoginClick = () => {
    setVisible(false);
    history.push('/login');
  }
  const handlImgClick = () => {
    setVisibleFalse();
    history.push('/')
  }
  // const useBrowserPosition = () => {
  //   const options = {
  //     timeout: Infinity,
  //     maximumAge: 0
  //   };
  //   const success = (pos) => {
  //     const { latitude, longitude, accuracy } = pos.coords;
  //     console.log('Latitude : ' + latitude);
  //     console.log('Longitude: ' + longitude);
  //     console.log('More or less ' + accuracy + ' meters.');
  //   };
  //   const error = (err) => {
  //     console.warn('ERROR(' + err.code + '): ' + err.message);
  //   };
  //   navigator.geolocation.getCurrentPosition(success, error, options);
  // }

  const initMap = () => {
    AMapLoader.load({
      "key": "8396072fe2f7969398aaea1c97e71e47",// 申请好的Web端开发者Key，首次调用 load 时必填
      "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      "plugins": ['AMap.Geolocation'],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap) => {
      const mapObj = new AMap.Map('container');
      mapObj.plugin('AMap.Geolocation', function () {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
        });
        mapObj.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', (data) => {
          countryListHttp().then(res => {
            const country = res.data.data.find(country => country.countryName === data.addressComponent.country);
            sessionStorage.setItem('websiteCountryId', country.countryId);
            console.log('当前位置为：', data.formattedAddress);
            console.log('当前国家/地区CODE：', country.countryCode);
            console.log('IP定位地址为：', data.addressComponent.country);
            switch (country.countryCode) {
              case "CN":
                handleChange('jt')
                break;
              case "HK":
                handleChange('ft')
                break;
              case "JP":
                handleChange('jp')
                break;
              default:
                handleChange('en')
                break;
            }
          })
        });//返回定位信息
        AMap.event.addListener(geolocation, 'error', (err) => {
          console.log(err);
        });
      });
    }).catch(e => {
      console.log(e);
    })
  }

  useEffect(() => {
    // useBrowserPosition()
    initMap()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Row className='headBox Mobile'>
      <Col lg={4} xs={0}>
        <div className='iconMenu'>
          <Menu mode="horizontal">
            <SubMenu key="1" icon={<UnorderedListOutlined />}>
              <Menu.Item key="/MyPageIndex">
                <div onClick={() => handlePushClick('/MyPageIndex')}>{t(135)}</div>
              </Menu.Item>
              <Menu.Item key="/News" disabled>
                <Link to='/News'>{t(136)}</Link>
              </Menu.Item>
              <Menu.Item key="/AdartsShop">
                <Link to='/AdartsShop'>{t(137)}</Link>
              </Menu.Item>
              {/* <SubMenu key="2" title="Adarts店铺">
              <Menu.Item key="/GameTalks">
                <Link to='/GameTalks'>游戏交流</Link>
              </Menu.Item>
              <Menu.Item key="/GameRanking">
                <Link to='/GameRanking'>游戏排名</Link>
              </Menu.Item>
            </SubMenu> */}
              <Menu.Item key="/ShopActivitie">
                <Link to='/ShopActivitie'>{t(13)}</Link>
              </Menu.Item>
              <Menu.Item key="/TaskReward" disabled>
                <Link to='/TaskReward'>{t(138)}</Link>
              </Menu.Item>
              {/* </SubMenu> */}
              <Menu.Item key="/MatchRanting">
                <Link to='/MatchRanting'>{t(157)}</Link>
              </Menu.Item>
              <Menu.Item key="/ShopProp" >
                <Link to='/ShopProp'>{t(158)}</Link>
              </Menu.Item>
              <Menu.Item key="/Darts">
                <Link to='/Darts'>{t(159)}</Link>
              </Menu.Item>
              <Menu.Item key="/Players">
                <Link to='/Players'>{t(139)}</Link>
              </Menu.Item>
              <Menu.Item key="/ServiceEr" disabled>
                <Link to='/ServiceEr'>{t(121)}</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </Col>
      <Col lg={0} xs={4} className='MobileIcon'>
        <Button icon={<UnorderedListOutlined />} onClick={() => setVisible(true)}></Button>
      </Col>
      <Col lg={13} xs={13}>
        <div className='logoBox' onClick={handlImgClick}><img src={logo} alt="logo" /></div>
      </Col>
      <Col lg={2} xs={0}>{t(32)}</Col>
      <Col lg={2} xs={6} className='languageBox'>
        <Select value={language} size='small' style={{ width: '100%' }} onChange={handleChange}>
          {/* <Option value="jt">{t(1)}</Option>
            <Option value="ft">{t(2)}</Option>
            <Option value="en">{t(3)}</Option> */}
          <Option value="jt">简体中文</Option>
          <Option value="ft">繁体中文</Option>
          <Option value="en">英文</Option>
          <Option value="jp">日语</Option>
        </Select>
      </Col>
      <Col lg={2} xs={0}>
        <LoginBtn userName={userName} loginOut={handleLoginOut} />
        {/* <div className='globalBox'><GlobalOutlined /></div> */}
      </Col>
      {/* 定位DOM节点 */}
      <div id="container" style={{ height: '10px', width: '1px', visibility: 'hidden' }}></div>
      {/* 移动端抽屉组件 */}
      <Drawer
        placement='left'
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key='left'
      >
        <div className='Mobile-Login-Box'>
          {userName ?
            <div className='Mobile-Login'>{userName}</div> :
            <div className='Mobile-Login' onClick={handleMobileLoginClick}>{t(4)}</div>
          }
          <div className='Mobile-Menus'>
            <div onClick={() => handlePushClick('/MyPageIndex')}>{t(135)}</div>
            <div onClick={() => handleMobilePush('/AdartsShop')}>{t(137)}</div>
            <div onClick={() => handleMobilePush('/ShopActivitie')}>{t(13)}</div>
            <div onClick={() => handleMobilePush('/MatchRanting')}>{t(157)}</div>
            <div onClick={() => handleMobilePush('/ShopProp')}>{t(158)}</div>
            <div onClick={() => handleMobilePush('/Darts')}>{t(159)}</div>
            <div onClick={() => handleMobilePush('/Players')}>{t(139)}</div>
            <div onClick={() => handleMobilePush('/ServiceEr')}>{t(121)}</div>
          </div>
          {userName ?
            <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'end' }}>
              <Button style={{ background: '#2a2c3e', color: '#fff' }} icon={<LoginOutlined />} onClick={handleLoginOut}>{t(18)}</Button>
            </div> :
            null
          }
        </div>
      </Drawer>
    </Row >
  )
}
export default Head;
