import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Route, useHistory } from 'react-router-dom'
import { Row, Col, Select, Input, Pagination } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import cardImg from '@/assets/img/adartsCard.png';
import './index.css';

import NewsInfo from './newsInfo'



const { Option } = Select;



const NewsPage = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [activeClass, setActiveClass] = useState('1');
  const [type, setType] = useState('0');
  const [total, setTotal] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [infoList, setInfoList] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const getInfoList = () => {
    setInfoList([
      {
        id: 1,
        type: 1,
        content: 'AAAAAAAAAAAAAAAAAAAAAAAAAA',
        time: '2021-01-21'
      },
      {
        id: 2,
        type: 1,
        content: 'BBBBBBBBBBBBBBBBBBBBBBBBBB',
        time: '2021-02-22'
      },
      {
        id: 3,
        type: 1,
        content: 'CCCCCCCCCCCCCCCCCCCCCCCCCCC',
        time: '2021-03-23'
      },
      {
        id: 4,
        type: 1,
        content: 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
        time: '2021-04-24'
      },
      {
        id: 5,
        type: 1,
        content: 'EEEEEEEEEEEEEEEEEEEEEEEEEEEE',
        time: '2021-05-25'
      }
    ])
  }
  const getNewsList = () => {
    setNewsList([
      {
        id: 1,
        type: 3,
        title: 'adsadasdsadsad',
        src: cardImg,
        time: '2021-07-22',
        seeCount: 10,
      },
      {
        id: 2,
        type: 4,
        title: 'adsadasdsadsad',
        src: cardImg,
        time: '2021-07-22',
        seeCount: 10,
      },
      {
        id: 3,
        type: 3,
        title: 'adsadasdsadsad',
        src: cardImg,
        time: '2021-07-22',
        seeCount: 10,
      }
    ])
    setTotal(50)
  }
  const handlePageChange = (index) => {
    console.log(index);
  }
  const getType = (type) => {
    let str = ''
    switch (type) {
      case 3:
        str = t(8);
        break;
      case 4:
        str = t(7);
        break;
      default:
        str = t(9);
        break;
    }
    return str
  };
  const NewsList = () => {
    return (
      <div className='news'>
        <div className='news pageTitle'>{t(11)}</div>
        {infoList.map(i => {
          return (
            <div key={i.id} className='infoListBox'>
              <div>[{getType(i.type)}]</div>
              <div>{i.content}</div>
              <div>{i.time}</div>
            </div>
          )
        })}
        <Row className='RowBox'>
          <Col span='3'>
            <Select value={type} style={{ width: '100%' }} onChange={(value) => setType(value)}>
              <Option value="0">All</Option>
              <Option value="1">{t(7)}</Option>
              <Option value="2">{t(8)}</Option>
              <Option value="3">{t(9)}</Option>
            </Select>
          </Col>
          <Col span='21'>
            <Input.Search allowClear style={{ width: '100%' }} onSearch={(value) => setInputValue(value)} /></Col>
        </Row>
        <Row className='RowBox newsFirst'>
          {newsList.map(i => {
            return (
              <div key={i.id} className='newsBox'>
                <div className='newsImgBox'><img src={i.src} alt="" /></div>
                <div>
                  <div className='newsTitleBox'>
                    <div>[{getType(i.type)}]</div>
                    <div>{i.title}</div>
                  </div>
                  <div>{i.time}</div>
                  <div><EyeOutlined />{i.seeCount}</div>
                </div>
              </div>
            )
          })}
        </Row>
        <Row justify="center"><Pagination defaultCurrent={1} total={total} pageSize='5' showSizeChanger={false} onChange={handlePageChange} /></Row>
      </div>
    )
  }
  const handleClick = (e) => {
    history.push(e.target.getAttribute('path'))
    setActiveClass(e.target.getAttribute('active'))
  }
  useEffect(() => {
    getInfoList()
  }, [])
  useEffect(() => {
    getNewsList()
  }, [type, inputValue])
  return (
    <Row className='NewsBox'>
      <Col span='4' className='linkBox' onClick={handleClick}>
        <div className={activeClass === '1' ? 'activeClass' : null} active='1' path='/News' >11111</div>
        <div className={activeClass === '2' ? 'activeClass' : null} active='2' path='/News/NewsInfo'>22222</div>
      </Col>
      <Col span='19' offset='1'>
        <Switch>
          <Route path='/News' exact>
            <NewsList />
          </Route>
          <Route path='/News/NewsInfo'>
            <NewsInfo />
          </Route>
        </Switch>
      </Col>
    </Row>
  )
}
export default NewsPage;