import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Col, Row, Select, Input, Button, Calendar, Badge, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { activityDateListHttp, activityListHttp } from '@/api';

import icon1 from '@/assets/img/icon1.jpeg';
import icon2 from '@/assets/img/icon2.jpeg';
import NoData from '@/common/components/NoData';
import './index.css';

const { Option } = Select;


const Activities = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [year, setYear] = useState(2020);
  const [month, setMonth] = useState('01');
  const [type, setType] = useState('');
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
  const handleDayClick = (count) => {
    console.log(count);
  }
  const dateCellRender = (value) => {
    const currentList = getListData(value);
    return currentList.map((item, index) => {
      return (
        <div key={index} onClick={() => handleDayClick(item.date)}>
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
  const getDate = () => {
    let month = new Date().getMonth() + 1;
    if (month <= 9) {
      month = '0' + month
    }
    const obj = {
      type: null,
      title: '',
      year: new Date().getFullYear(),
      month,
    };
    activityDateListHttp(obj).then(res => {
      const temp1 = res.data.data.activityList.map(i => {
        return {
          type: 1,
          count: i.amount,
          id: i.activityId,
          date: i.date
        }
      })
      const temp2 = res.data.data.matchList.map(i => {
        return {
          type: 2,
          count: i.amount,
          id: i.activityId,
          date: i.date
        }
      })
      setList(temp1.concat(temp2));
      setTotal(38);
    });
    activityListHttp(obj).then(res => {
      setActivitieList(res.data.data)
    })
  }
  const getDataList = () => {
    const obj = {
      type,
      title: searchValue,
      year,
      month,
    };
    activityListHttp(obj).then(res => {
      setActivitieList(res.data.data)
    })
  };
  const handleClick = (id) => {
    history.push({
      pathname: '/ShopActivitie/ActivitieInfo',
      search: `?id=${id}`
    })
  }
  useEffect(() => {
    getDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, type, month])
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
            <Option value=''>All</Option>
            <Option value={0}>{t(7)}</Option>
            <Option value={1}>{t(8)}</Option>
          </Select>
        </Col>
      </Row>
      <Row className='RowBox'>
        <Col span='20'><Input placeholder="Please enter a search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} allowClear /></Col>
        <Col span='3' offset='1'><Button style={{ width: '100%' }} type='primary' icon={<SearchOutlined />} onClick={getDataList}>Search</Button></Col>
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
              <div className='activitieImgBox'><img src={i.thumbnail} alt="" /></div>
              <div className='activitieTitle'>
                <div className='activitieTitleFirst'>
                  <div>{i.type === 1 ? t(7) : t(8)}</div>
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
      <Row justify='center'><Pagination current={pageNum} total={total} pageSize={10} showSizeChanger={false} onChange={(value) => setPageNum(value)} /></Row>
    </div>
  )
}
export default Activities;