import { useState, useEffect } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Row, Col } from 'antd';

import Ranting from './ranting';
import AwardRanting from './awardRanting';

const MatchRanting = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [activeClass, setActiveClass] = useState('1');
  const handleClick = (e) => {
    try {
      history.push(e.target.getAttribute('path'))
      setActiveClass(e.target.getAttribute('active'))
    } catch (error) {
      console.log('History Api：', error);
    }
  }
  useEffect(() => {

  }, [])
  return (
    <div className="containerBox">
      <Row>
        <Col span='4' className='linkBox' onClick={(e) => handleClick(e)}>
          <div className={activeClass === '1' ? 'activeClass' : null} active='1' path='/MatchRanting' >{t(119)}</div>
          <div className={activeClass === '2' ? 'activeClass' : null} active='2' path='/MatchRanting/AwardRanting'>{t(200)}</div>
        </Col>
        <Col span='19' offset='1'>
          <Switch>
            <Route path='/MatchRanting' exact>
              <Ranting />
            </Route>
            <Route path='/MatchRanting/AwardRanting'>
              <AwardRanting />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  )
}
export default MatchRanting;