import { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Switch, Route, useHistory } from 'react-router-dom';
import { indexBannerListHttp } from '@/api';
import { PlusCircleOutlined } from '@ant-design/icons';
import Slider from "react-slick";
import DartsList from './dartsList'

import m from '@/assets/img/m.png'


const Content = () => {
  const history = useHistory();
  const [dartsList, setDartsList] = useState([]);
  const getData = () => {
    setDartsList([
      {
        id: 1,
        title: 'AAAAAAAA',
        author: '刘长安',
        time: '2021 / 8 / 1',
        content: `杨沛手下有一小吏，名唤刘慈。一日许都华泰郡派小吏来我司公干，夜宿城西驿官。
                 小吏家穷，偷拿驿官席塌。被巡夜兵丁扭送至官府，刘慈不由分说，当即棒杀。
                 后问之，答曰：孔子曰朝闻盗席死矣。 盗席虽小，但按圣人教诲应当处死。
                 饶是在场诸位饱读诗书也不曾记得孔子何时说过此话。半晌无语。突听杨修哈哈大笑到：哎，这小吏弄岔仳了。是朝问道,夕死可矣。`
      },
      {
        id: 2,
        title: 'BBBBBBBB',
        author: '李逍遥',
        time: '2021 / 8 / 2',
        content: `杨沛手下有一小吏，名唤刘慈。一日许都华泰郡派小吏来我司公干，夜宿城西驿官。
                 小吏家穷，偷拿驿官席塌。被巡夜兵丁扭送至官府，刘慈不由分说，当即棒杀。
                 后问之，答曰：孔子曰朝闻盗席死矣。 盗席虽小，但按圣人教诲应当处死。
                 饶是在场诸位饱读诗书也不曾记得孔子何时说过此话。突听杨修哈哈大笑到：哎，这小吏弄岔仳了。是朝问道,夕死可矣。`
      },
      {
        id: 3,
        title: 'CCCCCCCCC',
        author: '张自然',
        time: '2021 / 8 / 3',
        content: `杨沛手下有一小吏，名唤刘慈。一日许都华泰郡派小吏来我司公干，夜宿城西驿官。
                 小吏家穷，偷拿驿官席塌。被巡夜兵丁扭送至官府，刘慈不由分说，当即棒杀。
                 后问之，答曰：孔子曰朝闻盗席死矣。 盗席虽小，但按圣人教诲应当处死。
                 饶是在场诸位饱读诗书也不曾记得孔子何时说过此话。突听杨修哈哈大笑到：哎，这小吏弄岔仳了。是朝问道,夕死可矣。`
      },
      {
        id: 4,
        title: 'DDDDDDDD',
        author: '吕明',
        time: '2021 / 8 / 4',
        content: `杨沛手下有一小吏，名唤刘慈。一日许都华泰郡派小吏来我司公干，夜宿城西驿官。
                 小吏家穷，偷拿驿官席塌。被巡夜兵丁扭送至官府，刘慈不由分说，当即棒杀。
                 后问之，答曰：孔子曰朝闻盗席死矣。 盗席虽小，但按圣人教诲应当处死。
                 饶是在场诸位饱读诗书也不曾记得孔子何时说过此话。突听杨修哈哈大笑到：哎，这小吏弄岔仳了。是朝问道,夕死可矣。`
      },
      {
        id: 5,
        title: 'EEEEEEEEEE',
        author: '孙志',
        time: '2021 / 8 / 5',
        content: `杨沛手下有一小吏，名唤刘慈。一日许都华泰郡派小吏来我司公干，夜宿城西驿官。
                 小吏家穷，偷拿驿官席塌。被巡夜兵丁扭送至官府，刘慈不由分说，当即棒杀。
                 后问之。答曰：孔子曰朝闻盗席，死矣。 盗席虽小，但按圣人教诲应当处死。
                 饶是在场诸位饱读诗书也不曾记得孔子何时说过此话。突听杨修哈哈大笑到：哎，这小吏弄岔仳了。是朝问道,夕死可矣。`
      },
      {
        id: 6,
        title: 'FFFFFFFFF',
        author: '吴痰',
        time: '2021 / 8 / 6',
        content: `杨沛手下有一小吏，名唤刘慈。一日许都华泰郡派小吏来我司公干，夜宿城西驿官。
                 小吏家穷，偷拿驿官席塌。被巡夜兵丁扭送至官府，刘慈不由分说，当即棒杀。
                 后问之，答曰：孔子曰朝闻盗席死矣。 盗席虽小，但按圣人教诲应当处死。
                 饶是在场诸位饱读诗书也不曾记得孔子何时说过此话。突听杨修哈哈大笑到：哎，这小吏弄岔仳了。是朝问道,夕死可矣。`
      },
      {
        id: 7,
        title: 'GGGGGGGG',
        author: '常涛',
        time: '2021 / 8 / 7',
        content: `杨沛手下有一小吏，名唤刘慈。一日许都华泰郡派小吏来我司公干，夜宿城西驿官。
                 小吏家穷，偷拿驿官席塌。被巡夜兵丁扭送至官府，刘慈不由分说，当即棒杀。
                 后问之，答曰：孔子曰朝闻盗席死矣。 盗席虽小，但按圣人教诲应当处死。
                 饶是在场诸位饱读诗书也不曾记得孔子何时说过此话。突听杨修哈哈大笑到：哎，这小吏弄岔仳了。是朝问道,夕死可矣。`
      },
      {
        id: 8,
        title: 'HHHHHHHH',
        author: '段狂胤',
        time: '2021 / 8 / 8',
        content: `杨沛手下有一小吏，名唤刘慈。一日许都华泰郡派小吏来我司公干，夜宿城西驿官。
                 小吏家穷，偷拿驿官席塌。被巡夜兵丁扭送至官府，刘慈不由分说，当即棒杀。
                 后问之，答曰：孔子曰朝闻盗席死矣。 盗席虽小，但按圣人教诲应当处死。
                 饶是在场诸位饱读诗书也不曾记得孔子何时说过此话。突听杨修哈哈大笑到：哎，这小吏弄岔仳了。是朝问道,夕死可矣。`
      }
    ])
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
            <Col span='6' key={i.id} className='dartsContent'>
              <div><img src={m} alt="" /></div>
              <div>{i.title}</div>
              <div>{`${i.author}    ${i.time}`}</div>
              <div>{i.content}</div>
            </Col>
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
    autoplaySpeed: 1000,
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
export default Darts