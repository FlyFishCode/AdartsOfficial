import { useState, useEffect } from 'react';
import { Row, Col, Button, Table, Input, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { aboutSevenPlayerListHttp, handleFriendsHttp } from '@/api';

const { Search } = Input;


const AddFriends = () => {
  const { t } = useTranslation();
  const [playerList, setPlayerList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [pendingPlayerList, setPendingPlayerList] = useState([]);
  const [flag, setFlag] = useState(true);
  const columns = [
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
      dataIndex: 'playDate',
    },
    {
      title: t(95),
      dataIndex: 'value',
      key: 'value',
      render: (text, row, index) => {
        return (
          <div className='handleBox'>
            <div><Button onClick={() => handleClick(row, true)} size='small' icon={<CheckOutlined />} /></div>
            <div><Button onClick={() => handleClick(row, false)} size='small' icon={<CloseOutlined />} /></div>
          </div>
        )
      }
    }
  ];
  const handleClick = (row, bool) => {
    const obj = {
      memberRelationshipId: row.friendId,
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
      getPlayerList();
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
    setPendingPlayerList([]);
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
    <div>
      <div className='myPageTitle' id='AddFriends'>{t(68)}</div>
      <Row>
        <Col span='6' className='AddFriendLabel'>{t(122)}</Col>
        <Col span='10' offset='1'><Search placeholder="input search text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onSearch={(value) => value && getPlayerList()} allowClear /></Col>
        <Col span='5' offset='1' className='AddFriendBtn'>
          <Button type={flag ? 'primary' : ''} onClick={() => setFlag((flag) => !flag)}>{t(123)}</Button>
          <Button type={flag ? '' : 'primary'} onClick={() => setFlag((flag) => !flag)}>{t(124)}</Button>
        </Col>
      </Row>
      {flag ? <Table
        dataSource={playerList}
        columns={columns}
        rowKey='friendId'
        pagination={false}
        scroll={{ y: 650 }}
      /> : <Table
        dataSource={pendingPlayerList}
        columns={columns}
        pagination={false}
        scroll={{ y: 650 }}
      />}
    </div>
  )
}
export default AddFriends;