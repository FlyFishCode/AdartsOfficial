// import { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { UnorderedListOutlined, GlobalOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/img/logo.png'
import LoginBtn from './LoginBtn'
const { SubMenu } = Menu;


const Head = (prop) => {
  const { userName, loginOut } = prop;
  const history = useHistory();
  const { t } = useTranslation();
  const handleLoginOut = () => {
    history.push('/')
    loginOut()
  }
  const handlePushClick = (value) => {
    const userId = sessionStorage.getItem('websiteMemberId')
    if (userId) {
      history.push(value)
    } else {
      message.info(t(130));
      history.push('login')
    }
  }
  return (
    <div className='headBox'>
      <div className='iconMenu'>
        <Menu mode="horizontal">
          <SubMenu key="1" icon={<UnorderedListOutlined />}>
            <Menu.Item key="/MyPage">
              <div onClick={() => handlePushClick('MyPage')}>我的页面</div>
            </Menu.Item>
            <Menu.Item key="/News">
              <Link to='/News'>道具商城</Link>
            </Menu.Item>
            <Menu.Item key="/AdartsShop">
              <Link to='/AdartsShop'>Adarts店铺</Link>
            </Menu.Item>
            {/* <SubMenu key="2" title="Adarts店铺">
              <Menu.Item key="/GameTalks">
                <Link to='/GameTalks'>游戏交流</Link>
              </Menu.Item>
              <Menu.Item key="/GameRanking">
                <Link to='/GameRanking'>游戏排名</Link>
              </Menu.Item>
            </SubMenu> */}
            <SubMenu key="3" title="Adarts活动">
              <Menu.Item key="/TaskReward">
                <Link to='/TaskReward'>任务奖励</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/MatchRanking">
              <Link to='/MatchRanking'>比赛排名</Link>
            </Menu.Item>
            <Menu.Item key="/ShopPrps">
              <Link to='/ShopPrps'>道具商店</Link>
            </Menu.Item>
            <Menu.Item key="/Darts">
              <Link to='/Darts'>飞镖专栏</Link>
            </Menu.Item>
            <Menu.Item key="/Player">
              <Link to='/Player'>选手介绍</Link>
            </Menu.Item>
            <Menu.Item key="/ServiceEr">
              <Link to='/ServiceEr'>{t(121)}</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div>
        <div className='logoBox' onClick={() => history.push('/')}><img src={logo} alt="logo" /></div>
      </div>
      <div className='loginAndGlobalBox'>
        <LoginBtn userName={userName} loginOut={handleLoginOut} />
        <div className='globalBox'><GlobalOutlined /></div>
      </div>
    </div >
  )
}
export default Head