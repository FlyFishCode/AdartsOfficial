import { useState, useEffect } from 'react';
import { Row, Col, Select, Pagination } from 'antd';
import { useTranslation } from 'react-i18next';
import { newShopListHttp, countryListHttp } from '@/api';
import { setCountryIconPosition } from '@/common/Utlis';
import NoData from '@/common/components/noData';
import A1 from '@/assets/img/A1.png';
import W1 from '@/assets/img/W1.png';
import shopImg from '@/assets/img/shop.png';

const { Option } = Select;
const AdartsShopNew = () => {
  const { t } = useTranslation();
  const [total, setTotal] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  const [countryId, setCountryId] = useState();
  const [countryList, setCountryList] = useState([]);
  const [newShopList, setNewShopList] = useState([]);
  const getCountryList = () => {
    countryListHttp().then(res => {
      setCountryList(res.data.data)
      setCountryId(res.data.data[0].countryId)
    })
  }
  const getNewShopList = (countryId, pageNum) => {
    const data = {
      countryId,
      pageNum,
      pageSize: 5
    }
    newShopListHttp(data).then(res => {
      if (res.data.code === 100) {
        setNewShopList(res.data.data.list)
        setTotal(res.data.data.total)
      }
    })
  }
  useEffect(() => {
    getNewShopList(countryId, pageNum);
  }, [countryId, pageNum])
  useEffect(() => {
    getCountryList();
  }, [])
  return (
    <div className='AnchorBox'>
      <div className='myPageTitle' id='adartsShopNew'>{t(10)}</div>
      <Row className='adartsShopIndexSearchBox'>
        <Col span='22' offset='1' className='selectBox'>
          <Select
            showSearch
            placeholder="Select country"
            optionFilterProp="children"
            onChange={(value) => setCountryId(value)}
            value={countryId}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {countryList.map(i => <Option key={i.countryId} value={i.countryId}>{i.countryName}</Option>)}
          </Select>
        </Col>
      </Row>
      <div className='adartsShopIndex'>
        {newShopList.length ? newShopList.map(item => {
          return (
            <div className='AllRightBox' key={item.shopId}>
              <div className='AllImgBox'>
                <img src={item.shopImg ? item.shopImg : shopImg} onError={(e) => e.target.src = shopImg} alt="" />
              </div>
              <div className='AllImgContent'>
                <div>
                  <div className='shopBox'>
                    <div className='countryIconPosition'>
                      <div style={{ backgroundPosition: setCountryIconPosition(item.countryCode) }} />
                    </div>
                    <div style={{ color: 'red', fontWeight: 'bold' }}> {item.shopName}</div>
                  </div>
                  <div>{item.shopAddress}</div>
                  <div className='shopMachineType'>{item.machineList && item.machineList.map((i, index) => {
                    return (
                      <div key={index} >
                        <span style={{ color: 'red' }}>{i.machineType}：</span><span>{i.machineNum}</span>
                      </div>
                    )
                  })}
                  </div>
                  <div className='iconImg'>
                    {item.machineList.length ?
                      item.machineList.some(i => i.machineType === 'A1') ?
                        <div className='iconImg'>
                          <img src={A1} alt="" />
                        </div> :
                        <div className='iconImg'>
                          <img src={W1} alt="" />
                        </div>
                      : null
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        }) : <NoData />}
      </div>
      <Row justify="center"><Pagination pageSize='5' total={total} showSizeChanger={false} onChange={(value) => setPageNum(value)} /></Row>
    </div>
  )
}
export default AdartsShopNew