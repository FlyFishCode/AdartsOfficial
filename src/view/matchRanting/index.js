import { useState, useEffect } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Row, Col, Tabs } from 'antd';

import Ranting from './ranting';
import AwardRanting from './awardRanting';


const { TabPane } = Tabs;


const MatchRanting = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [activeClass, setActiveClass] = useState('1');
  const handleClick = (e) => {
    if (e.target.getAttribute('path')) {
      history.push(e.target.getAttribute('path'));
      setActiveClass(e.target.getAttribute('active'));
    }
    // try {
    //   history.push(e.target.getAttribute('path'))
    //   setActiveClass(e.target.getAttribute('active'))
    // } catch (error) {
    //   console.log('History Api：', error);
    // }
  }
  const handleTabsChange = (e) => {
    history.push(e)
  }
  useEffect(() => {

  }, []);
  return (
    <div className="containerBox">
      <Row className='InWebDisplay'>
        <Tabs defaultActiveKey="1" type="card" onChange={handleTabsChange}>
          <TabPane tab={t(119)} key="/MatchRanting"></TabPane>
          <TabPane tab={t(200)} key="/MatchRanting/AwardRanting"></TabPane>
        </Tabs>
      </Row>
      <Row>
        <Col lg={4} xs={0} className='linkBox' onClick={(e) => handleClick(e)}>
          <div className={activeClass === '1' ? 'activeClass' : null} active='1' path='/MatchRanting' >{t(119)}</div>
          <div className={activeClass === '2' ? 'activeClass' : null} active='2' path='/MatchRanting/AwardRanting'>{t(200)}</div>
        </Col>
        <Col lg={{ span: 19, offset: 1 }} xs={{ span: 24, offset: 0 }}>
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