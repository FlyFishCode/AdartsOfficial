import { useEffect } from 'react';
import download from '@/assets/img/download.png'
const Download = () => {
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
    <div className='Download'>
      <img src={download} alt="" />
    </div>
  )
}
export default Download;