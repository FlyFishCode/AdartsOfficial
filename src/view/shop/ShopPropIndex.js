import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col, Button } from 'antd';
import NoData from '@/common/components/NoData';

import { shopPropsListHttp } from '@/api';

// const { Option } = Select;

const ShopPropIndex = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [recommendList, setRecommendList] = useState({ newItems: [], rankingItems: [], recommendItems: [] });
  const getData = () => {
    shopPropsListHttp({ number: 4 }).then(res => {
      setRecommendList(res.data.data)
    })
  }
  const handleClick = (id) => {
    history.push({
      pathname: '/ShopProp/ItemBuy',
      search: `?id=${id}`
    })
  }
  const handleBrnClick = (type) => {
    history.push({
      pathname: '/ShopProp/ItemBuy',
      search: `?type=${type}`
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <div className='shopPropBox'>
        <div className='shopItemRow'>—————————————————————————————— {t(169)} ——————————————————————————————</div>
        <div className='recommendBox'>
          {recommendList.recommendItems.length ? recommendList.recommendItems.map(i => {
            return (
              <div key={i.id} onClick={() => handleClick(i.id)}>
                <div><img src={i.url.split(',')[0]} alt="" /></div>
                <div className='recommendBoxTitle'>{i.title}</div>
              </div>
            )
          }) : <NoData />}
        </div>
        <Row justify="center"><Col span='3' className='recommendBtn'><Button onClick={() => handleBrnClick(1)}>More</Button></Col></Row>
      </div>
      <div className='shopPropBox'>
        <div className='shopItemRow'>—————————————————————————————— {t(170)} ——————————————————————————————</div>
        <div className='recommendBox'>
          {recommendList.newItems.length ? recommendList.newItems.map(i => {
            return (
              <div key={i.id} onClick={() => handleClick(i.id)}>
                <div><img src={i.url.split(',')[0]} alt="" /></div>
                <div className='recommendBoxTitle'>{i.title}</div>
              </div>
            )
          }) : <NoData />}
        </div>
        <Row justify="center"><Col span='3' className='recommendBtn'><Button onClick={() => handleBrnClick(2)}>More</Button></Col></Row>
      </div>
      <div className='shopPropBox'>
        <div className='shopItemRow'>—————————————————————————————— {t(171)} ——————————————————————————————</div>
        <div className='recommendBox'>
          {recommendList.rankingItems.length ? recommendList.rankingItems.map(i => {
            return (
              <div key={i.id} onClick={() => handleClick(i.id)}>
                <div><img src={i.url.split(',')[0]} alt="" /></div>
                <div className='recommendBoxTitle'>{i.title}</div>
              </div>
            )
          }) : <NoData />}
        </div>
        <Row justify="center"><Col span='3' className='recommendBtn'><Button onClick={() => handleBrnClick(3)}>More</Button></Col></Row>
      </div>
    </div>
  )
}
export default ShopPropIndex;