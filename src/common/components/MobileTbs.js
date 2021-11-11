import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
const MobileTab = (prop) => {
  const { setVisibleFalse } = prop;
  const history = useHistory();
  const handleClick = () => {
    history.go(-1);
    setTimeout(() => {
      if (window.location.pathname === '/') {
        setVisibleFalse();
      }
    }, 200)
  }
  return (
    <div className='Mobile-Tab' onClick={handleClick}><LeftOutlined /></div>
  )
}

export default MobileTab;