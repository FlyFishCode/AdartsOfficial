import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Tabs, Radio, Row, Col, Button, Modal, message } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import { shopPropsInfoHttp, shopPropsTypeListHttp, friendsListHttp, shopPropsBuyHttp, shopPropSetHttp } from '@/api';

// import a from '@/assets/img/a.jpg';

import { dealUrlHash } from '@/common/Utlis';
import NoData from '@/common/components/NoData';

const { TabPane } = Tabs;


const ItemBuy = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [info, setInfo] = useState(false);
  const [infoObj, setInfoObj] = useState({});
  const [value, setValue] = useState(1);
  const [allList, setAllList] = useState([]);
  const [friends, setFriends] = useState([]);
  const [matchPlayer, setMatchPlayer] = useState([]);
  const [type, setType] = useState('');
  const [propId, setPropId] = useState();
  const getTypeTitle = (type) => {
    let str = '';
    switch (type) {
      case 1:
        str = t(169)
        break;
      case 2:
        str = t(170)
        break;
      case 3:
        str = t(171)
        break;
      default:
        str = t(164)
        break;
    }
    return str;
  }
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
              <div key={i.friendId} className='friendStyle'>
                <div className='friendImgBox'>
                  <div><img src={i.friendPortrait} alt="" /></div>
                  <div>{i.friendName}</div>
                </div>
                <div><Button type="primary" size='small' onClick={() => handleGiftClick(i.friendId)}>{t(186)}</Button></div>
              </div>
            )
          })}
        </div>
      )
    }
    const onBuyAndSetting = () => {
      shopPropsBuyHttp({ itemId: propId }).then(res => {
        if (res.data.code === 100) {
          shopPropSetHttp({ itemId: propId, type: infoObj.type }).then(response => {
            if (response.data.code === 100) {
              message.info(res.data.msg);
              setBuyVisible(false)
            }
          })
        } else {
          message.warning(res.data.msg);
        }
      })
    }
    const onBuyConfirm = () => {
      shopPropsBuyHttp({ itemId: propId }).then(res => {
        if (res.data.code === 100) {
          message.info(res.data.msg);
          setBuyVisible(false)
        } else {
          message.warning(res.data.msg);
        }
      })
    }
    return (
      <div style={{ padding: '50px' }}>
        <div className='InfoDomGold'>{t(185)}  |  {infoObj.coin}</div>
        <div className='InfoDomInfo'>
          <div>{t(184)}</div>
          <div><img src={infoObj.url ? infoObj.url.split(',')[0] : ''} alt="" /></div>
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

  const getTypeData = (infoId, type) => {
    const obj = {
      itemType: infoId,
      queryType: type,
      pageIndex: 1,
      pageSize: 5
    }
    shopPropsTypeListHttp(obj).then(res => {
      if (res.data.data.list) {
        setInfo(false);
        setAllList(res.data.data.list)
      }
    })
  };
  const handleClick = (id) => {
    setInfo(true);
    setPropId(id);
    getInfoData(id)
  }
  const getFriends = () => {
    const obj = {
      memberId: sessionStorage.getItem('websiteMemberId'),
      type: 0,
      status: 0,
      pageNum: 1,
      pageSize: 999,
    }
    friendsListHttp(obj).then(res => {
      if (res.data.code === 100) {
        setFriends(res.data.data.list)
      }
    })
    setMatchPlayer([])
  }
  const getInfoData = (itemId) => {
    shopPropsInfoHttp({ itemId }).then(res => {
      if (res.data.data) {
        setInfoObj(res.data.data)
      }
    })
  }
  const tabClick = (value) => {
    getTypeData(value, type)
  }
  useEffect(() => {
    if (location.search.includes('type')) {
      setType(Number(dealUrlHash(location)));
      getTypeData('', dealUrlHash(location));
    } else if (location.search.includes('id')) {
      setInfo(true);
      setPropId(dealUrlHash(location))
      getInfoData(dealUrlHash(location));
    } else {
      getTypeData('');
    }
    getFriends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <div className='Title'>{getTypeTitle(type)}</div>
      <Tabs defaultActiveKey='' onTabClick={tabClick}>
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