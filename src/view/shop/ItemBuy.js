import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Tabs, Radio, Row, Col, Button, Modal } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import a from '@/assets/img/a.jpg';

import { dealUrlHash } from '@/common/Utlis';
import NoData from '@/common/components/NoData';

const { TabPane } = Tabs;


const ItemBuy = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [info, setInfo] = useState(false);
  const [infoId, setInfoId] = useState(0);
  const [value, setValue] = useState(1);
  const [allList, setAllList] = useState([]);
  const [friends, setFriends] = useState([]);
  const [matchPlayer, setMatchPlayer] = useState([]);
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
    const [buyVisible, setBuyVisible] = useState(false);
    const [sendVisible, setSendVisible] = useState(false);
    const [askVisible, setAskVisible] = useState(false);
    const obj = allList.find(i => i.id === infoId);

    const FriendListDom = (type, list) => {
      const handleGiftClick = (id) => {
        console.log(type, id)
      }
      return (
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {list.length && list.map(i => {
            return (
              <div key={i.id} className='friendStyle'>
                <div className='friendImgBox'>
                  <div><img src={i.img} alt="" /></div>
                  <div>{i.name}</div>
                </div>
                <div><Button type="primary" size='small' onClick={() => handleGiftClick(i.id)}>{t(186)}</Button></div>
              </div>
            )
          })}
        </div>
      )
    }
    const onBuyAndSetting = () => {
      console.log('onBuyAndSetting');
    }
    const onBuyConfirm = () => {
      console.log('onBuyConfirm');
    }
    return (
      <div style={{ padding: '50px' }}>
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
            <Col span='8'><Button danger onClick={() => setBuyVisible(true)}>{t(178)}</Button></Col>
            <Col span='8'><Button danger onClick={() => setSendVisible(true)}>{t(186)}</Button></Col>
            <Col span='8'><Button danger onClick={() => setAskVisible(true)}>{t(187)}</Button></Col>
          </Row>
        </div>
        {/* 购买Dialog */}
        <Modal title={t(164)} visible={buyVisible} footer={null} width='40%' centered onCancel={() => setBuyVisible(false)}>
          <div style={{ fontSize: '80px', textAlign: 'center' }}><InfoCircleOutlined /></div>
          <div style={{ fontSize: '16px', textAlign: 'center', height: '40px', lineHeight: '40px' }}>{t(188)}<span style={{ fontWeight: 'bold' }}>[{obj.title}]</span>?</div>
          <Row style={{ textAlign: 'center', margin: '30px 0' }}>
            <Col span='12'><Button danger onClick={onBuyAndSetting}>{t(189)}</Button></Col>
            <Col span='12'><Button danger onClick={onBuyConfirm}>{t(190)}</Button></Col>
          </Row>
        </Modal>
        {/* 赠送Dialog */}
        <Modal title={t(186)} visible={sendVisible} footer={null} width='40%' centered onCancel={() => setSendVisible(false)}>
          <Tabs defaultActiveKey="1" size='large'>
            <TabPane tab={t(93)} key="1">
              {friends.length ? FriendListDom(1, friends) : <NoData />}
            </TabPane>
            <TabPane tab={t(196)} key="2">
              {matchPlayer.length ? FriendListDom(1, matchPlayer) : <NoData />}
            </TabPane>
          </Tabs>
          <Row justify='center' className='RowBox'>
            <Button danger onClick={() => setSendVisible(false)}>{t(127)}</Button>
          </Row>
        </Modal>
        {/* 索要Dialog */}
        <Modal title={t(187)} visible={askVisible} footer={null} width='40%' centered onCancel={() => setAskVisible(false)}>
          <Tabs defaultActiveKey="1" size='large'>
            <TabPane tab={t(93)} key="1">
              {friends.length ? FriendListDom(2, friends) : <NoData />}
            </TabPane>
            <TabPane tab={t(196)} key="2">
              {matchPlayer.length ? FriendListDom(2, matchPlayer) : <NoData />}
            </TabPane>
          </Tabs>
          <Row justify='center' className='RowBox'>
            <Button danger onClick={() => setAskVisible(false)}>{t(127)}</Button>
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
  const getData = () => {
    setFriends([
      { id: 1, name: '段狂胤', img: a, type: 1 },
      { id: 2, name: '白莲花', img: a, type: 2 },
      { id: 3, name: '小庄子', img: a, type: 1 },
    ])
    setMatchPlayer([
      { id: 1, name: '张自然', img: a, type: 1 },
      { id: 2, name: '李逍遥', img: a, type: 2 },
      { id: 3, name: '刘长安', img: a, type: 1 },
      { id: 4, name: '王富贵', img: a, type: 1 },
    ])
  }
  useEffect(() => {
    tabClick('1');
    getData()
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