import { Tabs, Checkbox, Button, Row, Modal, Col } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


import a from '@/assets/img/a.jpg';


const { TabPane } = Tabs;



const RedeemProp = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
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
  const tabClick = (value) => {
    if (value === '1') {
      setAllList([
        { id: 1, img: a, title: 'AAAAAAAAAAAAAAAAAA', price: 100, time: new Date().getTime() },
        { id: 2, img: a, title: 'AAAAAAAAAAAAAAAAAA', price: 200, time: new Date().getTime() },
        { id: 3, img: a, title: 'AAAAAAAAAAAAAAAAAA', price: 300, time: new Date().getTime() }
      ])
    } else {
      setAllList([])
    }
  }
  const onChange = (bool, id) => {
    if (bool) {
      setRedeemList(() => [...redeemList, allList.find(i => i.id === id)])
    } else {
      redeemList.splice(redeemList.findIndex(i => i === id), 1)
      setRedeemList([...redeemList])
    }
  }
  const getTotalPrice = () => {
    let count = 0;
    redeemList.forEach(i => {
      count += i.price
    })
    return count;
  }
  const handleOk = () => {
    console.log('handleOk');
  }
  useEffect(() => {
    tabClick('1')
  }, [])
  return (
    <div>
      <div className='Title'>{t(168)}</div>
      <Tabs defaultActiveKey='全部' onTabClick={tabClick}>
        {typeList.map(i => {
          return (
            <TabPane tab={i.title} key={i.id}>
              <div className='myListBG'>
                {allList.map(j => {
                  return (
                    <div key={j.id} className='myListBox'>
                      <div className='myListBoxImg'><img src={j.img} alt="" /></div>
                      <div>{j.title}</div>
                      <div>{j.time}</div>
                      <div className='myListCheckbox'><Checkbox onChange={(e) => onChange(e.target.checked, j.id)}></Checkbox></div>
                    </div>
                  )
                })}
              </div>
            </TabPane>
          )
        })}
      </Tabs>
      {redeemList.length ? <Row justify="center" className='RowBox'><Button type="primary" onClick={() => setVisible(true)}>{t(172)}</Button></Row> : null}
      <Modal title={t(172)} visible={visible} centered footer={null} width='50%' onCancel={() => setVisible(false)}>
        <div className='RowBox' style={{ fontWeight: 'bold' }}>{t(179)}</div>
        {redeemList.map(i => {
          return (
            <div className='myListSelectBox' key={i.id}>
              <div>
                <div>{i.title}</div>
                <div>{i.time}</div>
              </div>
              <div>
                <div>{t(181)}：</div>
                <div>{i.price}</div>
              </div>
            </div>
          )
        })}
        <div className='myListRedeemBox'>
          <div>
            <div>{t(182)}</div>
            <div>1111</div>
          </div>
          <div>
            <div>{t(181)}</div>
            <div>{getTotalPrice()}</div>
          </div>
          <div>
            <div>{t(183)}</div>
            <div>{100 + getTotalPrice()}</div>
          </div>
        </div>
        <div className='myListTipsBox'><InfoCircleOutlined />{t(180)}</div>
        <Row justify="center">
          <Col span='6' style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button type="primary" onClick={handleOk}>{t(19)}</Button>
            <Button type="primary" onClick={() => setVisible(false)}>{t(127)}</Button>
          </Col>
        </Row>
      </Modal>
    </div>
  )
}
export default RedeemProp;