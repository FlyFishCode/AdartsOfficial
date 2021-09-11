import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Tabs, Select, Row, Col } from 'antd';

import { myItemAllListHttp, shopPropUsingListHttp } from '@/api';

import NoData from '@/common/components/NoData';
import RenderUrlDom from '@/common/components/RenderUrlDom';

const { TabPane } = Tabs;
const { Option } = Select;

const MyPropList = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [myList, setMyList] = useState([]);
  const [allList, setAllList] = useState([]);
  const [sortValue, setSortValue] = useState(1);
  const [type, setType] = useState('');
  const typeList = [
    { id: '', title: '全部' },
    { id: 1, title: 'Style' },
    { id: 2, title: 'Mark Award' },
    { id: 3, title: 'Effect' },
    { id: 4, title: 'Sound' },
    { id: 5, title: 'Bull' },
    { id: 6, title: 'Bull Sound' },
    { id: 71, title: 'LOW TON' },
    { id: 72, title: 'HIGH TON' },
    { id: 73, title: 'HAT TRICK' },
    { id: 74, title: 'THREE IN A BED' },
    { id: 75, title: 'THREE IN THE BLACK' },
    { id: 76, title: 'TON 80' },
    { id: 77, title: 'WHITE HORSE' },
    { id: 78, title: '9 MARK' },
  ];
  const tabClick = () => {
    const obj = {
      type,
      sort: sortValue,
      pageIndex: 1,
      pageSize: 999
    }
    myItemAllListHttp(obj).then(res => {
      setAllList(res.data.data.list)
    })
  }
  const getData = () => {
    shopPropUsingListHttp().then(res => {
      if (res.data.code === 100) {
        setMyList(res.data.data);
      }
    })
    tabClick();
  }
  const handleClick = (id) => {
    history.push({
      pathname: '/ShopProp/ItemBuy',
      search: `?id=${id}`
    })
  };
  const getTypeStr = (type) => {
    let str = '';
    switch (type) {
      case 1:
        str = 'Style';
        break;
      case 2:
        str = 'Mark Award';
        break;
      case 3:
        str = 'Effect';
        break;
      case 4:
        str = 'Sound';
        break;
      case 5:
        str = 'Bull';
        break;
      case 6:
        str = 'Bull Sound';
        break;
      case 71:
        str = 'LOW TON';
        break;
      case 72:
        str = 'HIGH TON';
        break;
      case 73:
        str = 'HAT TRICK';
        break;
      case 74:
        str = 'THREE IN A BED';
        break;
      case 75:
        str = 'THREE IN THE BLACK';
        break;
      case 76:
        str = 'TON 80';
        break;
      case 77:
        str = 'WHITE HORSE';
        break;
      default:
        str = '9 MARK';
        break;
    }
    return str;
  }
  useEffect(() => {
    tabClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortValue, type])
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <div className='Title'>{t(167)}</div>
      <Tabs defaultActiveKey="1" size='large' id='MyPropList'>
        <TabPane tab={t(176)} key="1">
          <div className={myList.length ? 'myListBG' : null}>
            {myList.length ? myList.map(i => {
              return (
                <div key={i.id} className='myListBox' onClick={() => handleClick(i.id)}>
                  <div className='myListBoxImg'><RenderUrlDom url={i.url} /></div>
                  <div>{i.title}</div>
                  <div>{i.buyTime}</div>
                </div>
              )
            }) : <NoData />}
          </div>
        </TabPane>
        <TabPane tab={'ALL'} key="2">
          <Row>
            <Col span='6'>
              <Select value={sortValue} style={{ width: '100%' }} onChange={(value) => setSortValue(value)}>
                <Option value={1}>{t(223)}</Option>
                <Option value={2}>{t(224)}</Option>
              </Select>
            </Col>
            <Col span='6' offset='10' style={{ display: 'flex', alignItems: 'center' }}>{t(225)}</Col>
          </Row>
          <Tabs defaultActiveKey='全部' onTabClick={(value) => setType(value)}>
            {typeList.map(i => {
              return (
                <TabPane tab={i.title} key={i.id}>
                  <div className={allList.length ? 'myListBG' : ''}>
                    {allList.length ? allList.map(i => {
                      return (
                        <div key={i.id} className='myListBox' onClick={() => handleClick(i.id)}>
                          <div className='myListBoxImg'><RenderUrlDom url={i.url} /></div>
                          <div>{`[${getTypeStr(i.type)}]${i.title}`}</div>
                          <div>{i.buyTime}</div>
                        </div>
                      )
                    }) : <NoData />}
                  </div>
                </TabPane>
              )
            })}
          </Tabs>
        </TabPane>
      </Tabs>
    </div>
  )
}
export default MyPropList;
