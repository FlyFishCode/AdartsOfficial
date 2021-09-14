import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Tabs } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';

import { rankListHttp } from '@/api';

import './index.css';
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

  const [ratingUpThisList, setRatingUpThisList] = useState([]);
  const [ratingUpLastList, setRatingUpLastList] = useState([]);
  const getData = (key) => {
    rankListHttp({ gameType: key }).then(res => {
      if (res.data.code === 100) {
        const { thisMonth, lastMonth } = res.data.data;
        switch (key) {
          case 100:
            setOneGameThisList(thisMonth);
            setOneGameLastList(lastMonth);
            break;
          case 200:
            setCricketThisList(thisMonth);
            setCricketLastList(lastMonth);
            break;
          case 300:
            setCountUpThisList(thisMonth);
            setCountUpLastList(lastMonth);
            break;
          case 400:
            setRatingThisList(thisMonth);
            setRatingLastList(lastMonth);
            break;
          default:
            setRatingUpThisList(thisMonth);
            setRatingUpLastList(lastMonth);
            break;
        }
      }
    })
  }
  useEffect(() => {
    getData(100, true);
  }, [])
  return (
    <div className='Ranting'>
      <div className='myPageTitle'>{t(119)}</div>
      <Tabs defaultActiveKey="1" type="card" onChange={(value) => getData(Number(value))}>
        <TabPane tab="01 GAME" key="100">
          <RenderDom thisMonth={oneGameThisList} lastMonth={oneGameLastList} />
        </TabPane>
        <TabPane tab="CRICKET" key="200">
          <RenderDom thisMonth={cricketThisList} lastMonth={cricketLastList} />
        </TabPane>
        <TabPane tab="COUNT UP" key="300">
          <RenderDom thisMonth={countUpThisList} lastMonth={countUpLastList} />
        </TabPane>
        <TabPane tab="RATING" key="400">
          <RenderDom thisMonth={ratingThisList} lastMonth={ratingLastList} />
        </TabPane>
        <TabPane tab={<span>RATING<CaretUpOutlined /></span>} key="500">
          <RenderDom thisMonth={ratingUpThisList} lastMonth={ratingUpLastList} />
        </TabPane>
      </Tabs>
    </div>
  )
}
export default Ranting;