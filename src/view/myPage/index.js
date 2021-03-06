import { useState, useEffect } from 'react';
import { useLocation, Switch, Route, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Row, Col, Tabs } from 'antd';

import MyPageIndex from './MyPageIndex';
// import AnyWhere from './AnyWhere';
// import GameInfo from './GameInfo';
// import OtherSetting from './OtherSetting';

import FriendsList from './FriendsChat/FriendsList';
import AddFriends from './FriendsChat/AddFriends';

import AllGameData from './GameInfo/AllGameData';
import About30Game from './GameInfo/30Game';
import AwardHistory from './GameInfo/AwardHistory';


import AdartsCardSetting from './OtherSetting/AdartsCradSetting';
import AccountInfoSetting from './OtherSetting/AccountInfoSetting';
import AdartsMsgSetting from './OtherSetting/AwardMsgSetting';
// import PropSetting from './OtherSetting/PropSetting';
import PasswordSetting from './OtherSetting/PasswordSetting';

import './index.css';

const { TabPane } = Tabs;

const MyPage = () => {
  const { t } = useTranslation();
  const Location = useLocation();
  const history = useHistory();
  const [cardId, setCardId] = useState();
  const [activeClass, setActiveClass] = useState('1');
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
  const handleClick = (e) => {
    try {
      history.push(e.target.getAttribute('path'))
      setActiveClass(e.target.getAttribute('active'))
    } catch (error) {
      console.log('History Api：', error);
    }
  }
  const handleTabsChange = (e) => {
    history.push(e)
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
    <div className="boxContent containerBox">
      <Row className='InWebDisplay'>
        <Tabs defaultActiveKey="1" type="card" onChange={handleTabsChange}>
          <TabPane tab={t(20)} key="/MyPageIndex"></TabPane>
          <TabPane tab={t(21)} key="/MyPageIndex/AllGameData"></TabPane>
          <TabPane tab={t(64)} key="/MyPageIndex/About30Game"></TabPane>
          <TabPane tab={t(65)} key="/MyPageIndex/AwardHistory"></TabPane>
          <TabPane tab={t(67)} key="/MyPageIndex/FriendsList"></TabPane>
          <TabPane tab={t(68)} key="/MyPageIndex/AddFriends"></TabPane>
          <TabPane tab={t(69)} key="/MyPageIndex/AdartsCardSetting"></TabPane>
          <TabPane tab={t(70)} key="/MyPageIndex/AccountInfoSetting"></TabPane>
          <TabPane tab={t(71)} key="/MyPageIndex/AdartsMsgSetting"></TabPane>
          <TabPane tab={t(73)} key="/MyPageIndex/PasswordSetting"></TabPane>
        </Tabs>
      </Row>
      <Row className='myPage'>
        <Col lg={4} xs={0} className='linkBox' onClick={(e) => handleClick(e)}>
          <div className={activeClass === '1' ? 'activeClass' : null} active='1' path='/MyPageIndex' >{t(20)}</div>
          {/* <div className={activeClass === '2' ? 'activeClass' : null} active='2' path='/MyPageIndex/AnyWhere'>AnyWhere</div> */}
          <div className={activeClass === '3' ? 'activeClass' : null} active='3' path='/MyPageIndex/AllGameData'>{t(21)}</div>
          <div className={activeClass === '4' ? 'activeClass' : null} active='4' path='/MyPageIndex/About30Game'>{t(64)}</div>
          <div className={activeClass === '5' ? 'activeClass' : null} active='5' path='/MyPageIndex/AwardHistory'>{t(65)}</div>
          <div className={activeClass === '6' ? 'activeClass' : null} active='6' path='/MyPageIndex/FriendsList'>{t(67)}</div>
          <div className={activeClass === '7' ? 'activeClass' : null} active='7' path='/MyPageIndex/AddFriends'>{t(68)}</div>
          <div className={activeClass === '8' ? 'activeClass' : null} active='8' path='/MyPageIndex/AdartsCardSetting'>{t(69)}</div>
          <div className={activeClass === '9' ? 'activeClass' : null} active='9' path='/MyPageIndex/AccountInfoSetting'>{t(70)}</div>
          <div className={activeClass === '10' ? 'activeClass' : null} active='10' path='/MyPageIndex/AdartsMsgSetting'>{t(71)}</div>
          <div className={activeClass === '11' ? 'activeClass' : null} active='11' path='/MyPageIndex/PasswordSetting'>{t(73)}</div>
        </Col>
        <Col lg={{ span: 19, offset: 1 }} xs={{ span: 24, offset: 0 }}>
          <Switch>
            <Route path='/MyPageIndex' exact>
              <MyPageIndex changeCardId={handleChangeCardId} />
            </Route>
            <Route path='/MyPageIndex/AllGameData'>
              <AllGameData />
            </Route>
            {/* <Route path='/MyPageIndex/AnyWhere'>
              <AnyWhere />
            </Route> */}
            <Route path='/MyPageIndex/About30Game'>
              <About30Game />
            </Route>
            <Route path='/MyPageIndex/AwardHistory'>
              <AwardHistory />
            </Route>
            <Route path='/MyPageIndex/AdartsCardSetting'>
              <AdartsCardSetting />
            </Route>
            <Route path='/MyPageIndex/AccountInfoSetting'>
              <AccountInfoSetting />
            </Route>
            <Route path='/MyPageIndex/AdartsMsgSetting'>
              <AdartsMsgSetting />
            </Route>
            {/* <Route path='/MyPageIndex/PropSetting'>
              <PropSetting />
            </Route> */}
            <Route path='/MyPageIndex/PasswordSetting'>
              <PasswordSetting />
            </Route>
            <Route path='/MyPageIndex/FriendsList'>
              <FriendsList />
            </Route>
            <Route path='/MyPageIndex/AddFriends'>
              <AddFriends />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
    // <Row id='myPage'>
    //   <Col span={4} offset={1}>
    //     <Anchor className='AnchorBox' getContainer={() => document.getElementById('myPageRight')} onClick={(e) => e.preventDefault()}>
    //       <Link href="#myPageIndex" title={t(20)} />
    //       {/* <Link href="#anyWhere" title='Any Where' /> */}
    //       <Link href='1' title={t(22)}>
    //         <Link href="#AllGameData" title={t(21)} />
    //         <Link href="#About30Game" onClick={() => handleLinkClick} title={t(64)} />
    //         <Link href="#AwardHistory" title={t(65)} />
    //       </Link>
    //       {/* <Link href='2' title={t(24)}> */}
    //       {/* <Link href="#6" title={t(66)} /> */}
    //       {/* <Link href="#FriendsList" title={t(67)} /> */}
    //       {/* <Link href="#AddFriends" title={t(68)} /> */}
    //       {/* </Link> */}
    //       <Link href='3' title={t(25)}>
    //         <Link href="#AdartsCardSetting" title={t(69)} />
    //         <Link href="#AccountInfoSetting" title={t(70)} />
    //         {/* <Link href="#AwardMsgSetting" title={t(71)} /> */}
    //         {/* <Link href="#PropSetting" title={t(72)} /> */}
    //         <Link href="#PasswordSetting" title={t(73)} />
    //       </Link>
    //     </Anchor>
    //   </Col>
    //   <Col span={18} offset={1} id='myPageRight'>
    //     <MyPageIndex changeCardId={handleChangeCardId} />
    //     {/* <AnyWhere /> */}
    //     <GameInfo cardId={cardId ? cardId : ''} />
    //     {/* <FriendsChat /> */}
    //     <OtherSetting />
    //   </Col>
    // </Row >
  )
}
export default MyPage;
