import { useState, useEffect } from 'react'
// import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Row, Col, Menu } from 'antd'

import MyPageIndex from './MyPageIndex'
import AnyWhere from './AnyWhere'
import GameInfo from './GameInfo'
import FriendsChat from './FriendsChat'
import OtherSetting from './OtherSetting'

import './index.css'

const { SubMenu } = Menu


const MyPage = () => {
  const { t } = useTranslation()
  // const Location = useLocation();
  const [cardId, setCardId] = useState();
  const handleChangeCardId = (value) => {
    setCardId(value)
  }
  const handleClick = (e) => {
    const ele = document.getElementById(e.key)
    ele && ele.scrollIntoView({
      behavior: "smooth", // 默认 auto
      block: "start", // 默认 center
      inline: "nearest", // 默认 nearest
    })
  }
  // console.log(Location.state);
  useEffect(() => {
    handleChangeCardId()
  }, [cardId])
  return (
    <Row id='myPage'>
      <Col span={4} offset={1}>
        <Menu
          onClick={handleClick}
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <Menu.Item key="myPageIndex">{t(20)}</Menu.Item>
          <Menu.Item key="anyWhere">Any Where</Menu.Item>
          <SubMenu key="sub1" title={t(22)}>
            <Menu.Item key="AllGameData">{t(21)}</Menu.Item>
            <Menu.Item key="About30Game">{t(64)}</Menu.Item>
            <Menu.Item key="AwardHistory">{t(65)}</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={t(24)}>
            <Menu.Item key="6">{t(66)}</Menu.Item>
            <Menu.Item key="FriendsList">{t(67)}</Menu.Item>
            <Menu.Item key="AddFriends">{t(68)}</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={t(25)}>
            <Menu.Item key="AdartsCardSetting">{t(69)}</Menu.Item>
            <Menu.Item key="AccountInfoSetting">{t(70)}</Menu.Item>
            <Menu.Item key="AwardMsgSetting">{t(71)}</Menu.Item>
            <Menu.Item key="PropSetting">{t(72)}</Menu.Item>
            <Menu.Item key="PasswordSetting">{t(73)}</Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
      <Col span={18} offset={1} id='myPageRight'>
        <MyPageIndex changeCardId={handleChangeCardId} />
        <AnyWhere />
        <GameInfo cardId={cardId ? cardId : ''} />
        <FriendsChat />
        <OtherSetting />
      </Col>
    </Row >
  )
}
export default MyPage