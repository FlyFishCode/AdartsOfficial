import { useState, useEffect } from 'react'
import { Row, Col, Input, Button, message, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
import { REG_PHONE, REG_EMAIL } from '@/common/Utlis'
import { sendEmailHttp, findAccountHttp } from '@/api'

const { Option } = Select;
const ForgetID = () => {
    const { t } = useTranslation();
    const history = useHistory()
    const [type, setType] = useState('email')
    const [display, setDisplay] = useState('none')
    const [phoneCode, setPhoneCode] = useState('+86')
    const [inputValue, setInputValue] = useState('')
    const [code, setCode] = useState('')
    const [downNum, setDownNum] = useState(59)
    const [disabled, setDisabled] = useState(false)

    const handleTypeChange = (value) => {
        setType(value)
        if (value === 'phone') {
            setDisplay('inline-block')
        } else {
            setDisplay('none')
        }
    }
    const handleSend = () => {
        let flag = false
        let value = ''
        if (type === 'email' && REG_EMAIL.test(inputValue)) {
            flag = true
            value = inputValue
        }
        if (type === 'phone' && REG_PHONE.test(inputValue)) {
            flag = true
            value += `${phoneCode}-${inputValue}`
        }
        if (flag) {
            setDisabled(true)
            sendEmailHttp({ email: value }).then(res => {
                if (res.data.code === 100) {
                    message.info(res.data.msg)
                }
            })
        }
        else {
            message.warning(t(63))
        }
    }
    const handleOK = () => {
        if (!inputValue) {
            message.warning(t(63))
            return false
        }
        if (!code) {
            message.warning(t(89))
            return false
        }
        let value = ''
        if (type === 'email') {
            value = inputValue
        }
        if (type === 'phone') {
            value += `${phoneCode}-${inputValue}`
        }
        findAccountHttp({ email: value }).then(res => {
            if (res.data.code === 100) {
                message.info(res.data.msg)
            } else {
                message.warning(res.data.msg)
            }
        })
    }
    useEffect(() => {
        let timer = null;
        if (disabled) {
            timer = setInterval(() => {
                setDownNum(n => {
                    if (n === 1) {
                        setDisabled(false)
                        setDownNum(59)
                    }
                    return n - 1
                })
            }, 1000);
        }
        return () => clearInterval(timer)
    }, [disabled])
    return (
        <div className='loginBox' >
            <div className='loginTitle' >
                <div onClick={() => history.go(-1)} > < LeftOutlined /> </div>
                <div> {t(28)} </div>
            </div>
            <Row className='RowBox' >
                <Col className='labelTitle' span='4'> {t(131)} </Col>
                <Col span='13'>
                    <Input.Group compact>
                        <Select defaultValue={type} style={{ width: '20%' }} onChange={(value) => handleTypeChange(value)}>
                            <Option value="email">{t(39)}</Option>
                            <Option value="phone">{t(48)}</Option>
                        </Select>
                        <Select defaultValue={phoneCode} style={{ width: '15%', display: display }} onChange={(value) => setPhoneCode(value)}>
                            <Option value="+86">+86</Option>
                            <Option value="+87">+87</Option>
                        </Select>
                        <Input style={{ width: '65%' }} value={inputValue} onChange={(e) => setInputValue(e.target.value)} allowClear />
                    </Input.Group>
                </Col>
                <Col span='2'>
                    < Button type="primary" block onClick={handleSend} disabled={disabled} > {disabled ? downNum : t(59)} </Button>
                </Col>
                <Col span='4' offset='1'>
                    <Input placeholder="Please input your code!" value={code} onChange={(e) => setCode(e.target.value)} />
                </Col>
            </Row>
            <Row className='RowBox' >
                <Button type="primary" size='large' block onClick={handleOK} > {t(4)} </Button>
            </Row>
        </div>
    )
}
export default ForgetID