import { useState, useEffect } from 'react'
import { Row, Col, Select, Pagination } from 'antd'
import { useTranslation } from 'react-i18next'
import { newShopListHttp } from '@/api'
import NoData from '@/common/components/noData'

const { Option } = Select;
const AdartsShopNew = () => {
  const { t } = useTranslation();
  const [total, setTotal] = useState(1);
  const [countryId, setCountryId] = useState('');
  const [newShopList, setNewShopList] = useState([]);
  const handleChange = (value) => {
    setCountryId(value)
  }
  const getNewShopList = () => {
    const data = {
      countryId,
      pageNum: 1,
      pageSize: 5
    }
    newShopListHttp(data).then(res => {
      if (res.data.code === 100) {
        setNewShopList(res.data.data)
        setTotal(50)
      }
    })
    // setNewShopList([
    //   {
    //     icon: m,
    //     shopId: 1,
    //     shopImg: m,
    //     shopName: 'Adarts Shop',
    //     shopAddress: '上海市黄浦区西藏中路160号',
    //     machineList: [
    //       {
    //         machineType: 'VSS',
    //         machineNum: 1,
    //         img: m
    //       },
    //       {
    //         machineType: 'A1',
    //         machineNum: 3,
    //         img: m
    //       }
    //     ]
    //   },
    //   {
    //     icon: m,
    //     shopId: 2,
    //     shopImg: m,
    //     shopName: 'Adarts Shop',
    //     shopAddress: '上海市黄浦区西藏中路160号',
    //     machineList: [
    //       {
    //         machineType: 'VSS',
    //         machineNum: 1,
    //         img: m
    //       },
    //       {
    //         machineType: 'A1',
    //         machineNum: 3,
    //         img: m
    //       }
    //     ]
    //   },
    // ])
  }
  const handlePageChange = (index) => {
    console.log(index);
  }
  useEffect(() => {
    getNewShopList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='AnchorBox'>
      <div className='myPageTitle' id='adartsShopNew'>{t(10)}</div>
      <Row className='adartsShopIndexSearchBox'>
        <Col span='22' offset='1' className='selectBox'>
          <Select placeholder={t(115)} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
      </Row>
      <div className='adartsShopIndex'>
        {newShopList.lengtn ? newShopList.map(item => {
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
        }) :
          <NoData />
        }
      </div>
      <Row justify="center"><Pagination total={total} showSizeChanger={false} onChange={handlePageChange} /></Row>
    </div>
  )
}
export default AdartsShopNew