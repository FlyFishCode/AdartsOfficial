import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { activityInfoHttp } from '@/api';

import { Image } from 'antd';
import { ExceptionOutlined, TrophyOutlined, DollarCircleOutlined, FileTextOutlined, FileSearchOutlined, PhoneOutlined } from '@ant-design/icons';

import { dealUrlHash } from '@/common/Utlis';

import a from '@/assets/img/A1.png';
import w from '@/assets/img/W1.png';

const ActivitieInfo = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [info, setInfo] = useState({});
  const getData = (activityId) => {
    activityInfoHttp({ activityId }).then(res => {
      if (res.data.code === 100) {
        setInfo(res.data.data)
      }
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
            <div key={index}><Image height='100%' src={i} /></div>
          )
        })}
      </div>
      <div className='activitieInfoTitle'>{info.title}</div>
      <div>
        <div className='activitieInfo'>
          <div>{t(203)}</div>
          <div>
            {info.shopList ? info.shopList.map(i => {
              return (
                <div key={i.shopId}>
                  <div>{i.shopName}</div>
                  <div className='linkStyle'>{i.shopAddress}</div>
                </div>
              )
            }) : ''}
          </div>
        </div>
        <div className='activitieInfo'>
          <div>{t(204)}</div>
          <div>{info.startDate} - {info.endDate}</div>
        </div>
        <div className='activitieInfo'>
          <div>{t(205)}</div>
          <div className='machineBox'>{info.machineType && info.machineType.includes('A1') ? <img src={a} alt="" /> : ''}{info.machineType && info.machineType.includes('W1') ? <img src={w} alt="" /> : ''}</div>
        </div>
      </div>
      <div style={{ border: '1px solid #eee' }}>
        <div className='activitieInfoContent'>
          <div><FileSearchOutlined /></div>
          <div>
            <div>{t(210)}</div>
            <textarea disabled className='textareaStyle' value={info.content}></textarea>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><FileTextOutlined /></div>
          <div>
            <div>{t(211)}</div>
            <textarea disabled className='textareaStyle' value={info.joinMethod}></textarea>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><DollarCircleOutlined /></div>
          <div>
            <div>{t(212)}</div>
            <textarea disabled className='textareaStyle' value={info.cost}></textarea>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><TrophyOutlined /></div>
          <div>
            <div>{t(214)}</div>
            <textarea disabled className='textareaStyle' value={info.reward}></textarea>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><PhoneOutlined /></div>
          <div>
            <div>{t(207)}</div>
            <textarea disabled className='textareaStyle' value={info.contact}></textarea>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><ExceptionOutlined /></div>
          <div>
            <div>{t(215)}</div>
            <textarea disabled className='textareaStyle' value={info.other}></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ActivitieInfo;