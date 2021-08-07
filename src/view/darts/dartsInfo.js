import { useState, useEffect } from 'react';
import { dartsInfoHttp } from '@/api';
import { useLocation } from 'react-router-dom';

import './index.css';

const DartsInfo = () => {
  const location = useLocation();
  const [info, setInfo] = useState({});
  const getInfo = (id) => {
    dartsInfoHttp({ id }).then(res => {
      setInfo(res.data.data)
      document.querySelector('.dartsContent').innerHTML = res.data.data.contents
    })
  }
  useEffect(() => {
    getInfo(location.search.substr(1).split('=')[1])
  }, [location])
  return (
    /*<div className='dartsInfoBox containerBox'>*/
    <div className="boxContent containerBox">
      <div className="NewsBox">
        {/*<div>{info.title}</div>
        <div>{info.cdateInt}</div>
        <div className='dartsContent'></div>*/}
        <div style={{ paddingLeft: "40px" }}>
          <div className='dartsInfoTitle'>
            <div>{info.title}</div>
          </div>
          <div style={{ textAlign: 'left', marginTop: "10px" }}>{info.cdateInt}</div>
          <hr color="#eee" style={{ border: "none", height: "0.5px", marginRight: "20px" }} />
          <div className='dartsContent'></div>
        </div>
      </div>
    </div>
  )
}
export default DartsInfo;
