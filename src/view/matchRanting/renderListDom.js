import { useEffect } from 'react';

import { Row, Col } from 'antd';

const RenderDom = (prop) => {
  const { thisMonth, lastMonth } = prop;
  useEffect(() => {

  }, [])
  return (
    <div>
      <Row justify='space-around'>
        <Col span='11'>
          <div className='renderTitle renderTitleThis'>This Month</div>
          {thisMonth.map((i, index) => {
            return (
              <div key={i.id} className='renderDomBox'>
                <div className={index <= 2 ? `oderBg${index} renderImgBox` : 'renderImgBox'}>{i.id}</div>
                <div className='renderImgBox'><img src={i.img} alt="" /></div>
                <div>
                  <div>{i.teamName}</div>
                  <div className='renderLink'>{i.name}</div>
                </div>
                <div className='renderScore'>{i.count}</div>
                <div className='renderImgBox'><img src={i.country} alt="" /></div>
              </div>
            )
          })}
        </Col>
        <Col span='11'>
          <div className='renderTitle renderTitleLast'>Last Month</div>
          {lastMonth.map((i, index) => {
            return (
              <div key={i.id} className='renderDomBox'>
                <div className={index <= 2 ? `oderBg${index} renderImgBox` : 'renderImgBox'}>{i.id}</div>
                <div className='renderImgBox'><img src={i.img} alt="" /></div>
                <div>
                  <div>{i.teamName}</div>
                  <div className='renderLink'>{i.name}</div>
                </div>
                <div className='renderScore'>{i.count}</div>
                <div className='renderImgBox'><img src={i.country} alt="" /></div>
              </div>
            )
          })}
        </Col>
      </Row>
    </div>
  )
}
export default RenderDom;