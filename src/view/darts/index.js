import { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Switch, Route, useHistory } from 'react-router-dom';
import { indexBannerListHttp, dartsListHttp } from '@/api';
import { PlusCircleOutlined } from '@ant-design/icons';
import Slider from "react-slick";
import DartsList from './dartsList'


const Content = () => {
  const history = useHistory();
  const [dartsList, setDartsList] = useState([]);
  const getData = () => {
    const obj = {
      countryId: 208,
      pageNum: 1,
      pageSize: 8,
    }
    dartsListHttp(obj).then(res => {
      setDartsList(res.data.data.list)
    })
  }
  const render = (contents) => {
    if (document.querySelector('.dartsInfoContent')) {
      document.querySelector('.dartsInfoContent').innerHTML = contents
    }
    return (
      <div className='dartsInfoContent'></div>
    )
  }
  const handleClick = (id) => {
    history.push({
      pathname: '/DartsInfo',
      state: { id }
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='darts'>
      <Row justify="space-between" className='dartsTitleBox'>
        <Col span='2'>飞镖 Darts</Col>
        <Col span='2' style={{ cursor: 'pointer' }} onClick={() => history.push('/Darts/DartsList')}>更多<PlusCircleOutlined /></Col>
      </Row>
      <Row className='dartsContentBox'>
        {dartsList.map(i => {
          return (
            <div key={i.id} className='dartsContent' onClick={() => handleClick(i.id)}>
              <div><img src={i.thumbnail} alt="" /></div>
              <div>{i.title}</div>
              <div>{`${i.author}    ${i.cdateInt}`}</div>
              {render(i.contents)}
            </div>
          )
        })}
      </Row>
    </div>
  )
}


const Darts = () => {
  const [bannerList, setBannerList] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
  }
  const getData = () => {
    indexBannerListHttp({ countryId: 208 }).then(res => {
      setBannerList(res.data.data)
    });
  }
  const handleClick = (id) => {
    console.log(id)
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
      <Slider {...settings} className='bannerBox' dotsClass='slick-dots'>
        {bannerList.map((item, index) => {
          return (
            <div className='contentStyle' key={index} onClick={() => handleClick(item.id)}>
              <img src={item.image} alt="" />
            </div>
          )
        })}
      </Slider>
      <Switch>
        <Route path='/Darts' exact>
          <Content />
        </Route>
        <Route path='/Darts/DartsList'>
          <DartsList />
        </Route>
      </Switch>
    </div>
  )
}
export default Darts;