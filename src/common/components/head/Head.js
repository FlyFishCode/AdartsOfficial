import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { UnorderedListOutlined } from '@ant-design/icons';
import { Col, Menu, message, Row, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/img/logo.png';
import LoginBtn from './LoginBtn';
import AMapLoader from '@amap/amap-jsapi-loader';
import { countryListHttp } from '@/api';


const { SubMenu } = Menu;
const { Option } = Select;


const Head = (prop) => {
  const { userName, loginOut } = prop;
  const [language, setLanguage] = useState('jt');
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const handleLoginOut = () => {
    history.push('/');
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
  }
  const handleChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
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
    <Row className='headBox'>
      <Col span='4' className='iconMenu'>
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
      </Col>
      <Col span='13'>
        <div className='logoBox' onClick={() => history.push('/')}><img src={logo} alt="logo" /></div>
      </Col>
      <Col span='4'>
        <div className='languageBox'>
          <div style={{ width: '20%' }}>{t(32)}</div>
          <Select value={language} style={{ width: '50%' }} size='small' onChange={handleChange}>
            {/* <Option value="jt">{t(1)}</Option>
            <Option value="ft">{t(2)}</Option>
            <Option value="en">{t(3)}</Option> */}
            <Option value="jt">简体中文</Option>
            <Option value="ft">繁体中文</Option>
            <Option value="en">英文</Option>
            <Option value="jp">日语</Option>
          </Select>
        </div>
      </Col>
      <Col span='3' className='loginAndGlobalBox'>
        <LoginBtn userName={userName} loginOut={handleLoginOut} />
        {/* <div className='globalBox'><GlobalOutlined /></div> */}
      </Col>
      <div id="container" style={{ height: '100px', width: '100px', visibility: 'hidden' }}></div>
    </Row >
  )
}
export default Head;
