import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Tabs, Radio, Row, Col, Button, Modal } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import a from '@/assets/img/a.jpg';

import { dealUrlHash } from '@/common/Utlis';

const { TabPane } = Tabs;


const ItemBuy = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [info, setInfo] = useState(false);
  const [infoId, setInfoId] = useState(0);
  const [value, setValue] = useState(1);
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
  const InfoDom = () => {
    const [visible, setVisible] = useState(false);
    const obj = allList.find(i => i.id === infoId);
    const onBuyClick = () => {
      setVisible(true)
    }
    const onSendGift = () => {
      console.log('onSendGift');
    }
    const onAskGift = () => {
      console.log('onAskGift');
    }
    const onBuyAndSetting = () => {
      console.log('onBuyAndSetting');
    }
    const onBuyConfirm = () => {
      console.log('onBuyConfirm');
    }
    return (
      <div>
        <div className='InfoDomGold'>{t(185)}  |  {100}</div>
        <div className='InfoDomInfo'>
          <div>{t(184)}</div>
          <div><img src={obj.img} alt="" /></div>
          <div>{obj.title}</div>
          <div>
            <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
              <Radio value={1}>90 日</Radio>
              <Radio value={2}>180 日</Radio>
            </Radio.Group>
          </div>
          <div>
            <div>GOLD : {100 * value}</div>
            <div>GOLD : {200 * value}</div>
          </div>
          <Row style={{ width: '800px', textAlign: 'center' }}>
            <Col span='8'><Button danger onClick={onBuyClick}>{t(178)}</Button></Col>
            <Col span='8'><Button danger onClick={onSendGift}>{t(186)}</Button></Col>
            <Col span='8'><Button danger onClick={onAskGift}>{t(187)}</Button></Col>
          </Row>
        </div>
        <Modal title={t(164)} visible={visible} footer={null} width='40%' onCancel={() => setVisible(false)} centered>
          <div style={{ fontSize: '80px', textAlign: 'center' }}><InfoCircleOutlined /></div>
          <div style={{ fontSize: '16px', textAlign: 'center', height: '40px', lineHeight: '40px' }}>{t(188)}<span style={{ fontWeight: 'bold' }}>[{obj.title}]</span>?</div>
          <Row style={{ textAlign: 'center', margin: '30px 0' }}>
            <Col span='12'><Button danger onClick={onBuyAndSetting}>{t(189)}</Button></Col>
            <Col span='12'><Button danger onClick={onBuyConfirm}>{t(190)}</Button></Col>
          </Row>
        </Modal>
      </div>
    )
  }
  const tabClick = (value) => {
    if (value === '1') {
      setAllList([
        { id: 1, img: a, title: 'AAAAAAAAAAAAAAAAAA', price: 100, time: new Date().getTime() },
        { id: 2, img: a, title: 'BBBBBBBBBBBBBBBBBB', price: 200, time: new Date().getTime() },
        { id: 3, img: a, title: 'VVVVVVVVVVVVVVVVVV', price: 300, time: new Date().getTime() },
      ])
    } else {
      setAllList([])
    }
    setInfo(false);
  }
  const handleClick = (id) => {
    setInfo(true);
    setInfoId(Number(id));
  }
  useEffect(() => {
    tabClick('1');
    if (location?.search) {
      handleClick(dealUrlHash(location))
    }
  }, [location])
  return (
    <div>
      <div className='Title'>{t(164)}</div>
      <Tabs defaultActiveKey='全部' onTabClick={tabClick}>
        {typeList.map(i => {
          return (
            <TabPane tab={i.title} key={i.id}>
              {info ? <InfoDom /> : <div className='myListBG'>
                {allList.map(i => {
                  return (
                    <div key={i.id} className='myListBox' onClick={() => handleClick(i.id)}>
                      <div className='myListBoxImg'><img src={i.img} alt="" /></div>
                      <div>{i.title}</div>
                      <div>{i.time}</div>
                    </div>
                  )
                })}
              </div>}
            </TabPane>
          )
        })}
      </Tabs>
    </div>
  )
}
export default ItemBuy;