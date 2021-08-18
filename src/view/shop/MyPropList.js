import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


import { Tabs } from 'antd';

import a from '@/assets/img/a.jpg';


const { TabPane } = Tabs;

const MyPropList = () => {
  const { t } = useTranslation();
  const [myList, setMyList] = useState([]);
  const [allList, setAllList] = useState([]);
  const typeList = [
    { id: 1, title: '全部' },
    { id: 2, title: 'Set' },
    { id: 3, title: 'Style' },
    { id: 4, title: 'Mark Award' },
    { id: 5, title: 'Dart Throw' },
    { id: 6, title: 'Frame' },
    { id: 7, title: 'Dynamic Frame' },
    { id: 8, title: 'Sound' },
    { id: 9, title: 'Bull Sound' },
    { id: 10, title: 'Effect' },
    { id: 11, title: 'Bull' },
    { id: 12, title: 'Award' },
  ];
  const tabClick = (value) => {
    if (value === '1') {
      setAllList([
        { id: 1, img: a, title: 'AAAAAAAAAAAAAAAAAA', time: new Date().getTime() },
        { id: 2, img: a, title: 'AAAAAAAAAAAAAAAAAA', time: new Date().getTime() },
        { id: 3, img: a, title: 'AAAAAAAAAAAAAAAAAA', time: new Date().getTime() },
      ])
    } else {
      setAllList([])
    }
  }
  const getData = () => {
    setMyList([
      { id: 1, img: a, title: 'AAAAAAAAAAAAAAAAAA', time: new Date().getTime() },
      { id: 2, img: a, title: 'AAAAAAAAAAAAAAAAAA', time: new Date().getTime() },
      { id: 3, img: a, title: 'AAAAAAAAAAAAAAAAAA', time: new Date().getTime() },
      { id: 4, img: a, title: 'AAAAAAAAAAAAAAAAAA', time: new Date().getTime() },
      { id: 5, img: a, title: 'AAAAAAAAAAAAAAAAAA', time: new Date().getTime() }
    ])
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <div className='Title'>{t(167)}</div>
      <Tabs defaultActiveKey="1" size='large'>
        <TabPane tab={t(176)} key="1">
          <div className='myListBG'>
            {myList.map(i => {
              return (
                <div key={i.id} className='myListBox'>
                  <div className='myListBoxImg'><img src={i.img} alt="" /></div>
                  <div>{i.title}</div>
                  <div>{i.time}</div>
                </div>
              )
            })}
          </div>
        </TabPane>
        <TabPane tab={'ALL'} key="2">
          <Tabs defaultActiveKey='全部' onTabClick={tabClick}>
            {typeList.map(i => {
              return (
                <TabPane tab={i.title} key={i.id}>
                  <div className='myListBG'>
                    {allList.map(i => {
                      return (
                        <div key={i.id} className='myListBox'>
                          <div className='myListBoxImg'><img src={i.img} alt="" /></div>
                          <div>{i.title}</div>
                          <div>{i.time}</div>
                        </div>
                      )
                    })}
                  </div>
                </TabPane>
              )
            })}
          </Tabs>
        </TabPane>
      </Tabs>
    </div>
  )
}
export default MyPropList;
