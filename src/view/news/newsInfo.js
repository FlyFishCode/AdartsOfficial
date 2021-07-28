import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';


import './index.css';


const NewsInfo = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [newsInfo, setNewsInfo] = useState({});
  const getNewsInfo = () => {
    setNewsInfo({
      type: 1,
      title: 'AAAAAAAAAAAAAAAAAAAAAAAA',
      time: '2021-08-05'
    })
  }
  console.log(location.state.id);
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
    getNewsInfo()
  }, [])
  return (
    <div>
      <div className='newsInfoTitle'>
        <div>[{getType(newsInfo.type)}]</div>
        <div>{newsInfo.title}</div>
      </div>
      <div>{newsInfo.time}</div>
    </div>
  )
}

export default NewsInfo;