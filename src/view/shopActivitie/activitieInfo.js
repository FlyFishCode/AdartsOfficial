import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ExceptionOutlined, TrophyOutlined, DollarCircleOutlined, FileTextOutlined, FileSearchOutlined } from '@ant-design/icons';

import { dealUrlHash } from '@/common/Utlis';

import a from '@/assets/img/a.jpg';

const ActivitieInfo = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [info, setInfo] = useState({});
  const getData = () => {
    setInfo({
      shop: 'AAAAAAAAAAAAAAAAAA',
      date: '2021 / 8 / 26',
      adarts: 'A1',
      title: 'aaaaaaaaaaaaaaaaa',
      imgList: [a, a, a, a]
    })
  }
  useEffect(() => {
    getData()
    console.log(dealUrlHash(location));
  }, [location])
  return (
    <div className='activitieInfoBox'>
      <div className='myPageTitle'>{t(13)}</div>
      <div className='activitieInfoImg'><img src={a} alt="" /></div>
      <div className='activitieInfoimgListBox'>
        {info.imgList && info.imgList.map((i, index) => {
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
          <div>{info.shop}</div>
          <div>{info.date}</div>
          <div>{info.adarts}</div>
        </div>
      </div>
      <div style={{ border: '1px solid #eee' }}>
        <div className='activitieInfoContent'>
          <div><FileTextOutlined /></div>
          <div>
            <div>{t(211)}</div>
            <div>{`${t(207)}：aaaaaaaaaaaaaaaaaa`}</div>
            <div>{`${t(208)}：aaaaaaaaaaaaaaaaaa`}</div>
            <div>{`${t(209)}：aaaaaaaaaaaaaaaaaa`}</div>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><FileSearchOutlined /></div>
          <div>
            <div>{t(210)}</div>
            <div>{`${t(207)}：aaaaaaaaaaaaaaaaaa`}</div>
            <div>{`${t(208)}：aaaaaaaaaaaaaaaaaa`}</div>
            <div>{`${t(209)}：aaaaaaaaaaaaaaaaaa`}</div>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><DollarCircleOutlined /></div>
          <div>
            <div>{t(212)}</div>
            <div>{`${t(213)}：aaaaaaaaaaaaaaaaaa`}</div>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><TrophyOutlined /></div>
          <div>
            <div>{t(214)}</div>
            <div>{`aaaaaaaaaaaaaaaaaa`}</div>
          </div>
        </div>
        <div className='activitieInfoContent'>
          <div><ExceptionOutlined /></div>
          <div>
            <div>{t(215)}</div>
            <div>{`aaaaaaaaaaaaaaaaaa`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ActivitieInfo;