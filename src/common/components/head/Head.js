// import { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { UnorderedListOutlined } from '@ant-design/icons';
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
              <Link to='/MatchRanking'>比赛排名</Link>
            </Menu.Item>
            <Menu.Item key="/ShopPrps" disabled>
              <Link to='/ShopPrps'>道具商店</Link>
            </Menu.Item>
            <Menu.Item key="/Darts">
              <Link to='/Darts'>飞镖专栏</Link>
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
      <div>
        <div className='logoBox' onClick={() => history.push('/')}><img src={logo} alt="logo" /></div>
      </div>
      <div className='loginAndGlobalBox'>
        <LoginBtn userName={userName} loginOut={handleLoginOut} />
        {/* <div className='globalBox'><GlobalOutlined /></div> */}
      </div>
    </div >
  )
}
export default Head