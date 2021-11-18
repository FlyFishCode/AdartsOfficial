import { useState, useEffect } from 'react';
import { Input, Select, Row, Col, Table, Rate } from 'antd';
import { useTranslation } from 'react-i18next';

import { friendsListHttp, starSettingHttp } from '@/api';

const { Search } = Input;
const { Option } = Select;

const FriendsList = () => {
  const { t } = useTranslation();
  const [dataList, setDataList] = useState([]);
  const [selectValue, setSelectValue] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [total, setTotal] = useState(1);
  const columns = [
    {
      title: t(102),
      dataIndex: 'friendPortrait',
      render: (text, row, index) => {
        return (
          <div key={index} style={{ height: '50px', width: '50px' }}>
            <img style={{ width: '100%', height: '100%' }} src={text} alt="" />
          </div>
        )
      }
    },
    {
      title: t(38),
      dataIndex: 'friendName',
    },
    {
      title: 'RT',
      dataIndex: 'rating',
    },
    {
      title: 'PPD',
      dataIndex: 'ppd',
    },
    {
      title: 'MPR',
      dataIndex: 'mpr',
    },
    {
      title: t(95),
      dataIndex: 'star',
      render: (text, row, index) => {
        return (
          <div className='handleBox'>
            <Rate count='1' value={text} onChange={() => handleRateChange(row.memberRelationshipId, row.star)} />
          </div>
        )
      }
    }
  ];
  const handleRateChange = (memberRelationshipId, star) => {
    const obj = {
      memberRelationshipId,
      star: Number(!Boolean(star))
    }
    starSettingHttp(obj).then(res => {
      if (res.data.code === 100) {
        getData()
      }
    })
  }
  // const handleClick = () => {
  //   const ele = document.getElementById('AddFriends');
  //   ele && ele.scrollIntoView({
  //     behavior: "smooth", // 默认 auto
  //     block: "start", // 默认 center
  //     inline: "nearest", // 默认 nearest
  //   })
  // }
  const getData = (pageNum) => {
    const obj = {
      type: selectValue,
      status: 1,
      memberId: sessionStorage.getItem('websiteMemberId'),
      friendName: searchValue,
      pageNum: pageNum,
      pageSize: 10
    }
    friendsListHttp(obj).then(res => {
      if (res.data.code === 100) {
        setDataList(res.data.data.list)
        setTotal(res.data.data.total)
      }
    })
  }
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum])
  return (
    <div>
      <div className='myPageTitle' id='FriendsList'>{t(67)}</div>
      <Row justify="center">
        <Col>
          <Select value={selectValue} style={{ width: 150 }} onChange={(value) => setSelectValue(value)}>
            <Option value={0}>{t(92)}</Option>
            <Option value={1}>{t(93)}</Option>
            <Option value={2}>{t(94)}</Option>
          </Select>
          <Search placeholder="input search text" onChange={(e) => setSearchValue(e.target.value)} onSearch={() => getData()} style={{ width: 200 }} allowClear />
          {/* <Button type="primary" onClick={handleClick}>{t(68)}</Button> */}
        </Col>
      </Row>
      <div>
        <Table
          dataSource={dataList}
          columns={columns}
          rowKey='friendId'
          scroll={{ x: 350 }}
          pagination={{
            current: pageNum,
            pageSize: 10,
            total: total,
            onChange: (value) => setPageNum(value)
          }}
        />
      </div>
    </div>
  )
}
export default FriendsList;