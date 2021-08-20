import { useState, useEffect } from 'react'
import { Row, Col, Button, Table, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

const { Search } = Input;
const AddFriends = () => {
  const { t } = useTranslation();
  const [playerList, setPlayerList] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pendingPlayerList, setPendingPlayerList] = useState([]);
  const [flag, setFlag] = useState(true);
  const columns = [
    {
      title: '图像',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '昵称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'RT',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'PPD',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'MPR',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '最后游玩时间',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: t(95),
      dataIndex: 'value',
      key: 'value',
      render: (text, row, index) => {
        return (
          <div className='handleBox'>
            <div><Button onClick={() => handleClick(row, index, true)} size='small' icon={<CheckOutlined />} /></div>
            <div><Button onClick={() => handleClick(row, index, false)} size='small' icon={<CloseOutlined />} /></div>
          </div>
        )
      }
    }
  ];
  const handleClick = (row, index, bool) => {
    console.log(row, index, bool);
  }
  const handleSearch = (value) => {
    console.log(value);
  }
  const pageIndexChange = (index) => {
    console.log(pageIndex);
    setPageIndex(index)
    if (flag) {
      getPlayerList()
    } else {
      getPendingPlayerList()
    }
  }
  const getPlayerList = () => {
    setPlayerList([
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        value: 1
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 0
      },
      {
        key: '3',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 1
      },
      {
        key: '4',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 0
      },
      {
        key: '5',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 1
      },
      {
        key: '6',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 0
      },
      {
        key: '7',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 1
      },
      {
        key: '8',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 0
      },
      {
        key: '9',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 1
      },
      {
        key: '10',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 0
      },
      {
        key: '11',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 1
      },
    ])
  }
  const getPendingPlayerList = () => {
    setPendingPlayerList([
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        value: 1
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 0
      },
      {
        key: '3',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 1
      },
      {
        key: '4',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 0
      },
      {
        key: '5',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 1
      },
      {
        key: '6',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 0
      },
      {
        key: '7',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 1
      },
      {
        key: '8',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
        value: 0
      }
    ])
  }
  useEffect(() => {
    getPlayerList();
    getPendingPlayerList();
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='AddFriends'>{t(68)}</div>
      <Row>
        <Col span='6' className='AddFriendLabel'>{t(122)}</Col>
        <Col span='10' offset='1'><Search placeholder="input search text" allowClear onSearch={handleSearch} /></Col>
        <Col span='5' offset='1' className='AddFriendBtn'>
          <Button type={flag ? 'primary' : ''} onClick={() => setFlag((flag) => !flag)}>{t(123)}</Button>
          <Button type={flag ? '' : 'primary'} onClick={() => setFlag((flag) => !flag)}>{t(124)}</Button>
        </Col>
      </Row>
      {flag ? <Table
        dataSource={playerList}
        columns={columns}
        pagination={{ onChange: pageIndexChange }}
      /> : <Table
        dataSource={pendingPlayerList}
        columns={columns}
        pagination={{ onChange: pageIndexChange }}
      />}
    </div>
  )
}
export default AddFriends