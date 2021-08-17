import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { UnorderedListOutlined } from '@ant-design/icons';
import { Col, Menu, message, Row, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/img/logo.png';
import LoginBtn from './LoginBtn';

const { SubMenu } = Menu;
const { Option } = Select;


const Head = (prop) => {
  const { userName, loginOut } = prop;
  const [language, setLanguage] = useState('en');
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const handleLoginOut = () => {
    history.push('/adartsoffice');
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
            <SubMenu key="3" title="Adarts活动" disabled>
              <Menu.Item key="/TaskReward">
                <Link to='/TaskReward'>{t(138)}</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/MatchRanking" disabled>
              <Link to='/MatchRanking'>{t(157)}</Link>
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
        <div className='logoBox' onClick={() => history.push('/adartsoffice')}><img src={logo} alt="logo" /></div>
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
          </Select>
        </div>
      </Col>
      <Col span='3' className='loginAndGlobalBox'>
        <LoginBtn userName={userName} loginOut={handleLoginOut} />
        {/* <div className='globalBox'><GlobalOutlined /></div> */}
      </Col>
    </Row >
  )
}
export default Head;
