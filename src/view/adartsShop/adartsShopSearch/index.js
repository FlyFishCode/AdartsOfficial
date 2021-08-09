import { useState, useEffect } from 'react';
import { Row, Col, Input, Pagination } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { newShopListHttp } from '@/api';
import { setCountryIconPosition } from '@/common/Utlis';


import shopImg from '@/assets/img/shop.png';
import A1 from '@/assets/img/A1.png';
import W1 from '@/assets/img/W1.png';

// const { Option } = Select;
const { Search } = Input;
const AdartsShopSearch = (prop) => {
  // const { inputValue } = prop;
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const [total, setTotal] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  const [shopName, setShopName] = useState(location.search ? decodeURI(location.search.substr(1).split('=')[1]) : '');
  const [shopList, setShopList] = useState([]);
  // const handleChange = (value) => {
  //   console.log(value);
  // }
  const getShopList = (pageNum, shopName) => {
    const data = {
      countryId: sessionStorage.getItem('websiteCountryId'),
      shopName,
      pageNum,
      pageSize: 5
    }
    newShopListHttp(data).then(res => {
      if (res.data.code === 100) {
        setShopList(res.data.data.list)
        setTotal(res.data.data.total)
      }
    })
  }
  const handleShopClick = (id) => {
    history.push({
      pathname: '/AdartsShop/ShopInfo',
      state: { id }
    })
  }
  useEffect(() => {

  })
  useEffect(() => {
    getShopList(pageNum, shopName)
  }, [pageNum, shopName])
  return (
    <div className='AnchorBox'>
      <div className='myPageTitle' id='adartsShopSearch'>{t(112)}</div>
      <Row className='adartsShopIndexSearchBox'>
        {/* <Col span='4' className='selectBox'>
          <Select defaultValue="lucy" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col> */}
        <Col span='24'>
          <Search placeholder="input search text" onSearch={(value) => setShopName(value)} allowClear />
        </Col>
      </Row>
      <div className='adartsShopIndex'>
        {shopList.map(item => {
          return (
            <div className='AllRightBox' key={item.shopId} onClick={() => handleShopClick(item.shopId)}>
              <div className='AllImgBox'>
                <img src={item.shopImg ? item.shopImg : shopImg} onError={(e) => e.target.src = shopImg} alt="" />
              </div>
              <div className='AllImgContent'>
                <div>
                  <div className='shopBox'>
                    <div className='countryIconPosition'>
                      <div style={{ backgroundPosition: setCountryIconPosition(item.countryCode) }} alt="" />
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
        })}
      </div>
      <Row justify="center"><Pagination current={pageNum} total={total} pageSize='5' showSizeChanger={false} onChange={(value) => setPageNum(value)} /></Row>
    </div>
  )
}
export default AdartsShopSearch