import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Col, Row, Select, Input, Button, Calendar, Badge, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import icon1 from '@/assets/img/icon1.jpeg';
import icon2 from '@/assets/img/icon2.jpeg';
import a from '@/assets/img/a.jpg';
import NoData from '@/common/components/NoData';
import './index.css';

const { Option } = Select;


const Activities = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [year, setYear] = useState(2020);
  const [month, setMonth] = useState(1);
  const [type, setType] = useState(1);
  const [dateList, setDateList] = useState([]);
  const [activitieList, setActivitieList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [total, setTotal] = useState(1);
  const yearList = [
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 }
  ];
  const monthList = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 }
  ];
  const handleYearChange = (value) => {
    setYear(value)
  };
  const handleMonthChange = (value) => {
    setMonth(value)
  };
  const handleTypeChange = (value) => {
    setType(value)
  };
  const dateChange = (date) => {
    const obj = {
      year: date._d.getFullYear(),
      month: date._d.getMonth() + 1
    };
    console.log(obj);
  }
  const getListData = (date) => {
    const [year, month, day] = [new Date(date._d).getFullYear(), new Date(date._d).getMonth() + 1, new Date(date._d).getDate()];
    const today = `${year}-${month}-${day}`;
    return dateList.filter(i => i.date === today)
  }
  const handleDayClick = (count) => {
    console.log(count);
  }
  const dateCellRender = (value) => {
    const list = getListData(value)
    return (
      <div>
        {list.map((item, index) => {
          return (
            <div key={index} className='badgeBox'>
              {item.matchList.map((ele, jndex) => {
                return (
                  <div key={jndex} onClick={() => handleDayClick(item.count)}>
                    <Badge count={item.count} >
                      {ele.type === 1 ? <img className='activityImg' src={icon1} alt="" /> : <img className='activityImg' src={icon2} alt="" />}
                    </Badge>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
  const returnTypeStr = (type) => {
    if (type === 1) {
      return t(7)
    }
    return t(8)
  }
  const returnResultStr = (type) => {
    if (type === 1) {
      return t(201)
    }
    return t(202)
  }
  const getDate = () => {
    setDateList([]);
    setActivitieList([
      { id: 1, img: a, type: 1, result: 2, title: '请输入要搜索的新的名称或单击取消按钮', time: '2021 / 8 / 26', shop: 'RMK Cocktail bar(深业上城店)' },
      { id: 2, img: a, type: 2, result: 1, title: '请输入要搜索的新的名称或单击取消按', time: '2021 / 8 / 26', shop: 'RMK Cocktail bar(深业上城店)' },
      { id: 3, img: a, type: 1, result: 2, title: '请输入要搜索的新的名称或单击取消', time: '2021 / 8 / 26', shop: 'RMK Cocktail bar(深业上城店)' },
      { id: 4, img: a, type: 2, result: 1, title: '请输入要搜索的新的名称或单击取', time: '2021 / 8 / 26', shop: 'RMK Cocktail bar(深业上城店)' },
      { id: 5, img: a, type: 1, result: 2, title: '请输入要搜索的新的名称或单击', time: '2021 / 8 / 26', shop: 'RMK Cocktail bar(深业上城店)' },
      { id: 6, img: a, type: 2, result: 1, title: '请输入要搜索的新的名称或单', time: '2021 / 8 / 26', shop: 'RMK Cocktail bar(深业上城店)' },
      { id: 7, img: a, type: 1, result: 2, title: '请输入要搜索的新的名称或', time: '2021 / 8 / 26', shop: 'RMK Cocktail bar(深业上城店)' },
      { id: 8, img: a, type: 2, result: 1, title: '请输入要搜索的新的名称', time: '2021 / 8 / 26', shop: 'RMK Cocktail bar(深业上城店)' },
      { id: 9, img: a, type: 1, result: 2, title: '请输入要搜索的新的名', time: '2021 / 8 / 26', shop: 'RMK Cocktail bar(深业上城店)' },
    ]);
    setTotal(38);
  }
  const handleClick = (id) => {
    history.push({
      pathname: '/ShopActivitie/ActivitieInfo',
      search: `?id=${id}`
    })
  }
  useEffect(() => {
    getDate();
  }, [])
  return (
    <div>
      <div className='myPageTitle'>{t(13)}</div>
      <Row>
        <Col span='8'>
          <Select value={year} style={{ width: '100%' }} onChange={handleYearChange}>
            {yearList.map(i => {
              return (
                <Option key={i.value} value={i.value}>{i.label}</Option>
              )
            })}
          </Select>
        </Col>
        <Col span='7' offset='1'>
          <Select value={month} style={{ width: '100%' }} onChange={handleMonthChange}>
            {monthList.map(i => {
              return (
                <Option key={i.value} value={i.value}>{i.label}</Option>
              )
            })}
          </Select>
        </Col>
        <Col span='7' offset='1'>
          <Select value={type} style={{ width: '100%' }} onChange={handleTypeChange}>
            <Option value={1}>All</Option>
            <Option value={2}>{t(7)}</Option>
            <Option value={3}>{t(8)}</Option>
          </Select>
        </Col>
      </Row>
      <Row className='RowBox'>
        <Col span='20'><Input placeholder="Please enter a search" /></Col>
        <Col span='3' offset='1'><Button style={{ width: '100%' }} type='primary' icon={<SearchOutlined />}>Search</Button></Col>
      </Row>
      <Row className='RowBox' style={{ position: 'relative' }}>
        <div className='shopActivitie'>
          <Calendar dateCellRender={dateCellRender} onPanelChange={dateChange} />
        </div>
      </Row>
      <Row className='RowBox'>
        <div className='shopActivitieTitle'>{t(13)}</div>
        {activitieList.length ? activitieList.map(i => {
          return (
            <div key={i.id} className='activitieBox' onClick={() => handleClick(i.id)}>
              <div className='activitieImgBox'><img src={i.img} alt="" /></div>
              <div className='activitieTitle'>
                <div className='activitieTitleFirst'>
                  <div>{returnTypeStr(i.type)}</div>
                  <div>{returnResultStr(i.result)}</div>
                  <div className='textOverFlow' title={i.title}>{i.title}</div>
                </div>
                <div>
                  <div>{i.time}</div>
                  <div>{i.shop}</div>
                </div>
              </div>
            </div>
          )
        }) : <NoData />}
      </Row>
      <Row justify='center'><Pagination current={pageNum} total={total} pageSize={10} showSizeChanger={false} onChange={(value) => setPageNum(value)} /></Row>
    </div>
  )
}
export default Activities;