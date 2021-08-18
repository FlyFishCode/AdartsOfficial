import { Tabs, Checkbox, Button, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


import a from '@/assets/img/a.jpg';


const { TabPane } = Tabs;



const RedeemProp = () => {
  const { t } = useTranslation();
  const [allList, setAllList] = useState([]);
  const [redeemList, setRedeemList] = useState([]);
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
  const getData = () => {
    setAllList([])
  }
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
  const onChange = (bool, id) => {
    if (bool) {
      setRedeemList(() => [...redeemList, id])
    } else {
      redeemList.splice(redeemList.findIndex(i => i === id), 1)
      setRedeemList([...redeemList])
    }
  }
  const handleClick = () => {
    console.log(redeemList);
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <div className='Title'>{t(168)}</div>
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
                      <div className='myListCheckbox'><Checkbox onChange={(e) => onChange(e.target.checked, i.id)}></Checkbox></div>
                    </div>
                  )
                })}
              </div>
            </TabPane>
          )
        })}
      </Tabs>
      {redeemList.length > 0 ? <Row justify="center" className='RowBox'><Button type="primary" onClick={handleClick}>{t(172)}</Button></Row> : null}
    </div>
  )
}
export default RedeemProp;