import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { activityInfoHttp } from '@/api';

import { ExceptionOutlined, TrophyOutlined, DollarCircleOutlined, FileTextOutlined, FileSearchOutlined } from '@ant-design/icons';

import { dealUrlHash } from '@/common/Utlis';

import a from '@/assets/img/A1.png';
import w from '@/assets/img/W1.png';

const ActivitieInfo = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [info, setInfo] = useState({});
  const getData = (activityId) => {
    activityInfoHttp({ activityId }).then(res => {
      setInfo(res.data.data)
    })
  };
  useEffect(() => {
    getData(dealUrlHash(location))
  }, [location]);
  return (
    <div className='activitieInfoBox'>
      <div className='myPageTitle'>{t(13)}</div>
      <div className='activitieInfoImg'><img src={info.thumbnail} alt="" /></div>
      <div className='activitieInfoimgListBox'>
        {info.picture && info.picture.split(',').map((i, index) => {
          return (
            <div key={index}><img src={i} alt="" /></div>
          )
        })}
      </div>
      <div className='activitieInfoTitle'>{info.title}</div>
      <div className='activitieInfo'>
        <div>
          <div>{t(203)}</div>
          <div>{t(204)}</div>
          <div>{t(205)}</div>
        </div>
        <div>
          {/* <div className='shopBox'>
            {info.shopList.map(i => {
              return (
                <div key={i.shopId}>{i.shopName}</div>
              )
            })}
          </div> */}
          <div>{info.shopList ? info.shopList[0].shopName : ''}</div>
          <div>{info.startDate} - {info.endDate}</div>
          <div className='machineBox'>{info.machineType && info.machineType.includes('A1') ? <img src={a} alt="" /> : ''}{info.machineType && info.machineType.includes('W1') ? <img src={w} alt="" /> : ''}</div>
        </div>
      </div>
      <div style={{ border: '1px solid #eee' }}>
        <div className='activitieInfoContent'>
          <div><FileTextOutlined /></div>
          <div>
            <div>{t(211)}</div>
            <div>{`${t(211)}：${info.joinMethod}`}</div>
            <div>{`${t(207)}：${info.startDate} / ${info.endDate}`}</div>
            <div>{`${t(209)}：${info.shopList ? info.shopList[0].shopAddress : ''}`}</div>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><FileSearchOutlined /></div>
          <div>
            <div>{t(210)}</div>
            <div>{info.content}</div>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><DollarCircleOutlined /></div>
          <div>
            <div>{t(212)}</div>
            <div>{info.cost}</div>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><TrophyOutlined /></div>
          <div>
            <div>{t(214)}</div>
            <div>{info.reward}</div>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><ExceptionOutlined /></div>
          <div>
            <div>{t(215)}</div>
            <div>{info.other}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ActivitieInfo;