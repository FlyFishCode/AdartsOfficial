import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
// import { countryListHttp } from '@/api'

import a from '@/assets/img/a.jpg'


const AdartsShopInfo = () => {
  const { t } = useTranslation();
  const location = useLocation();
  console.log(location.state);
  const [shopInfo, setShopInfo] = useState({});
  const getShopList = () => {
    setShopInfo(
      {
        id: 1,
        img: a,
        A1: 10,
        W1: 8,
        shopName: '11111111111111',
        shopPhone: 'External Resources',
        shopAddress: '杨皓然杨倩夺得中国第9金！ 奥运会10米气步枪混合团体决赛中，中国选手杨皓然/杨倩夺得冠军！弓摧南山虎，手接太行猱！#2020东京奥运会#'
      })
  }
  useEffect(() => {
    getShopList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='shopInfoBox'>
      <Row>
        <Col span='3'>
          <div className='shopInfoImgBox'><img src={shopInfo.img} alt="" /></div>
        </Col>
        <Col span='10' className='shopInfoContent'>
          <div>{shopInfo.shopName}</div>
          <div>
            <div></div>
            <div>{`${t(145)}：${shopInfo.A1}`}</div>
            <div>{`${t(146)}：${shopInfo.W1}`}</div>
          </div>
        </Col>
        <Col span='6' offset='1'>
          <div className='shopInfoPhoneBox'><PhoneOutlined />{shopInfo.shopPhone}</div>
        </Col>
        <Col span='4' style={{ textAlign: 'center' }}> <Button icon={<EnvironmentOutlined />} type="primary" >{t(147)}</Button></Col>
      </Row>
      <Row className='RowBox shopInfoTitle'>{t(148)}</Row>
      <Row>
        <Col span='6'>
          <div className='shopInfoOtherBox'><img src={shopInfo.img} alt="" /></div>
        </Col>
        <Col span='18' className='shopInfoOther'>
          <div>{'来自店铺的信息'}</div>
          <div>
            <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          </div>
        </Col>
      </Row>
      <Row className='RowBox'>
        <Col span='6'>
          <div className='shopInfoOtherBox'><img src={shopInfo.img} alt="" /></div>
        </Col>
        <Col span='18' className='shopInfoLabelBox'>
          <div>
            <div className='shopInfoLabel'>{t(149)}</div>
            <div>{shopInfo.shopAddress}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(150)}</div>
            <div>{shopInfo.shopPhone}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(151)}</div>
            <div>{shopInfo.shopPhone}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>TEL</div>
            <div>{shopInfo.shopPhone}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(152)}</div>
            <div>{shopInfo.shopPhone}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(153)}</div>
            <div>{shopInfo.shopPhone}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(154)}</div>
            <div>{shopInfo.shopPhone}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(155)}</div>
            <div>{shopInfo.shopPhone}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(156)}</div>
            <div>{shopInfo.shopPhone}</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default AdartsShopInfo