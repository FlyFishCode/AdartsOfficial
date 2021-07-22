import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Row, Col, Anchor } from 'antd';

import MyPageIndex from './MyPageIndex';
import AnyWhere from './AnyWhere';
import GameInfo from './GameInfo';
import FriendsChat from './FriendsChat';
import OtherSetting from './OtherSetting';

import './index.css';

const { Link } = Anchor;

const MyPage = () => {
  const { t } = useTranslation();
  const Location = useLocation();
  const [cardId, setCardId] = useState();
  const handleChangeCardId = (value) => {
    setCardId(value)
  }
  const handleLinkClick = (e) => {
    const ele = document.getElementById(e)
    ele && ele.scrollIntoView({
      behavior: "smooth", // 默认 auto
      block: "start", // 默认 center
      inline: "nearest", // 默认 nearest
    })
  }
  useEffect(() => {
    if (Location?.state?.name) {
      handleLinkClick(Location.state.name)
    }
  }, [Location])
  useEffect(() => {
    handleChangeCardId();
  }, [cardId])
  return (
    <Row id='myPage'>
      <Col span={4} offset={1}>
        <Anchor className='AnchorBox' getContainer={() => document.getElementById('myPageRight')} onClick={(e) => e.preventDefault()}>
          <Link href="#myPageIndex" title={t(20)} />
          <Link href="#anyWhere" title='Any Where' />
          <Link href='1' title={t(22)}>
            <Link href="#AllGameData" title={t(21)} />
            <Link href="#About30Game" onClick={() => handleLinkClick} title={t(64)} />
            <Link href="#AwardHistory" title={t(65)} />
          </Link>
          <Link href='2' title={t(24)}>
            {/* <Link href="#6" title={t(66)} /> */}
            <Link href="#FriendsList" title={t(67)} />
            <Link href="#AddFriends" title={t(68)} />
          </Link>
          <Link href='3' title={t(25)}>
            <Link href="#AdartsCardSetting" title={t(69)} />
            <Link href="#AccountInfoSetting" title={t(70)} />
            <Link href="#AwardMsgSetting" title={t(71)} />
            <Link href="#PropSetting" title={t(72)} />
            <Link href="#PasswordSetting" title={t(73)} />
          </Link>
        </Anchor>
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
export default MyPage;