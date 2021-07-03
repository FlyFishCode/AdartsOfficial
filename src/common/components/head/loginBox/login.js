import { useState } from 'react'
import { Row, Col, Input, Button, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
import { indexLoginHttp } from '@/api/index'


const LoginBox = (props) => {
  const { changeUserName } = props
  const { t } = useTranslation();
  const history = useHistory()
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    if (!username) {
      message.warning(t(86))
      return false
    }
    if (!password) {
      message.warning(t(87))
      return false
    }
    indexLoginHttp({ username, password }).then((res) => {
      if (res.data.code === 100) {
        history.push('/')
        setUserName(res.data.data.username)
        changeUserName(res.data.data.username)
        sessionStorage.setItem('websiteUserName', res.data.data.username)
        sessionStorage.setItem('websiteMemberId', res.data.data.memberId)
        sessionStorage.setItem('websiteToken', res.data.data.token)
      } else {
        message.warning(res.data.msg)
      }
    })
  }
  return (
    <div className='loginBox'>
      <div className='loginTitle'>
        <div onClick={() => history.go(-1)}><HomeOutlined /></div>
        <div>{t(4)}</div>
      </div>
      <Row className='loginBoxRow'>
        <Col className='labelTitle' span='4'>{t(26)}</Col>
        <Col span='20'><Input placeholder="Please input your username!" value={username} onChange={(e) => setUserName(e.target.value)} /></Col>
      </Row>
      <Row className='loginBoxRow'>
        <Col className='labelTitle' span='4'>{t(27)}</Col>
        <Col span='20'><Input.Password placeholder="Please input your password!" value={password} onChange={(e) => setPassword(e.target.value)} /></Col>
      </Row>
      <Row className='loginBoxRow'>
        <Col offset='4'><Button type="link" onClick={() => history.push('ForgetID')}>{t(28)}</Button></Col>
      </Row>
      <Row className='loginBoxRow'>
        <Col offset='4'><Button type="link" onClick={() => history.push('ForgetPW')}>{t(29)}</Button></Col>
      </Row>
      <Row justify="center" className='loginBoxRow'>
        <Col span='20'><Button type="dashed" block onClick={() => history.push('AddUser')}>{t(30)}</Button></Col>
      </Row>
      <Row className='loginBoxRow'>
        <Button type="primary" size='large' block onClick={handleLogin}>{t(4)}</Button>
      </Row>
    </div>
  )
}
export default LoginBox