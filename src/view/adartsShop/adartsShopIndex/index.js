import { useState, useEffect } from 'react'
import { Row, Col, Input, Select } from 'antd'
import { useTranslation } from 'react-i18next'
import { RightOutlined } from '@ant-design/icons'

import m from '@/assets/img/m.png'

const { Option } = Select;
const { Search } = Input;
const AdartsShopIndex = () => {
  const { t } = useTranslation();
  const [newShop, setNewShop] = useState([]);
  const [shopActivity, setShopActivity] = useState([]);
  const handleChange = (value) => {
    console.log(value);
  }
  const onSearch = (value) => {
    console.log(value);
  }
  const getNewShopList = () => {
    setNewShop([
      {
        icon: m,
        shopId: 1,
        shopImg: m,
        shopName: 'Adarts Shop',
        shopAddress: '上海市黄浦区西藏中路160号',
        machineList: [
          {
            machineType: 'VSS',
            machineNum: 1,
            img: m
          },
          {
            machineType: 'A1',
            machineNum: 3,
            img: m
          }
        ]
      },
      {
        icon: m,
        shopId: 2,
        shopImg: m,
        shopName: 'Adarts Shop',
        shopAddress: '上海市黄浦区西藏中路160号',
        machineList: [
          {
            machineType: 'VSS',
            machineNum: 1,
            img: m
          },
          {
            machineType: 'A1',
            machineNum: 3,
            img: m
          }
        ]
      },
      {
        icon: m,
        shopId: 3,
        shopImg: m,
        shopName: 'Adarts Shop',
        shopAddress: '上海市黄浦区西藏中路160号',
        machineList: [
          {
            machineType: 'VSS',
            machineNum: 1,
            img: m
          },
          {
            machineType: 'A1',
            machineNum: 3,
            img: m
          }
        ]
      },
      {
        icon: m,
        shopId: 4,
        shopImg: m,
        shopName: 'Adarts Shop',
        shopAddress: '上海市黄浦区西藏中路160号',
        machineList: [
          {
            machineType: 'VSS',
            machineNum: 1,
            img: m
          },
          {
            machineType: 'A1',
            machineNum: 3,
            img: m
          }
        ]
      },
      {
        icon: m,
        shopId: 5,
        shopImg: m,
        shopName: 'Adarts Shop',
        shopAddress: '上海市黄浦区西藏中路160号',
        machineList: [
          {
            machineType: 'VSS',
            machineNum: 1,
            img: m
          },
          {
            machineType: 'A1',
            machineNum: 3,
            img: m
          }
        ]
      }
    ])
  }
  const getShopActivityList = () => {
    setShopActivity([
      {
        icon: m,
        shopId: 1,
        shopImg: m,
        shopName: 'Adarts Shop',
        shopAddress: '上海市黄浦区西藏中路160号',
        date: '2021 / 8 / 9',
        machineList: [
          {
            machineType: 'VSS',
            machineNum: 1,
            img: m
          },
          {
            machineType: 'A1',
            machineNum: 3,
            img: m
          }
        ]
      },
      {
        icon: m,
        shopId: 2,
        shopImg: m,
        shopName: 'Adarts Shop',
        shopAddress: '上海市黄浦区西藏中路160号',
        date: '2021 / 8 / 9',
        machineList: [
          {
            machineType: 'VSS',
            machineNum: 1,
            img: m
          },
          {
            machineType: 'A1',
            machineNum: 3,
            img: m
          }
        ]
      },
      {
        icon: m,
        shopId: 3,
        shopImg: m,
        shopName: 'Adarts Shop',
        shopAddress: '上海市黄浦区西藏中路160号',
        date: '2021 / 8 / 9',
        machineList: [
          {
            machineType: 'VSS',
            machineNum: 1,
            img: m
          },
          {
            machineType: 'A1',
            machineNum: 3,
            img: m
          }
        ]
      },
      {
        icon: m,
        shopId: 4,
        shopImg: m,
        shopName: 'Adarts Shop',
        shopAddress: '上海市黄浦区西藏中路160号',
        date: '2021 / 8 / 9',
        machineList: [
          {
            machineType: 'VSS',
            machineNum: 1,
            img: m
          },
          {
            machineType: 'A1',
            machineNum: 3,
            img: m
          }
        ]
      },
      {
        icon: m,
        shopId: 5,
        shopImg: m,
        shopName: 'Adarts Shop',
        shopAddress: '上海市黄浦区西藏中路160号',
        date: '2021 / 8 / 9',
        machineList: [
          {
            machineType: 'VSS',
            machineNum: 1,
            img: m
          },
          {
            machineType: 'A1',
            machineNum: 3,
            img: m
          }
        ]
      }
    ])
  }
  useEffect(() => {
    getNewShopList();
    getShopActivityList()
  }, [])
  return (
    <div className='AnchorBox'>
      <div className='myPageTitle' id='adartsShopIndex'>{t(111)}</div>
      <Row className='adartsShopIndexSearchBox'>
        <Col span='4' className='selectBox'>
          <Select defaultValue="lucy" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
        <Col span='19' offset='1'>
          <Search placeholder="input search text" onSearch={onSearch} allowClear />
        </Col>
      </Row>
      <Row className='RowBox adartsShopIndexBox'>
        <Col span='11'>
          <div className='adartsShopIndexTitleBox'>
            <div>{t(10)}</div>
            <div>MORE<RightOutlined /></div>
          </div>
          <div className='adartsShopIndex'>
            {newShop.map(item => {
              return (
                <div className='AllRightBox' key={item.shopId}>
                  <div className='AllImgBox'>
                    <img src={item.shopImg} alt="" />
                  </div>
                  <div className='AllImgContent'>
                    <div>
                      <div className='shopBox'>
                        <div className='shopIconBox'>
                          <img src={item.icon} alt="" />
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
                        {item.machineList && item.machineList.map((icon, jndex) => {
                          return (
                            <img src={icon.img} alt="" key={jndex} />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Col>
        <Col span='11' offset='1'>
          <div className='adartsShopIndexTitleBox'>
            <div>{t(13)}</div>
            <div>MORE<RightOutlined /></div>
          </div>
          <div className='shopActivityBox'>
            {shopActivity.map((item, index) => {
              return (
                <div className='AllRightBox' key={index}>
                  <div className='AllImgBox'>
                    <img src={item.shopImg} alt="" />
                  </div>
                  <div className='AllImgContent'>
                    <div className='shopBox'>
                      <div className='shopIconBox'>
                        <img src={item.icon} alt="" />
                      </div>
                      <div style={{ color: 'red', fontWeight: 'bold' }}> {item.shopName}</div>
                    </div>
                    <div>{item.shopAddress}</div>
                    <div>{item.date}</div>
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