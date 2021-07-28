import { useState, useEffect } from 'react';
import { Row, Col, Select, Input, Pagination } from 'antd';
import { useTranslation } from 'react-i18next';
import { EyeOutlined } from '@ant-design/icons';
import a from '@/assets/img/a.jpg';

const { Option } = Select;




const DartsList = () => {
  const { t } = useTranslation();
  const [type, setType] = useState('0');
  const [total, setTotal] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [dartsList, setDartsList] = useState([]);
  const getData = () => {
    setDartsList([
      {
        id: 1,
        img: a,
        type: 1,
        time: '2021-08-06',
        seeCount: 2054,
        title: 'dartsList is assigned a value but never used  no- unused - vars',
      },
      {
        id: 2,
        img: a,
        type: 1,
        time: '2021-08-06',
        seeCount: 2054,
        title: 'dartsList is assigned a value but never used  no- unused - vars',
      }, {
        id: 3,
        img: a,
        type: 1,
        time: '2021-08-06',
        seeCount: 2054,
        title: 'dartsList is assigned a value but never used  no- unused - vars',
      },
      {
        id: 4,
        img: a,
        type: 1,
        time: '2021-08-06',
        seeCount: 2054,
        title: 'dartsList is assigned a value but never used  no- unused - vars',
      },
      {
        id: 5,
        img: a,
        type: 1,
        time: '2021-08-06',
        seeCount: 2054,
        title: 'dartsList is assigned a value but never used  no- unused - vars',
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
  useEffect(() => {
    getData()
  }, [type])
  useEffect(() => {
    getData()
  }, [inputValue])
  return (
    <div className='dartsList'>
      <Row className='RowBox'>
        <Col span='4'>
          <Select value={type} style={{ width: '100%' }} onChange={(value) => setType(value)}>
            <Option value="0">All</Option>
            <Option value="1">Jack</Option>
            <Option value="2">Lucy</Option>
          </Select>
        </Col>
        <Col span='20'>
          <Input.Search style={{ width: '100%' }} onSearch={(value) => setInputValue(value)} allowClear />
        </Col>
      </Row>
      <Row className='RowBox newsFirst'>
        {dartsList.map(i => {
          return (
            <div key={i.id} className='newsBox'>
              <div className='newsImgBox'><img src={i.img} alt="" /></div>
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

export default DartsList;