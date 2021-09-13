import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Carousel, Row, Col, Modal, Tabs, Button, Pagination } from 'antd';
import { indexBannerListHttp } from '@/api';
import { LeftCircleOutlined, RightCircleOutlined, GiftOutlined } from '@ant-design/icons';

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
    const [itemTotal, setItemTotal] = useState(1);
    const [myGift, setMyGift] = useState([]);
    const [myGiftAsk, setMyGiftAsk] = useState([]);
    useEffect(() => {
      setMyGift([]);
      setMyGiftAsk([]);
      setVSX([]);
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
          <TabPane tab={`${t(218)}(${myGift.length})`} key="1">
            <Tabs defaultActiveKey="1">
              <TabPane tab={`ITEM(${myGift.length})`} key="1">
                {myGift.length ? myGift.map(i => {
                  return (
                    <div key={i.id} className='GiftItemBox'>
                      <div><img src={i.img} alt="" /></div>
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
                {myGift.length ?
                  <div>
                    <Row className='RowBox' justify="center"><Pagination pageSize='5' total={itemTotal} showSizeChanger={false} onChange={(value) => setItemTotal(value)} /></Row>
                    <Row className='RowBox' justify="center"><Button type="primary" size='small'>{t(222)}</Button></Row>
                  </div>
                  : null
                }
              </TabPane>
              <TabPane tab={`VSX(${myGiftAsk.length})`} key="2">
                {VSX.length ? VSX.map(i => {
                  return (
                    <div key={i.id} className='GiftItemBox'>
                      <div><img src={i.img} alt="" /></div>
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
                {VSX.length ? <Row className='RowBox' justify="center"><Pagination pageSize='5' total={itemTotal} showSizeChanger={false} onChange={(value) => setItemTotal(value)} /></Row> : null}
                {VSX.length ?
                  <div>
                    <Row className='RowBox' justify="center"><Pagination pageSize='5' total={itemTotal} showSizeChanger={false} onChange={(value) => setItemTotal(value)} /></Row>
                    <Row className='RowBox' justify="center"><Button type="primary" size='small'>{t(222)}</Button></Row>
                  </div>
                  : null
                }
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab={`${t(219)}(${myGiftAsk.length})`} key="2">
            {myGiftAsk.length ? myGiftAsk.map(i => {
              return (
                <div key={i.id} className='GiftItemBox'>
                  <div><img src={i.img} alt="" /></div>
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
            {myGiftAsk.length ? <Row className='RowBox' justify="center"><Pagination pageSize='5' total={itemTotal} showSizeChanger={false} onChange={(value) => setItemTotal(value)} /></Row> : null}
            {myGiftAsk.length ?
              <div>
                <Row className='RowBox' justify="center"><Pagination pageSize='5' total={itemTotal} showSizeChanger={false} onChange={(value) => setItemTotal(value)} /></Row>
                <Row className='RowBox' justify="center"><Button type="primary" size='small'>{t(222)}</Button></Row>
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
      setBannerList(res.data.data)
    });
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
    getData()
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
        <Col span='2'>
          <div className='giftBox' onClick={() => setVisible(true)}><GiftOutlined /></div>
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