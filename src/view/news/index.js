import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Route, useHistory } from 'react-router-dom'
import { Row, Col, Select, Input, Pagination } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { indexNewsListHttp } from '@/api';

import './index.css';

import NewsInfo from './newsInfo'

const { Option } = Select;

const NewsPage = () => {
  const { t } = useTranslation();
  const history = useHistory();
  // const [activeClass, setActiveClass] = useState('1');
  const [type, setType] = useState(0);
  const [total, setTotal] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [infoList, setInfoList] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const getInfoList = () => {
    const obj = {
      category: 6,
      countryId: sessionStorage.getItem('websiteCountryId'),
      pageNum: 1,
      pageSize: 5,
    }
    indexNewsListHttp(obj).then(res => {
      setInfoList(res.data.data.list)
    })
  }
  const getNewsList = (type, inputValue, pageNum) => {
    const obj = {
      category: type,
      title: inputValue,
      countryId: sessionStorage.getItem('websiteCountryId'),
      pageNum,
      pageSize: 5,
    }
    indexNewsListHttp(obj).then(res => {
      setNewsList(res.data.data.list)
      setTotal(res.data.data.total)
    })
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
    const handleNewInfoClick = (id) => {
      history.push({
        pathname: '/News/NewsInfo',
        state: { id }
      })
    }
    return (
      <div className='news'>
        <div className='news pageTitle'>{t(11)}</div>
        {infoList.map(i => {
          return (
            <div key={i.id} className='infoListBox' onClick={() => handleNewInfoClick(i.id)}>
              <div>[{getType(i.type)}]</div>
              <div>{i.title}</div>
              <div>{i.date}</div>
            </div>
          )
        })}
        <Row className='RowBox'>
          <Col span='3'>
            <Select value={type} style={{ width: '100%' }} onChange={(value) => setType(value)}>
              <Option value={0}>All</Option>
              <Option value={4}>{t(7)}</Option>
              <Option value={3}>{t(8)}</Option>
              <Option value={6}>{t(9)}</Option>
            </Select>
          </Col>
          <Col span='21'>
            <Input.Search allowClear style={{ width: '100%' }} onSearch={(value) => setInputValue(value)} /></Col>
        </Row>
        <Row className='RowBox newsFirst'>
          {newsList.map(i => {
            return (
              <div key={i.id} className='newsBox' onClick={() => handleNewInfoClick(i.id)}>
                <div className='newsImgBox'><img src={i.img} alt="" /></div>
                <div>
                  <div className='newsTitleBox'>
                    <div>[{getType(i.type)}]</div>
                    <div>{i.title}</div>
                  </div>
                  <div>{i.date}</div>
                  <div><EyeOutlined />{i.visitCount}</div>
                </div>
              </div>
            )
          })}
        </Row>
        <Row justify="center"><Pagination current={pageNum} total={total} pageSize='5' showSizeChanger={false} onChange={(value) => setPageNum(value)} /></Row>
      </div>
    )
  }
  // const handleClick = (e) => {
  //   history.push(e.target.getAttribute('path'))
  //   setActiveClass(e.target.getAttribute('active'))
  // }
  useEffect(() => {
    getInfoList()
  }, [])
  useEffect(() => {
    getNewsList(type, inputValue, pageNum)
  }, [type, inputValue, pageNum])
  return (
    <div className="boxContent containerBox">
      <Row className='NewsBox'>
        {/* <Col span='4' className='linkBox' onClick={handleClick}>
          <div className={activeClass === '1' ? 'activeClass' : null} active='1' path='/News' >11111</div>
          <div className={activeClass === '2' ? 'activeClass' : null} active='2' path='/News/NewsInfo'>22222</div>
        </Col> */}
        {/* <Col span='19' offset='1'> */}
        <Col span='24'>
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
    </div>
  )
}
export default NewsPage;
