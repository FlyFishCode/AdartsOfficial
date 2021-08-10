import { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { PhoneOutlined } from '@ant-design/icons';
import { shopInfoHttp } from '@/api';
import { dealUrlHash } from '@/common/Utlis';
import shopImg from '@/assets/img/shop.png'



const AdartsShopInfo = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [shopInfo, setShopInfo] = useState({ machineList: [] });
  const getShopList = (shopId) => {
    shopInfoHttp({ shopId }).then(res => {
      if (res.data.code === 100) {
        setShopInfo(res.data.data)
      }
    })
  }
  useEffect(() => {
    getShopList(dealUrlHash(location));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='shopInfoBox'>
      <Row>
        <Col span='3'>
          <div className='shopInfoImgBox'><img src={shopInfo.shopImg ? shopInfo.shopImg : shopImg} onError={(e) => e.target.src = shopImg} alt="" /></div>
        </Col>
        <Col span='12' className='shopInfoContent'>
          <div>{shopInfo.shopName}</div>
          <div>
            <div></div>
            {shopInfo.machineList[0] ?
              <div>{`${shopInfo.machineList[0].machineType}：${shopInfo.machineList[0].machineNum} `}</div> :
              <div>{`${t(145)}：0`}</div>
            }
            {shopInfo.machineList[1] ?
              <div>{`${shopInfo.machineList[1].machineType}：${shopInfo.machineList[1].machineNum} `}</div> :
              <div>{`${t(146)}：0`}</div>
            }
          </div>
        </Col>
        <Col span='5' >
          {shopInfo.shopPhone ? <div className='shopInfoPhoneBox'><PhoneOutlined />{shopInfo.shopPhone}</div> : null}
        </Col>
        {/* <Col span='4' style={{ textAlign: 'center' }}> <Button icon={<EnvironmentOutlined />} type="primary" >{t(147)}</Button></Col> */}
      </Row>
      {/* <Row className='RowBox shopInfoTitle'>{t(148)}</Row> */}
      <Row>
        <Col span='6'>
          <div className='shopInfoOtherBox'><img src={shopInfo.shopImg ? shopInfo.shopImg : shopImg} onError={(e) => e.target.src = shopImg} alt="" /></div>
        </Col>
        <Col span='18' className='shopInfoOther'>
          <div>{t(160)}</div>
          <div>
            <div>--------------------</div>
            <div>--------------------</div>
            <div>--------------------</div>
          </div>
        </Col>
      </Row>
      <Row className='RowBox'>
        <Col span='6'>
          <div className='shopInfoOtherBox'><img src={shopInfo.shopImg ? shopInfo.shopImg : shopImg} onError={(e) => e.target.src = shopImg} alt="" /></div>
        </Col>
        <Col span='18' className='shopInfoLabelBox'>
          <div>
            <div className='shopInfoLabel'>{t(149)}</div>
            <div>{shopInfo.openingTime}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(150)}</div>
            <div>{shopInfo.offTime || '-'}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(151)}</div>
            <div>{shopInfo.shopAddress || '-'}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>TEL</div>
            <div>{shopInfo.shopPhone}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(152)}</div>
            <div>{'-'}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(153)}</div>
            <div>{'-'}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(154)}</div>
            <div>{'-'}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(155)}</div>
            <div>{'-'}</div>
          </div>
          <div>
            <div className='shopInfoLabel'>{t(156)}</div>
            <div>{shopInfo.url || '-'}</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default AdartsShopInfo