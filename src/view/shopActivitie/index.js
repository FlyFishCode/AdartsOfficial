import { useState, useEffect } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Row, Col } from 'antd';

import Activities from './activities';
import ActivitieInfo from './activitieInfo';

const ShopActivitie = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [activeClass, setActiveClass] = useState('1');
  const handleClick = (e) => {
    if (e.target.getAttribute('path')) {
      history.push(e.target.getAttribute('path'))
      setActiveClass(e.target.getAttribute('active'))
    }
  }
  useEffect(() => {
    console.log(1);
  }, [])
  return (
    <div className="containerBox">
      <Row>
        <Col span='4' className='linkBox' onClick={(e) => handleClick(e)}>
          <div className={activeClass === '1' ? 'activeClass' : null} active='1' path='/ShopActivitie' >{t(13)}</div>
        </Col>
        <Col span='19' offset='1'>
          <Switch>
            <Route path='/ShopActivitie' exact>
              <Activities />
            </Route>
            <Route path='/ShopActivitie/ActivitieInfo'>
              <ActivitieInfo />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  )
}
export default ShopActivitie;