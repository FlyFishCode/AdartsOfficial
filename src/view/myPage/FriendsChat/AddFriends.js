import { useState, useEffect } from 'react';
import { Row, Col, Button, Table, Input, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { aboutSevenPlayerListHttp, handleFriendsHttp, addFriendsHttp, friendsListHttp } from '@/api';

const { Search } = Input;

window.onload = () => {
  const width = window.innerWidth;
  if (width < 600) {
    console.log(1)
  }
}

const AddFriends = () => {
  const { t } = useTranslation();
  const [playerList, setPlayerList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [pendingPlayerList, setPendingPlayerList] = useState([]);
  const [flag, setFlag] = useState(true);
  let columns1 = [
    {
      title: t(102),
      dataIndex: 'portrait',
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
      title: t(198),
      width: 150,
      dataIndex: 'playDate',
    },
    {
      title: t(95),
      dataIndex: 'value',
      key: 'value',
      render: (text, row, index) => {
        return (
          <Button size='small' type="primary" onClick={() => handleAgreeClick(row)} >{t(231)}</Button>
        )
      }
    }
  ];
  const columns2 = [
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
      dataIndex: 'value',
      key: 'value',
      render: (text, row, index) => {
        return (
          <div className='handleBox'>
            <Button size='small' type="primary" onClick={() => handleClick(row, true)} >{t(231)}</Button>
            <Button danger size='small' onClick={() => handleClick(row, false)}>{t(232)}</Button>
          </div>
        )
      }
    }
  ];
  const handleAgreeClick = (row) => {
    const obj = {
      memberId: sessionStorage.getItem('websiteMemberId'),
      friendId: row.friendId
    }
    addFriendsHttp(obj).then(res => {
      if (res.data.code === 100) {
        message.info(t(199))
        getPlayerList();
      }
    })
  }
  const handleClick = (row, bool) => {
    const obj = {
      memberRelationshipId: row.memberRelationshipId,
      status: 0
    }
    if (bool) {
      obj.status = 1
    } else {
      obj.status = 2
    }
    handleFriendsHttp(obj).then(res => {
      if (res.data.code === 100) {
        message.info(res.data.msg)
      } else {
        message.error(res.data.msg)
      }
      getPendingPlayerList();
    })
  }
  const getPlayerList = () => {
    const obj = {
      memberId: sessionStorage.getItem('websiteMemberId'),
      friendName: searchValue
    }
    aboutSevenPlayerListHttp(obj).then(res => {
      if (res.data.code === 100) {
        setPlayerList(res.data.data)
      }
    })
  }
  const getPendingPlayerList = () => {
    const obj = {
      type: 0,
      friendName: searchValue,
      memberId: sessionStorage.getItem('websiteMemberId'),
      status: 0,
      pageNum: 1,
      pageSize: 10
    }
    friendsListHttp(obj).then(res => {
      if (res.data.code === 100) {
        setPendingPlayerList(res.data.data.list)
      }
    })
  }
  const handleSearchClick = () => {
    if (flag) {
      getPlayerList()
    } else {
      getPendingPlayerList()
    }
  }
  useEffect(() => {
    getPlayerList();
    getPendingPlayerList();
    return () => {
      setPlayerList([])
      setPendingPlayerList([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='Mobile-Fiends'>
      <div className='myPageTitle' id='AddFriends'>{t(68)}</div>
      <Row>
        <Col lg={6} xs={0} className='AddFriendLabel'>{t(122)}</Col>
        <Col lg={{ span: 10, offset: 1 }} xs={14}><Search placeholder="input search text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onSearch={() => handleSearchClick()} allowClear /></Col>
        <Col lg={{ span: 5, offset: 1 }} xs={10} className='AddFriendBtn'>
          <Button type={flag ? 'primary' : ''} onClick={() => setFlag((flag) => !flag)}>{t(123)}</Button>
          <Button type={flag ? '' : 'primary'} onClick={() => setFlag((flag) => !flag)}>{t(124)}</Button>
        </Col>
      </Row>
      {flag ? <Table
        dataSource={playerList}
        columns={columns1}
        rowKey='friendId'
        pagination={false}
        scroll={{ x: 500, y: 650 }}
      /> : <Table
        dataSource={pendingPlayerList}
        columns={columns2}
        rowKey='memberRelationshipId'
        pagination={false}
        scroll={{ x: 500, y: 650 }}
      />}
    </div>
  )
}
export default AddFriends;