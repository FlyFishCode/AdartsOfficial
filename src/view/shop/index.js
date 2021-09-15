import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Carousel, Row, Col, Modal, Tabs, Button, Pagination, message } from 'antd';
import { indexBannerListHttp } from '@/api';
import { LeftCircleOutlined, RightCircleOutlined, GiftOutlined } from '@ant-design/icons';

import { shopPropGiftListHttp, shopPropAcceptHttp, shopPropAcceptAllHttp, shopPropAskListHttp, shopPropHandleAskHttp, shopPropGiftCountHttp } from '@/api';

import ShopPropIndex from './ShopPropIndex';
import MySetting from './MySetting';
import MyPropList from './MyPropList';
// import RedeemProp from './RedeemProp';
import ItemBuy from './ItemBuy';
import ShopIntroduce from './ShopIntroduce';
import NoData from '@/common/components/NoData';

import './index.css';

const { SubMenu } = Menu;
const { TabPane } = Tabs;

const ShopProp = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [bannerList, setBannerList] = useState([]);
  const [current, setCurrent] = useState('ShopProp');
  const [count, setCount] = useState(0);
  const getTypeStr = (type) => {
    let str = '';
    switch (type) {
      case 1:
        str = 'Style'
        break;
      case 2:
        str = 'Mark Award'
        break;
      case 3:
        str = 'Effect'
        break;
      case 4:
        str = 'Sound'
        break;
      case 5:
        str = 'Bull'
        break;
      case 6:
        str = 'Bull Sound'
        break;
      default:
        str = 'Award'
        break;
    }
    return str;
  }
  const handleClick = ({ key }) => {
    setCurrent(key)
    history.push(key)
  }
  const PrevIcon = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, display: "block", fontSize: '26px', color: '#fff', marginLeft: "10px" }}
      >
        <LeftCircleOutlined />
      </div>
    )
  }
  const NextIcon = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, display: "block", fontSize: '26px', color: '#fff', marginRight: "10px" }}
      >
        <RightCircleOutlined />
      </div>
    )
  }
  const ModelBox = () => {
    const [VSX, setVSX] = useState([]);
    const [myGift, setMyGift] = useState([]);
    const [myGiftAsk, setMyGiftAsk] = useState([]);

    const [itemTotal, setItemTotal] = useState(0);
    const [vsxTotal, setVsxTotal] = useState(0);

    const [askTotal, setAskTotal] = useState(0);

    const getItemData = (pageIndex) => {
      shopPropGiftListHttp({ pageIndex: pageIndex, pageSize: 5 }).then(res => {
        if (res.data.code === 100) {
          setMyGift(res.data.data.list);
          setItemTotal(res.data.data.totalCount);
        }
      })
    }
    const getVsxData = (pageIndex) => {
      console.log(pageIndex)
      setVsxTotal(0)
    }
    const getAskList = (pageIndex) => {
      shopPropAskListHttp({ pageIndex: pageIndex, pageSize: 5 }).then(res => {
        if (res.data.code === 100) {
          setMyGiftAsk(res.data.data.list);
          setAskTotal(res.data.data.totalCount);
        }
      })
    }
    const handleAccept = (giftId) => {
      shopPropAcceptHttp({ giftId }).then(res => {
        if (res.data.code === 100) {
          message.info(res.data.msg);
          getItemData(1);
        } else {
          message.warning(res.data.msg);
        }
      })
    }
    const handleAllClick = () => {
      shopPropAcceptAllHttp().then(res => {
        if (res.data.code === 100) {
          message.info(res.data.msg);
          getItemData(1);
        }
      })
    }
    const handleAskClick = (askId, status) => {
      shopPropHandleAskHttp({ askId, status }).then(res => {
        if (res.data.code === 100) {
          message.info(res.data.msg);
          getAskList(1)
        } else {
          message.warning(res.data.msg);
        }
      })
    }
    useEffect(() => {
      getItemData(1)
      getAskList(1);
      setVSX([]);
      return () => {
        setMyGift([]);
        setItemTotal(1);
      }
    }, [])
    return (
      <Modal title={t(217)}
        centered
        visible={visible}
        footer={null}
        width='50%'
        className='GiftBox'
        onOk={() => setVisible(true)}
        onCancel={() => setVisible(false)}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab={`${t(218)}(${itemTotal})`} key="1">
            <Tabs defaultActiveKey="1">
              <TabPane tab={`ITEM(${itemTotal})`} key="1">
                {myGift.length ? myGift.map(i => {
                  return (
                    <div key={i.id} className='GiftItemBox'>
                      <div><img src={i.itemUrl.split(',')[0]} alt="" /></div>
                      <div>
                        <div className='GiftTitle'>
                          <div>[{0}G]</div>
                          <div>[{getTypeStr(i.type)}]</div>
                          <div>{i.itemTitle}</div>
                        </div>
                        <div>
                          <div>{t(220)} | {i.sndMemberName}</div>
                          <div>{t(221)} | {i.sndTime}</div>
                        </div>
                        <div><Button type="primary" size='small' onClick={() => handleAccept(i.id)}>{t(124)}</Button></div>
                      </div>
                    </div>
                  )
                }) : <NoData />}
                {myGift.length ?
                  <div>
                    <Row className='RowBox' justify="center"><Pagination defaultPageSize='5' defaultCurrent='1' total={itemTotal} showSizeChanger={false} onChange={(value) => getItemData(value)} /></Row>
                    <Row className='RowBox' justify="center"><Button type="primary" size='small' onClick={handleAllClick}>{t(222)}</Button></Row>
                  </div>
                  : null
                }
              </TabPane>
              <TabPane tab={`VSX(${vsxTotal})`} key="2">
                {VSX.length ? VSX.map(i => {
                  return (
                    <div key={i.id} className='GiftItemBox'>
                      <div><img src={i.itemUrl.split(',')[0]} alt="" /></div>
                      <div>
                        <div className='GiftTitle'>
                          <div>[{i.gold}G]</div>
                          <div>[{getTypeStr(i.type)}]</div>
                          <div>{i.title}</div>
                        </div>
                        <div>
                          <div>{t(220)} | {i.friend}</div>
                          <div>{t(221)} | {i.date}</div>
                        </div>
                        <div><Button type="primary" size='small'>{t(124)}</Button></div>
                      </div>
                    </div>
                  )
                }) : <NoData />}
                {VSX.length ?
                  <div>
                    <Row className='RowBox' justify="center"><Pagination defaultPageSize='5' total={vsxTotal} showSizeChanger={false} onChange={(value) => getVsxData(value)} /></Row>
                    <Row className='RowBox' justify="center"><Button type="primary" size='small'>{t(222)}</Button></Row>
                  </div>
                  : null
                }
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab={`${t(219)}(${askTotal})`} key="2">
            {myGiftAsk.length ? myGiftAsk.map(i => {
              return (
                <div key={i.id} className='GiftItemBox'>
                  <div><img src={i.itemUrl.split(',')[0]} alt="" /></div>
                  <div>
                    <div className='GiftTitle'>
                      <div>[{0}G]</div>
                      <div>[{getTypeStr(i.type)}]</div>
                      <div>{i.title}</div>
                    </div>
                    <div>
                      <div>[{i.askMemberName}] {t(209)}</div>
                      <div>{t(233)} | {i.askTime}</div>
                    </div>
                    <Row>
                      <Col span='3'><Button type="primary" size='small' onClick={() => handleAskClick(i.id, true)}>{t(231)}</Button></Col>
                      <Col span='3'><Button danger size='small' onClick={() => handleAskClick(i.id, false)}>{t(232)}</Button></Col>
                    </Row>
                  </div>
                </div>
              )
            }) : <NoData />}
            {myGiftAsk.length ?
              <div>
                <Row className='RowBox' justify="center"><Pagination defaultPageSize='5' total={askTotal} showSizeChanger={false} onChange={(value) => getAskList(value)} /></Row>
              </div>
              : null
            }
          </TabPane>
        </Tabs>
      </Modal>
    )
  }
  const getData = () => {
    const obj = {
      countryId: sessionStorage.getItem('websiteCountryId'),
      status: 1,
      type: 1
    }
    indexBannerListHttp(obj).then(res => {
      if (res.data.code === 100) {
        setBannerList(res.data.data);
      }
    });
  }
  const getCount = () => {
    shopPropGiftCountHttp().then(res => {
      if (res.data.code === 100) {
        setCount(res.data.data)
      }
    })
  }
  const setting = {
    autoplay: true,
    variableWidth: true,
    arrows: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,
    autoplaySpeed: 2000,
    prevArrow: <PrevIcon />,
    nextArrow: <NextIcon />
  }
  useEffect(() => {
    getData();
    getCount();
  }, [])
  return (
    <div>
      <Row className='containerBox'>
        <Col span='22' className="shopMenuBox">
          <Menu onClick={(e) => handleClick(e)} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="/ShopProp">{t(162)}</Menu.Item>
            <SubMenu key="2" title={t(163)}>
              <Menu.Item key="/ShopProp/MySetting">{t(166)}</Menu.Item>
              <Menu.Item key="/ShopProp/MyPropList">{t(167)}</Menu.Item>
              {/* <Menu.Item key="/ShopProp/RedeemProp">{t(168)}</Menu.Item> */}
            </SubMenu>
            <Menu.Item key="/ShopProp/ItemBuy">{t(164)}</Menu.Item>
            <Menu.Item key="/ShopProp/ShopIntroduce">{t(165)}</Menu.Item>
          </Menu>
        </Col>
        <Col span='1'>
          <div className='giftBox' onClick={() => setVisible(true)}><GiftOutlined />
            <div>{count}</div>
          </div>
        </Col>
      </Row>
      <ModelBox />
      <Carousel {...setting}>
        {bannerList.map((item, index) => {
          return (
            <div className='contentStyle' data-item={item.link} key={index} onClick={() => window.open(item.link)}>
              <img src={item.image} alt="" />
            </div>
          )
        })}
      </Carousel>
      <div className="containerBox">
        <Switch>
          <Route path='/ShopProp' exact>
            <ShopPropIndex />
          </Route>
          <Route path='/ShopProp/MySetting'>
            <MySetting />
          </Route>
          <Route path='/ShopProp/MyPropList'>
            <MyPropList />
          </Route>
          {/* <Route path='/ShopProp/RedeemProp'>
            <RedeemProp />
          </Route> */}
          <Route path='/ShopProp/ItemBuy'>
            <ItemBuy />
          </Route>
          <Route path='/ShopProp/ShopIntroduce'>
            <ShopIntroduce />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
export default ShopProp;