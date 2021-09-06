import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Tabs, Radio, Row, Col, Button, Modal } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import { shopPropsInfoHttp, shopPropsTypeListHttp } from '@/api';

import a from '@/assets/img/a.jpg';

import { dealUrlHash } from '@/common/Utlis';
import NoData from '@/common/components/NoData';

const { TabPane } = Tabs;


const ItemBuy = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [info, setInfo] = useState(false);
  const [infoObj, setInfoObj] = useState(0);
  const [value, setValue] = useState(1);
  const [allList, setAllList] = useState([]);
  const [friends, setFriends] = useState([]);
  const [matchPlayer, setMatchPlayer] = useState([]);
  const typeList = [
    { id: '', title: '全部' },
    { id: 1, title: 'Style' },
    { id: 2, title: 'Mark Award' },
    { id: 3, title: 'Effect' },
    { id: 4, title: 'Sound' },
    { id: 5, title: 'Bull' },
    { id: 6, title: 'Bull Sound' },
    { id: 71, title: 'LOW TON' },
    { id: 72, title: 'HIGH TON' },
    { id: 73, title: 'HAT TRICK' },
    { id: 74, title: 'THREE IN A BED' },
    { id: 75, title: 'THREE IN THE BLACK' },
    { id: 76, title: 'TON 80' },
    { id: 77, title: 'WHITE HORSE' },
    { id: 78, title: '9 MARK' },
  ];
  const InfoDom = () => {
    const [buyVisible, setBuyVisible] = useState(false);
    const [sendVisible, setSendVisible] = useState(false);
    const [askVisible, setAskVisible] = useState(false);

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
        <div className='InfoDomGold'>{t(185)}  |  {infoObj.coin}</div>
        <div className='InfoDomInfo'>
          <div>{t(184)}</div>
          <div><img src={infoObj ? infoObj.url.split(',')[0] : ''} alt="" /></div>
          <div>{infoObj ? infoObj.title : ''}</div>
          <div>
            <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
              <Radio value={1}>90 日</Radio>
              {/* <Radio value={2}>180 日</Radio> */}
            </Radio.Group>
          </div>
          <div>
            {/* <div>GOLD : {100 * value}</div> */}
            <div>GOLD : {infoObj.price}</div>
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
          <div style={{ fontSize: '16px', textAlign: 'center', height: '40px', lineHeight: '40px' }}>{t(188)}<span style={{ fontWeight: 'bold' }}>[{infoObj ? infoObj.title : ''}]</span>?</div>
          <Row style={{ textAlign: 'center', margin: '30px 0' }}>
            <Col span='12'><Button danger onClick={onBuyAndSetting}>{t(189)}</Button></Col>
            <Col span='12'><Button danger onClick={onBuyConfirm}>{t(190)}</Button></Col>
          </Row>
        </Modal>
        {/* 赠送Dialog */}
        <Modal title={t(186)} visible={sendVisible} footer={null} width='40%' centered onCancel={() => setSendVisible(false)}>
          <Tabs id='MyPropList' defaultActiveKey="1" size='large'>
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
          <Tabs id='MyPropList' defaultActiveKey="1" size='large'>
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
  const getTypeData = (infoId) => {
    const obj = {
      itemType: infoId,
      queryType: 1,
      pageIndex: 1,
      pageSize: 5
    }
    shopPropsTypeListHttp(obj).then(res => {
      setInfo(false);
      setAllList(res.data.data.list)
    })
  };
  const handleClick = (id) => {
    setInfo(true);
    getInfoData(id)
  }
  const getFriends = (itemId) => {
    setFriends([
      { id: 1, name: '段狂胤', img: a, type: 1 },
      { id: 2, name: '白莲花', img: a, type: 2 },
      { id: 3, name: '小庄子', img: a, type: 1 }
    ])
    setMatchPlayer([
      { id: 1, name: '张自然', img: a, type: 1 },
      { id: 2, name: '李逍遥', img: a, type: 2 },
      { id: 3, name: '刘长安', img: a, type: 1 },
      { id: 4, name: '王富贵', img: a, type: 1 }
    ])
  }
  const getInfoData = (itemId) => {
    shopPropsInfoHttp({ itemId }).then(res => {
      setInfoObj(res.data.data)
    })
  }
  useEffect(() => {
    if (dealUrlHash(location)) {
      setInfo(true);
      getInfoData(dealUrlHash(location));
    }
    getTypeData('');
    getFriends();
  }, [location])
  return (
    <div>
      <div className='Title'>{t(164)}</div>
      <Tabs defaultActiveKey='' onTabClick={getTypeData}>
        {typeList.map(i => {
          return (
            <TabPane tab={i.title} key={i.id}>
              {info ?
                <InfoDom /> :
                <div className={allList.length ? 'myListBG' : ''}>
                  {allList.length ? allList.map(item => {
                    return (
                      <div key={item.id} className='myListBox' onClick={() => handleClick(item.id)}>
                        <div className='myListBoxImg'><img src={item.url.split(',')[0]} alt="" /></div>
                        <div>{item.title}</div>
                        <div>{item.time}</div>
                      </div>
                    )
                  }) : <NoData />}
                </div>}
            </TabPane>
          )
        })}
      </Tabs>
    </div>
  )
}
export default ItemBuy;