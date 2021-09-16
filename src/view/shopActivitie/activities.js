import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Col, Row, Select, Input, Button, Calendar, Badge, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { activityDateListHttp, activityListHttp } from '@/api';

import { dealUrlHash } from '@/common/Utlis';

import icon1 from '@/assets/img/icon1.jpeg';
import icon2 from '@/assets/img/icon2.jpeg';
import NoData from '@/common/components/NoData';
import './index.css';

const { Option } = Select;


const Activities = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const renderMonth = () => {
    let initMonth = new Date().getMonth() + 1;
    if (initMonth <= 9) {
      initMonth = '0' + initMonth
    }
    return initMonth;
  }
  const [list, setList] = useState([]);
  const [title, setTtitle] = useState('');
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(renderMonth());
  const [type, setType] = useState(null);
  const [activitieList, setActivitieList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [total, setTotal] = useState(1);
  const yearList = [
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 }
  ];
  const monthList = [
    { value: '01', label: 1 },
    { value: '02', label: 2 },
    { value: '03', label: 3 },
    { value: '04', label: 4 },
    { value: '05', label: 5 },
    { value: '06', label: 6 },
    { value: '07', label: 7 },
    { value: '08', label: 8 },
    { value: '09', label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 }
  ];
  const getListData = (date) => {
    let [year, month, day] = [new Date(date._d).getFullYear(), new Date(date._d).getMonth() + 1, new Date(date._d).getDate()];
    if (month <= 9) {
      month = '0' + month
    }
    if (day <= 9) {
      day = '0' + day
    }
    const today = `${year}-${month}-${day}`;
    return list.filter(i => i.date === today)
  }
  const dateCellRender = (value) => {
    const currentList = getListData(value);
    return currentList.map((item, index) => {
      return (
        <div key={index} onClick={() => handleClick(item.id)}>
          <Badge count={item.count} >
            {item.type === 1 ? <img className='activityImg' src={icon1} alt="" /> : <img className='activityImg' src={icon2} alt="" />}
          </Badge>
        </div>
      )
    })
  }
  const returnResultStr = (type) => {
    let srt = '';
    switch (type) {
      case 0:
        srt = t(216);
        break;
      case 1:
        srt = t(201);
        break;
      default:
        srt = t(202);
        break;
    }
    return srt
  }
  const getDate = (obj) => {
    activityDateListHttp(obj).then(res => {
      const temp1 = res.data.data.activityList ? res.data.data.activityList.map(i => {
        return {
          type: 1,
          count: i.amount,
          id: i.activityId,
          date: i.date
        }
      }) : []
      const temp2 = res.data.data.matchList ? res.data.data.matchList.map(i => {
        return {
          type: 2,
          count: i.amount,
          id: i.activityId,
          date: i.date
        }
      }) : []
      setList(temp1.concat(temp2));
    });
  }
  const getDataList = () => {
    const obj = {
      title,
      year,
      month,
      type,
      countryId: sessionStorage.getItem('websiteCountryId'),
      pageNum,
      pageSize: 5
    };
    getDate(obj);
    activityListHttp(obj).then(res => {
      if (res.data.code === 100) {
        setActivitieList(res.data.data.list);
        setTotal(res.data.data.total);
      }
    })
  };
  const handleClick = (id) => {
    history.push({
      pathname: '/ShopActivitie/ActivitieInfo',
      search: `?id=${id}`
    })
  }
  useEffect(() => {
    if (location.search) {
      setType(Number(dealUrlHash(location)));
    } else {
      getDataList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month, type, pageNum])
  return (
    <div>
      <div className='myPageTitle'>{t(13)}</div>
      <Row>
        <Col span='8'>
          <Select value={year} style={{ width: '100%' }} onChange={(value) => setYear(value)}>
            {yearList.map(i => {
              return (
                <Option key={i.value} value={i.value}>{i.label}</Option>
              )
            })}
          </Select>
        </Col>
        <Col span='7' offset='1'>
          <Select value={month} style={{ width: '100%' }} onChange={(value) => setMonth(value)}>
            {monthList.map(i => {
              return (
                <Option key={i.value} value={i.value}>{i.label}</Option>
              )
            })}
          </Select>
        </Col>
        <Col span='7' offset='1'>
          <Select value={type} style={{ width: '100%' }} onChange={(value) => setType(value)}>
            <Option value={null}>All</Option>
            <Option value={0}>{t(7)}</Option>
            <Option value={1}>{t(8)}</Option>
          </Select>
        </Col>
      </Row>
      <Row className='RowBox'>
        <Col span='20'><Input placeholder="Please enter a search" value={title} onChange={(e) => setTtitle(e.target.value)} allowClear /></Col>
        <Col span='3' offset='1'><Button style={{ width: '100%' }} type='primary' icon={<SearchOutlined />} onClick={() => getDataList()}>Search</Button></Col>
      </Row>
      <Row className='RowBox' style={{ position: 'relative' }}>
        <div className='activeInfoBox'>
          <Calendar dateCellRender={dateCellRender} />
        </div>
      </Row>
      <Row className='RowBox'>
        <div className='shopActivitieTitle'>{t(13)}</div>
        {activitieList.length ? activitieList.map(i => {
          return (
            <div key={i.id} className='activitieBox' onClick={() => handleClick(i.id)}>
              <div className='activitieImgBox'><img src={i.thumbnail} alt="" /></div>
              <div className='activitieTitle'>
                <div className='activitieTitleFirst'>
                  <div>{i.type === 0 ? t(7) : t(8)}</div>
                  <div>{returnResultStr(i.state)}</div>
                  <div className='textOverFlow' title={i.title}>{i.title}</div>
                </div>
                <div>
                  <div>{i.startDate} - {i.endDate}</div>
                  <div className='shopBox'>
                    {i.shopList.map(i => {
                      return (
                        <div key={i.shopId}>{i.shopName}</div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        }) : <NoData />}
      </Row>
      <Row justify='center'><Pagination current={pageNum} total={total} defaultPageSize='5' showSizeChanger={false} onChange={(value) => setPageNum(value)} /></Row>
    </div>
  )
}
export default Activities;