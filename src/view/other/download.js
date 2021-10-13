import { useState, useEffect } from 'react';
import download from '@/assets/img/download.png'
const Download = () => {
  let [isPc, setIsPc] = useState(true);
  const isPC = () => {
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (let i = 0; i < Agents.length; i++) {
      if (userAgentInfo.includes(Agents[i])) {
        flag = false;
        break;
      }
    }
    return flag;
  }
  useEffect(() => {
    setIsPc(isPC())
  }, [])
  useEffect(() => {
    const Hdom = document.querySelector('.headBox');
    const Fdom = document.querySelector('.footer');
    Hdom.style.display = 'none';
    Fdom.style.display = 'none';
    return () => {
      Hdom.style.display = '';
      Fdom.style.display = '';
    }
  }, [])
  return (
    <div>
      {isPc ?
        <div className='PcDownload Download'>
          <img src={download} alt="" />
        </div>
        :
        <div className='MoDownload Download'>
          <img src={download} alt="" />
        </div>}
    </div>
  )
}
export default Download;