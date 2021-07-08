import { useState, useEffect } from 'react'
import { Row, Col, Select, Tooltip, Pagination } from 'antd'
import { useTranslation } from 'react-i18next'
import { QuestionOutlined } from '@ant-design/icons'

import m from '@/assets/img/m.png'

const { Option } = Select;

const AdartsShopThemeSet = () => {
    const { t } = useTranslation();
    const [total, setTotal] = useState(1);
    const [shopList, setShopList] = useState([]);
    const getShopList = () => {
        setShopList([
            {
                id: 1,
                icon: m,
                img: m,
                shopName: '11111111111111',
                shopAddress: 'External Resources'
            },
            {
                id: 2,
                icon: m,
                img: m,
                shopName: '22222222222222',
                shopAddress: 'External Resources'
            },
            {
                id: 3,
                icon: m,
                img: m,
                shopName: '33333333333333333',
                shopAddress: 'External Resources'
            },
            {
                id: 4,
                icon: m,
                img: m,
                shopName: '444444444444444',
                shopAddress: 'External Resources'
            },
            {
                id: 5,
                icon: m,
                img: m,
                shopName: '555555555555555',
                shopAddress: 'External Resources'
            },
            {
                id: 6,
                icon: m,
                img: m,
                shopName: '66666666666666666',
                shopAddress: 'External Resources'
            },
            {
                id: 7,
                icon: m,
                img: m,
                shopName: '777777777777777',
                shopAddress: 'External Resources'
            },
            {
                id: 8,
                icon: m,
                img: m,
                shopName: '88888888888888888',
                shopAddress: 'External Resources'
            }
        ])
        setTotal(500)
    }
    const handleChange = (value) => {
        console.log(value);
    }
    const handlePageChange = (index) => {
        console.log(index);
    }
    useEffect(() => {
        getShopList()
    }, [])
    return (
        <div>
            <div className='myPageTitle' id='adartsShopThemeSet'>{t(113)}</div>
            <Row className='adartsShopIndexSearchBox'>
                <Col span='20' offset='1' className='selectBox'>
                    <Select placeholder={t(115)} onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Col>
                <Col span='1' offset='1' className='tips'>
                    <div>
                        <Tooltip title="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">
                            <QuestionOutlined />
                        </Tooltip>
                    </div>
                </Col>
            </Row>
            <div className='adartsShopThemeBox'>
                {shopList.map((i, index) => {
                    return (
                        <div className='adartsShopThemeInfo' key={index}>
                            <div className='adartsShopThemeIbox'>
                                <div className='adartsShopThemeIcon'><img src={i.icon} alt="" /></div>
                                <div className='adartsShopThemeimg'><img src={i.img} alt="" /></div>
                            </div>
                            <div className='adartsShopThemeShopBox'>{i.shopName}</div>
                            <div>{i.shopAddress}</div>
                        </div>
                    )
                })}
            </div>
            <Row justify="center"><Pagination total={total} showSizeChanger={false} onChange={handlePageChange} /></Row>
        </div>
    )
}
export default AdartsShopThemeSet