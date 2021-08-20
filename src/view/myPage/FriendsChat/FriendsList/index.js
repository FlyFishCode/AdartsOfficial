import { useState, useEffect } from 'react'
import { Input, Button, Select, Row, Col, Table, Rate } from 'antd';
import { CloseOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next';

const { Search } = Input;
const { Option } = Select;
const FriendsList = () => {
  const { t } = useTranslation();
  const [dataList, setDataList] = useState([])
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
            <Rate count='1' value={text} onChange={() => handleRateChange(index)} />
            <div><Button size='small' icon={<CloseOutlined />} /></div>
          </div>
        )
      }
    }
  ];
  const handleRateChange = (index) => {
    console.log(index);
    dataList[index].value = Number(!dataList[index].value);
    setDataList([...dataList]);
  }
  const handleSearch = () => {
    console.log(1);
  }
  const handleChange = () => {
    console.log(1);
  }
  const handleClick = () => {
    const ele = document.getElementById('AddFriends');
    ele && ele.scrollIntoView({
      behavior: "smooth", // 默认 auto
      block: "start", // 默认 center
      inline: "nearest", // 默认 nearest
    })
  }
  const pageIndexChange = (index) => {
    console.log(index);
  }
  useEffect(() => {
    setDataList([
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
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='FriendsList'>{t(67)}</div>
      <Row justify="center">
        <Col>
          <Select defaultValue="1" style={{ width: 150 }} onChange={handleChange}>
            <Option value="1">{t(92)}</Option>
            <Option value="2">{t(93)}</Option>
            <Option value="3">{t(94)}</Option>
          </Select>
          <Search placeholder="input search text" allowClear onSearch={handleSearch} style={{ width: 200 }} />
          <Button type="primary" onClick={handleClick}>{t(68)}</Button>
        </Col>
      </Row>
      <div>
        <Table
          dataSource={dataList}
          columns={columns}
          pagination={{ onChange: pageIndexChange }}
        />
      </div>
    </div>
  )
}
export default FriendsList