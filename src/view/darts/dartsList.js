import { useState, useEffect } from 'react';
import { Row, Col, Input, Pagination } from 'antd';
import { useHistory } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';
import { dartsListHttp } from '@/api';

import './index.css';

const DartsList = () => {
  // const { t } = useTranslation();
  const history = useHistory();
  const [total, setTotal] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [dartsList, setDartsList] = useState([]);
  const getData = (title, pageNum) => {
    const obj = {
      countryId: sessionStorage.getItem('websiteCountryId'),
      title,
      pageNum,
      pageSize: 5,
    }
    dartsListHttp(obj).then(res => {
      setDartsList(res.data.data.list)
      setTotal(res.data.data.total)
    })
  }
  const handleNewsClick = (id) => {
    history.push({
      pathname: '/DartsInfo',
      search: `?id=${id}`
    })
  }
  useEffect(() => {
    getData(inputValue, pageNum)
  }, [inputValue, pageNum])
  return (
    <div className='dartsList'>
      <Row className='RowBox'>
        <Col span='24'>
          <Input.Search style={{ width: '100%' }} onSearch={(value) => setInputValue(value)} allowClear />
        </Col>
      </Row>
      <Row className='RowBox newsFirst'>
        {dartsList.map(i => {
          return (
            <div key={i.id} className='newsBox' onClick={() => handleNewsClick(i.id)}>
              <div className='newsImgBox'><img src={i.thumbnail} alt="" /></div>
              <div>
                <div className='newsTitleBox'>
                  <div>{i.title}</div>
                </div>
                <div>{i.cdateInt}</div>
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

export default DartsList;
