import { useState, useEffect } from 'react'
import { Row, Col, Input, Button, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'


const ForgetPW = () => {
    const { t } = useTranslation();
    const history = useHistory()
    const [account, setAccount] = useState('')
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [downNum, setDownNum] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const handleSend = () => {
        if (!email) {
            message.warning(t(90))
            return false
        }
        setDisabled(true)
        setDownNum(60)
    }
    const handleLogin = () => {
        if (!account) {
            message.warning(t(91))
            return false
        }
        if (!email) {
            message.warning(t(90))
            return false
        }
        if (!code) {
            message.warning(t(89))
            return false
        }
        console.log(email, account)
    }
    useEffect(() => {
        let timer = null;
        if (disabled) {
            timer = setInterval(() => {
                setDownNum(n => {
                    if (n === 1) {
                        setDisabled(false)
                    }
                    return n - 1
                })
            }, 1000);
        }
        return () => clearInterval(timer)
    }, [disabled])
    return (<div className='loginBox' >
        <div className='loginTitle' >
            <div onClick={
                () => history.go(-1)} > < LeftOutlined /> </div> <
                    div > {t(29)} </div> </div>
        <Row className='RowBox' >
            <Col className='labelTitle'
                span='4' > {t(26)} </Col> <
                    Col span='20' > < Input placeholder="Please input your password!"
                        value={account}
                        onChange={
                            (e) => setAccount(e.target.value)}
                /></Col >
        </Row> <Row className='RowBox' >
            <Col className='labelTitle'
                span='4' > {t(61)} </Col> <Col span='18' > < Input placeholder="Please input your email!"
                    value={email}
                    onChange={
                        (e) => setEmail(e.target.value)}
                /></Col >
            <Col span='2' > < Button type="primary"
                block onClick={handleSend}
                disabled={disabled} > {disabled ? downNum : t(59)} </Button></Col >
        </Row>
        <Row className='RowBox' >
            <Col className='labelTitle'
                span='4' > {t(88)} </Col> <
                    Col span='4' > < Input placeholder="Please input your code!"
                        value={code}
                        onChange={
                            (e) => setCode(e.target.value)}
                /></Col >
        </Row> <Row className='RowBox' >
            <Button type="primary"
                size='large'
                block onClick={handleLogin} > {t(4)} </Button> </Row> </div>
    )
}
export default ForgetPW