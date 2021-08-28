import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Row, Col } from 'antd';
import NoData from '@/common/components/NoData';

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
        <Col span='11'>
          <div className='renderTitle renderTitleThis'>This Month</div>
          {thisMonth.length ? thisMonth.map((i, index) => {
            return (
              <div key={i.id} className='renderDomBox'>
                <div className={index <= 2 ? `oderBg${index} renderImgBox` : 'renderImgBox'}>{i.id}</div>
                <div className='renderImgBox'><img src={i.img} alt="" /></div>
                <div>
                  <div className='textOverFlow' title={i.teamName}>{i.teamName}</div>
                  <div className='renderLink textOverFlow' title={i.name} onClick={() => handleClick(i.id)}>{i.name}</div>
                </div>
                <div className='renderScore'>{i.count}</div>
                <div className='renderImgBox'><img src={i.country} alt="" /></div>
              </div>
            )
          }) : <NoData />}
        </Col>
        <Col span='11'>
          <div className='renderTitle renderTitleLast'>Last Month</div>
          {thisMonth.length ? lastMonth.map((i, index) => {
            return (
              <div key={i.id} className='renderDomBox'>
                <div className={index <= 2 ? `oderBg${index} renderImgBox` : 'renderImgBox'}>{i.id}</div>
                <div className='renderImgBox'><img src={i.img} alt="" /></div>
                <div>
                  <div className='textOverFlow' title={i.teamName}>{i.teamName}</div>
                  <div className='renderLink textOverFlow' title={i.name} onClick={() => handleClick(i.id)}>{i.name}</div>
                </div>
                <div className='renderScore'>{i.count}</div>
                <div className='renderImgBox'><img src={i.country} alt="" /></div>
              </div>
            )
          }) : <NoData />}
        </Col>
      </Row>
    </div>
  )
}
export default RenderDom;