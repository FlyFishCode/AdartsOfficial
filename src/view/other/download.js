import { useEffect } from 'react';
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
    <div className='Download'>Download</div>
  )
}
export default Download;