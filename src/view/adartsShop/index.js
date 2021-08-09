import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';

import AdartsShopIndex from './adartsShopIndex'
import AdartsShopSearch from './adartsShopSearch'
import AdartsShopThemeSet from './adartsShopThemeSet'
import AdartsShopNew from './adartsShopNew'
import AdartsShopInfo from './adartsShopInfo'

import './index.css'



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
  useEffect(() => {
    if (Location.state) {
      setActiveClass(Location.state.type);
    }
  }, [Location])
  return (
    <div className="boxContent containerBox">
      <Row className='PlayInfoBox'>
        <Col span='4' className='linkBox' onClick={(e) => handleClick(e)}>
          <div className={activeClass === '1' ? 'activeClass' : null} active='1' path='/AdartsShop' >{t(111)}</div>
          <div className={activeClass === '2' ? 'activeClass' : null} active='2' path='/AdartsShop/ShopSearch'>{t(112)}</div>
          {/* <div className={activeClass === '3' ? 'activeClass' : null} active='3' path='/AdartsShop/ShopTheme'>{t(113)}</div> */}
          <div className={activeClass === '4' ? 'activeClass' : null} active='4' path='/AdartsShop/NewShop'>{t(10)}</div>
        </Col>
        <Col span='19' offset='1'>
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
    // <Row id='myPage'>
    //   <Col span={4} offset={1}>
    //     <Anchor className='AnchorBox' getContainer={() => document.getElementById('myPageRight')} onClick={handleClick}>
    //       <Link href="#adartsShopIndex" title={t(111)} />
    //       <Link href="#adartsShopSearch" title={t(112)} />
    //       {/* <Link href="#API" title="API"> */}
    //       <Link href="#adartsShopThemeSet" title={t(113)} />
    //       <Link href="#adartsShopNew" title={t(10)} />
    //       {/* </Link> */}
    //     </Anchor>
    //   </Col>
    //   <Col span={18} offset={1} id='myPageRight'>
    //     <AdartsShopIndex />
    //     <AdartsShopSearch />
    //     <AdartsShopThemeSet />
    //     <AdartsShopNew />
    //   </Col>
    // </Row >
  )
}
export default AdartsShop
