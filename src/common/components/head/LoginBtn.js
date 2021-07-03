import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'
import './index.css'
const LoginBtn = (props) => {
  const { userName, loginOut } = props
  const history = useHistory();
  const { t } = useTranslation();
  const handleLoginOut = () => {
    sessionStorage.removeItem('websiteToken')
    sessionStorage.removeItem('websiteUserName')
    sessionStorage.removeItem('websiteMemberId')
    loginOut('')
  }
  return (
    <>
      <div className='loginInfoBox'>
        <div>{userName}</div>
        <div>{userName ? <Button type="primary" danger onClick={handleLoginOut}>{t(18)}</Button> : <Button type="primary" onClick={() => history.push('login')}>{t(4)}</Button>}</div>
      </div>
    </>
  )
}
export default LoginBtn;