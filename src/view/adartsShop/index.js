import { useState, useEffect } from 'react'
// import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Row, Col, Menu } from 'antd'

import AdartsShopIndex from './adartsShopIndex'
import AdartsShopSearch from './adartsShopSearch'
import AdartsShopThemeSet from './adartsShopThemeSet'
import AdartsShopNew from './adartsShopNew'

import './index.css'


const AdartsShop = () => {
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
          mode="inline"
        >
          <Menu.Item key="adartsShopIndex">{t(111)}</Menu.Item>
          <Menu.Item key="adartsShopSearch">{t(112)}</Menu.Item>
          <Menu.Item key="adartsShopThemeSet">{t(113)}</Menu.Item>
          <Menu.Item key="adartsShopNew">{t(10)}</Menu.Item>
        </Menu>
      </Col>
      <Col span={18} offset={1} id='myPageRight'>
        <AdartsShopIndex />
        <AdartsShopSearch />
        <AdartsShopThemeSet />
        <AdartsShopNew />
      </Col>
    </Row >
  )
}
export default AdartsShop