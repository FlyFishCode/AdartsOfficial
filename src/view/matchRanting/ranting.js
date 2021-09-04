import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Tabs } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';

import './index.css';
import a from '@/assets/img/a.jpg';
import RenderDom from './renderListDom';

const { TabPane } = Tabs;


const Ranting = () => {
  const { t } = useTranslation();
  const [oneGameThisList, setOneGameThisList] = useState([]);
  const [oneGameLastList, setOneGameLastList] = useState([]);

  const [cricketThisList, setCricketThisList] = useState([]);
  const [cricketLastList, setCricketLastList] = useState([]);

  const [countUpThisList, setCountUpThisList] = useState([]);
  const [countUpLastList, setCountUpLastList] = useState([]);

  const [ratingThisList, setRatingThisList] = useState([]);
  const [ratingLastList, setRatingLastList] = useState([]);
  const getData = () => {
    setOneGameThisList([
      { id: 1, img: a, teamName: 'aaa temaoseing', name: 'Lisa', count: 1052, country: a },
      { id: 2, img: a, teamName: 'sss temaoseing', name: 'Lisa', count: 2052, country: a },
      { id: 3, img: a, teamName: 'ccc temaoseing', name: 'Lisa', count: 3052, country: a },
      { id: 4, img: a, teamName: 'eee temaoseing', name: 'Lisa', count: 1452, country: a },
      { id: 5, img: a, teamName: 'sss temaoseing', name: 'Lisa', count: 1052, country: a },
      { id: 6, img: a, teamName: 'qqq temaoseing', name: 'Lisa', count: 1052, country: a },
      { id: 7, img: a, teamName: 'vvv temaoseing', name: 'Lisa', count: 1052, country: a }
    ]);
    setOneGameLastList([
      { id: 1, img: a, teamName: 'ggg temaoseing', name: 'Lisa', count: 1052, country: a },
      { id: 2, img: a, teamName: 'hhh temaoseing', name: 'Lisa', count: 1052, country: a },
      { id: 3, img: a, teamName: 'bbb temaoseing', name: 'Lisa', count: 1052, country: a },
      { id: 4, img: a, teamName: 'fff temaoseing', name: 'Lisa', count: 1052, country: a },
      { id: 5, img: a, teamName: 'ttt temaoseing', name: 'Lisa', count: 1052, country: a },
      { id: 6, img: a, teamName: 'rrr temaoseing', name: 'Lisa', count: 1052, country: a },
      { id: 7, img: a, teamName: 'mmm temaoseing', name: 'Lisa', count: 1052, country: a }
    ]);

    setCricketThisList([]);
    setCricketLastList([]);

    setCountUpThisList([]);
    setCountUpLastList([]);

    setRatingThisList([]);
    setRatingLastList([]);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className='Ranting'>
      <div className='myPageTitle'>{t(119)}</div>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="01 GAME" key="1">
          <RenderDom thisMonth={oneGameThisList} lastMonth={oneGameLastList} />
        </TabPane>
        <TabPane tab="CRICKET" key="2">
          <RenderDom thisMonth={cricketThisList} lastMonth={cricketLastList} />
        </TabPane>
        <TabPane tab="COUNT UP" key="3">
          <RenderDom thisMonth={countUpThisList} lastMonth={countUpLastList} />
        </TabPane>
        <TabPane tab="RATING" key="4">
          <RenderDom thisMonth={ratingThisList} lastMonth={ratingLastList} />
        </TabPane>
        <TabPane tab={<span>RATING<CaretUpOutlined /></span>} key="5">
          <RenderDom thisMonth={oneGameThisList} lastMonth={oneGameLastList} />
        </TabPane>
      </Tabs>
    </div>
  )
}
export default Ranting;