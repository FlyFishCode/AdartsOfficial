import { useState, useEffect } from 'react';
import { dartsInfoHttp } from '@/api';
import { useLocation } from 'react-router-dom';
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
    getInfo(location.state.id)
  }, [location?.state?.id])
  return (
    <div className='dartsInfoBox'>
      <div>{info.title}</div>
      <div>{info.cdateInt}</div>
      <div className='dartsContent'></div>
    </div>
  )
}
export default DartsInfo;