import { useState, useEffect } from 'react';
import { Row, Col, Input } from 'antd';
import { useTranslation } from 'react-i18next';
// import { RightOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { newShopListHttp } from '@/api';
import { setCountryIconPosition } from '@/common/Utlis';


import shopImg from '@/assets/img/shop.png';
import A1 from '@/assets/img/A1.png';
import W1 from '@/assets/img/W1.png';



// const { Option } = Select;
const { Search } = Input;
const AdartsShopIndex = (prop) => {
  const { setActive } = prop;
  const { t } = useTranslation();
  const history = useHistory();
  const [newShop, setNewShop] = useState([]);
  const onSearch = (value) => {
    history.push({
      pathname: "/AdartsShop/ShopSearch",
      search: `?value=${value}`
    })
    setActive('2')
  }
  const getNewShopList = () => {
    const data = {
      countryId: sessionStorage.getItem('websiteCountryId'),
      pageNum: 1,
      pageSize: 5
    }
    newShopListHttp(data).then(res => {
      if (res.data.code === 100) {
        setNewShop(res.data.data.list);
      }
    })
  }
  const handleShopClick = (id) => {
    history.push({
      pathname: '/AdartsShop/ShopInfo',
      search: `?id=${id}`
    })
  }
  useEffect(() => {
    getNewShopList();
    // getShopActivityList()
  }, [])
  return (
    <div className='AnchorBox'>
      <div className='myPageTitle' id='adartsShopIndex'>{t(111)}</div>
      <Row className='adartsShopIndexSearchBox'>
        <Col span='24'>
          <Search placeholder="input search text" onSearch={onSearch} allowClear />
        </Col>
      </Row>
      <Row className='RowBox adartsShopIndexBox'>
        <Col span='24'>
          <div className='adartsShopIndexTitleBox'>
            <div>{t(10)}</div>
            {/*<div>MORE<RightOutlined /></div>*/}
          </div>
          <div className='adartsShopIndex'>
            {newShop.map(item => {
              return (
                <div className='AllRightBox' key={item.shopId} onClick={() => handleShopClick(item.shopId)}>
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
                            <span style={{ color: 'red' }}>{i.machineType}???</span><span>{i.machineNum}</span>
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
        </Col>
      </Row>
    </div>
  )
}
export default AdartsShopIndex
