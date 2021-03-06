import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { indexNewsInfoHttp } from '@/api';
import { dealUrlHash } from '@/common/Utlis';

import './index.css';


const NewsInfo = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [newsInfo, setNewsInfo] = useState({});
  const getNewsInfo = (id) => {
    indexNewsInfoHttp({ id }).then(res => {
      setNewsInfo(res.data.data);
      document.querySelector('.dartsContent').innerHTML = res.data.data.contents;
    })
  }
  const getType = (type) => {
    let str = ''
    switch (type) {
      case 3:
        str = t(8);
        break;
      case 4:
        str = t(7);
        break;
      default:
        str = t(9);
        break;
    }
    return str
  };
  useEffect(() => {
    getNewsInfo(dealUrlHash(location))
  }, [location])
  return (
    <div style={{ paddingLeft: "40px" }}>
      <div className='newsInfoTitle'>
        <div>[{getType(newsInfo.type)}]</div>
        <div>{newsInfo.title}</div>
      </div>
      <div style={{ textAlign: 'left', marginTop: "10px" }}>{newsInfo.date}</div>
      <hr color="#eee" style={{ border: "none", height: "0.5px", marginRight: "20px" }} />
      <div className='dartsContent'></div>
    </div>
  )
}

export default NewsInfo;
