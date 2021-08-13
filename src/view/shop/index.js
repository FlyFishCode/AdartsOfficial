import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';

import MySetting from './mySetting';



const ShopProp = () => {
  const history = useHistory();
  const { t } = useTranslation();
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

  }, [])
  return (
    <div className="boxContent containerBox">
      <Row className='PlayInfoBox'>
        <Col span='4' className='linkBox' onClick={(e) => handleClick(e)}>
          <div className={activeClass === '1' ? 'activeClass' : null} active='1' path='/MySetting' >{t(111)}</div>
          <div className={activeClass === '2' ? 'activeClass' : null} active='2' path='/ShopProp/MySetting'>{t(162)}</div>
          <div className={activeClass === '3' ? 'activeClass' : null} active='3' path='/AdartsShop/ShopTheme'>{t(113)}</div>
          <div className={activeClass === '4' ? 'activeClass' : null} active='4' path='/AdartsShop/NewShop'>{t(10)}</div>
        </Col>
        <Col span='19' offset='1'>
          <Switch>
            <Route path='/MySetting' exact>
              <MySetting />
            </Route>
            <Route path='/ShopProp/MySetting' exact>
              <MySetting />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  )
}
export default ShopProp;