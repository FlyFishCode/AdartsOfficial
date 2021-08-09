import { useState, useEffect } from 'react';
import { Row, Col, Carousel } from 'antd';
import { Switch, Route, useHistory } from 'react-router-dom';
import { indexBannerListHttp, dartsListHttp } from '@/api';
import { PlusCircleOutlined, LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import DartsList from './dartsList'

import './index.css';

const Content = () => {
  const history = useHistory();
  const [dartsList, setDartsList] = useState([]);
  const getData = () => {
    const obj = {
      countryId: sessionStorage.getItem('websiteCountryId'),
      type: 1,
      pageNum: 1,
      pageSize: 8,
    }
    dartsListHttp(obj).then(res => {
      setDartsList(res.data.data.list)
    })
  }
  const render = (id, contents) => {
    setTimeout(() => {
      const dom = document.querySelectorAll(`.dartsInfoContent${id}`);
      if (dom.length) {
        for (let i = 0; i < dom.length; i++) {
          contents = contents.replace(/(\n)/g, "");
          contents = contents.replace(/(\t)/g, "");
          contents = contents.replace(/(\r)/g, "");
          contents = contents.replace(/<\/?[^>]*>/g, "");
          contents = contents.replace(/\s*/g, "");
          dom[i].innerHTML = contents
        }
      }
    }, 200);
  }
  const handleClick = (id) => {
    history.push({
      pathname: '/DartsInfo',
      search: `?id=${id}`
    })
  }
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <div title={i.title}>{i.title}</div>
              <div>{i.cdateInt}</div>
              <div className={`dartsInfoContent${i.id}`}>{render(i.id, i.contents)}</div>
            </div>
          )
        })}
      </Row>
    </div>
  )
}


const Darts = () => {
  const [bannerList, setBannerList] = useState([]);
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
  const handleClick = (e) => {
    if (e.target.children[2]) {
      window.open(e.target.children[2].children[0].firstChild.getAttribute('data-item'))
    }
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div onClick={handleClick} className='CarouselBox'>
      <Carousel {...setting}>
        {bannerList.map((item, index) => {
          return (
            <div className='contentStyle' data-item={item.link} key={index} onClick={() => window.open(item.link)}>
              <img src={item.image} alt="" />
            </div>
          )
        })}
      </Carousel>
      <div className='containerBox'>
        <Switch>
          <Route path='/Darts' exact>
            <Content />
          </Route>
          <Route path='/Darts/DartsList'>
            <DartsList />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
export default Darts;
