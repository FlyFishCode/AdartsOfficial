import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col, Tabs } from 'antd';

import AdartsShopIndex from './adartsShopIndex'
import AdartsShopSearch from './adartsShopSearch'
import AdartsShopThemeSet from './adartsShopThemeSet'
import AdartsShopNew from './adartsShopNew'
import AdartsShopInfo from './adartsShopInfo'

import './index.css'

const { TabPane } = Tabs;

const AdartsShop = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const Location = useLocation();
  const [activeClass, setActiveClass] = useState('1');
  const handleClick = (e) => {
    try {
      history.push(e?.target?.getAttribute('path'));
      setActiveClass(e?.target?.getAttribute('active') ?? e.active);
    } catch (error) {
      console.log('History Api：', error);
    }
  }
  const handleTabsChange = (e) => {
    history.push(e)
  }
  useEffect(() => {
    if (Location.state) {
      setActiveClass(Location.state.type);
    }
  }, [Location])
  return (
    <div className="boxContent containerBox">
      <Row className='InWebDisplay'>
        <Tabs defaultActiveKey="1" type="card" onChange={handleTabsChange}>
          <TabPane tab={t(111)} key="/AdartsShop"></TabPane>
          <TabPane tab={t(112)} key="/AdartsShop/ShopSearch"></TabPane>
          <TabPane tab={t(10)} key="/AdartsShop/NewShop"></TabPane>
        </Tabs>
      </Row>
      <Row className='PlayInfoBox'>
        <Col lg={4} xs={0} className='linkBox' onClick={(e) => handleClick(e)}>
          <div className={activeClass === '1' ? 'activeClass' : null} active='1' path='/AdartsShop' >{t(111)}</div>
          <div className={activeClass === '2' ? 'activeClass' : null} active='2' path='/AdartsShop/ShopSearch'>{t(112)}</div>
          {/* <div className={activeClass === '3' ? 'activeClass' : null} active='3' path='/AdartsShop/ShopTheme'>{t(113)}</div> */}
          <div className={activeClass === '4' ? 'activeClass' : null} active='4' path='/AdartsShop/NewShop'>{t(10)}</div>
        </Col>
        <Col lg={{ span: 19, offset: 1 }} xs={{ span: 24, offset: 0 }}>
          <Switch>
            <Route path='/AdartsShop' exact>
              <AdartsShopIndex setActive={(acvive) => setActiveClass(acvive)} />
            </Route>
            <Route path='/AdartsShop/ShopSearch'>
              <AdartsShopSearch />
            </Route>
            <Route path='/AdartsShop/ShopTheme'>
              <AdartsShopThemeSet />
            </Route>
            <Route path='/AdartsShop/NewShop'>
              <AdartsShopNew />
            </Route>
            <Route path='/AdartsShop/ShopInfo'>
              <AdartsShopInfo />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  )
}
export default AdartsShop
