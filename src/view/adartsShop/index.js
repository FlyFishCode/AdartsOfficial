import { useState, useEffect } from 'react'
// import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Row, Col, Anchor } from 'antd'

import AdartsShopIndex from './adartsShopIndex'
import AdartsShopSearch from './adartsShopSearch'
import AdartsShopThemeSet from './adartsShopThemeSet'
import AdartsShopNew from './adartsShopNew'

import './index.css'

const { Link } = Anchor;


const AdartsShop = () => {
  const { t } = useTranslation()
  // const Location = useLocation();
  const [cardId, setCardId] = useState();
  const handleChangeCardId = (value) => {
    setCardId(value)
  }
  const handleClick = (e) => {
    // const ele = document.getElementById(e.key || e)
    // ele && ele.scrollIntoView({
    //   behavior: "smooth", // 默认 auto
    //   block: "start", // 默认 center
    //   inline: "nearest", // 默认 nearest
    // })
    e.preventDefault();
  }
  useEffect(() => {
    handleChangeCardId()
  }, [cardId])
  return (
    <Row id='myPage'>
      <Col span={4} offset={1}>
        <Anchor className='AnchorBox' getContainer={() => document.getElementById('myPageRight')} onClick={handleClick}>
          <Link href="#adartsShopIndex" title={t(111)} />
          <Link href="#adartsShopSearch" title={t(112)} />
          {/* <Link href="#API" title="API"> */}
          <Link href="#adartsShopThemeSet" title={t(113)} />
          <Link href="#adartsShopNew" title={t(10)} />
          {/* </Link> */}
        </Anchor>
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