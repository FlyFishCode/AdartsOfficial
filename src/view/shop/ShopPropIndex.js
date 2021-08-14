import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col, Button } from 'antd';
// import NoData from '@/common/components/noData';

// const { Option } = Select;

import a from '@/assets/img/a.jpg'

const ShopPropIndex = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [recommendList, setRecommendList] = useState([]);
  const getData = () => {
    setRecommendList([
      { id: 1, img: a, title: 'AAA' },
      { id: 2, img: a, title: 'BBB' },
      { id: 3, img: a, title: 'CCC' },
      { id: 4, img: a, title: 'DDD' },
    ])
  }
  const handleClick = (type, id) => {
    switch (type) {
      case 1:
        history.push({
          pathname: '',
          search: { id }
        })
        break;
      case 2:
        history.push({
          pathname: '',
          search: { id }
        })
        break;
      default:
        history.push({
          pathname: '',
          search: { id }
        })
        break;
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <div className='shopPropBox'>
        <div className='shopItemRow'>—————————————————————————————— {t(169)} ——————————————————————————————</div>
        <div className='recommendBox'>
          {recommendList.map(i => {
            return (
              <div key={i.id} onClick={() => handleClick(1, i.id)}>
                <div><img src={i.img} alt="" /></div>
                <div className='recommendBoxTitle'>{i.title}</div>
              </div>
            )
          })}
        </div>
        <Row justify="center"><Col span='3' className='recommendBtn'><Button>More</Button></Col></Row>
      </div>
      <div className='shopPropBox'>
        <div className='shopItemRow'>—————————————————————————————— {t(170)} ——————————————————————————————</div>
        <div className='recommendBox'>
          {recommendList.map(i => {
            return (
              <div key={i.id} onClick={() => handleClick(2, i.id)}>
                <div><img src={i.img} alt="" /></div>
                <div className='recommendBoxTitle'>{i.title}</div>
              </div>
            )
          })}
        </div>
        <Row justify="center"><Col span='3' className='recommendBtn'><Button>More</Button></Col></Row>
      </div>
      <div className='shopPropBox'>
        <div className='shopItemRow'>—————————————————————————————— {t(171)} ——————————————————————————————</div>
        <div className='recommendBox'>
          {recommendList.map(i => {
            return (
              <div key={i.id} onClick={() => handleClick(3, i.id)}>
                <div><img src={i.img} alt="" /></div>
                <div className='recommendBoxTitle'>{i.title}</div>
              </div>
            )
          })}
        </div>
        <Row justify="center"><Col span='3' className='recommendBtn'><Button>More</Button></Col></Row>
      </div>
    </div>
  )
}
export default ShopPropIndex;