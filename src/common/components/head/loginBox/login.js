import { useState } from 'react';
import { Row, Col, Input, Button, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { indexLoginHttp } from '@/api/index';
import { MD5 } from '@/common/Utlis'

const LoginBox = (props) => {
    const { changeUserName } = props;
    const { t } = useTranslation();
    const history = useHistory();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (!username) {
            message.warning(t(86))
            return false
        }
        if (!password) {
            message.warning(t(87))
            return false
        }
        indexLoginHttp({ username, password: MD5(password) }).then((res) => {
            if (res.data.code === 100) {
                const data = res.data.data
                setUserName(data.username)
                changeUserName(data.username)
                sessionStorage.setItem('websiteUserName', data.username);
                sessionStorage.setItem('websiteMemberId', data.memberId);
                sessionStorage.setItem('websiteCardId', data.mainCardId || '');
                sessionStorage.setItem('websiteToken', data.token);
                history.push('/');
            } else {
                message.warning(res.data.msg)
            }
        })
    }
    return (
        <div className='containerBox'>
            <div className="loginBox">
                <Row className='loginTitle'>{t(4)}</Row>
                <Row className='RowBox'>
                    <Col lg={4} xs={6} className='labelTitle'>{t(26)}</Col>
                    <Col lg={20} xs={18}><Input placeholder="Please input your username!" value={username} onChange={(e) => setUserName(e.target.value)} /></Col>
                </Row>
                <Row className='RowBox'>
                    <Col lg={4} xs={6} className='labelTitle'>{t(27)}</Col>
                    <Col lg={20} xs={18}><Input.Password placeholder="Please input your password!" value={password} onChange={(e) => setPassword(e.target.value)} /></Col>
                </Row>
                <Row className='RowBox'>
                    <Col offset='4'><Button type="link" onClick={() => history.push('ForgetID')}>{t(28)}</Button></Col>
                </Row>
                <Row className='RowBox'>
                    <Col offset='4'><Button type="link" onClick={() => history.push('ForgetPW')}>{t(29)}</Button></Col>
                </Row>
                <Row justify="center" className='RowBox'>
                    <Col lg='20' xs='10'><Button type="dashed" block onClick={() => history.push('AddUser')}>{t(30)}</Button></Col>
                </Row>
                <Row className='RowBox'>
                    <Button type="primary" size='large' block onClick={handleLogin}>{t(4)}</Button>
                </Row>
            </div>
        </div>
    )
}
export default LoginBox
