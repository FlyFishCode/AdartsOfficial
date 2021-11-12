import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Row, Col } from 'antd';
import NoData from '@/common/components/NoData';
import { setCountryIconPosition } from '@/common/Utlis';

const RenderDom = (prop) => {
  const { thisMonth, lastMonth } = prop;
  const history = useHistory();
  const handleClick = (id) => {
    history.push({
      pathname: '/AdartsShop/ShopInfo',
      search: `?id=${id}`
    })
  };
  useEffect(() => {

  }, [])
  return (
    <div>
      <Row justify='space-around'>
        <Col lg={11} xs={24}>
          <div className='renderTitle renderTitleThis'>This Month</div>
          {thisMonth.length ? thisMonth.map((i, index) => {
            return (
              <div key={index} className='renderDomBox'>
                <div className={index <= 2 ? `oderBg${index} renderImgBox` : 'renderImgBox'}>{index + 1}</div>
                <div className='renderImgBox'><img src={i.portrait} alt="" /></div>
                <div>
                  <div className='textOverFlow' title={i.memberName}>{i.memberName}</div>
                  <div className='renderLink textOverFlow' title={i.homeShopName} onClick={() => handleClick(i.homeShopId)}>{i.homeShopName}</div>
                </div>
                <div className='renderScore'>{i.awardAmount}</div>
                <div className='renderCountryIcon' style={{ backgroundPosition: setCountryIconPosition(i.countryCode) }}></div>
              </div>
            )
          }) : <NoData />}
        </Col>
        <Col lg={11} xs={24}>
          <div className='renderTitle renderTitleLast'>Last Month</div>
          {thisMonth.length ? lastMonth.map((i, index) => {
            return (
              <div key={index} className='renderDomBox'>
                <div className={index <= 2 ? `oderBg${index} renderImgBox` : 'renderImgBox'}>{index + 1}</div>
                <div className='renderImgBox'><img src={i.portrait} alt="" /></div>
                <div>
                  <div className='textOverFlow' title={i.memberName}>{i.memberName}</div>
                  <div className='renderLink textOverFlow' title={i.name} onClick={() => handleClick(i.homeShopId)}>{i.homeShopName}</div>
                </div>
                <div className='renderScore'>{i.awardAmount}</div>
                <div className='renderCountryIcon' style={{ backgroundPosition: setCountryIconPosition(i.countryCode) }}></div>
              </div>
            )
          }) : <NoData />}
        </Col>
      </Row>
    </div>
  )
}
export default RenderDom;