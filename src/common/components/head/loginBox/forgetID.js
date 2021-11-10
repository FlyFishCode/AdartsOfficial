import { useState } from 'react'
import { Row, Col, Input, Button, message, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
// import { REG_PHONE, REG_EMAIL } from '@/common/Utlis'
import { findAccountHttp } from '@/api'

const { Option } = Select;
const ForgetID = () => {
    const { t } = useTranslation();
    const history = useHistory()
    const [type, setType] = useState('email')
    const [display, setDisplay] = useState('none')
    const [countryCode, setCountryCode] = useState('+86')
    const [inputValue, setInputValue] = useState('')
    // const [code, setCode] = useState('')
    // const [downNum, setDownNum] = useState(59)
    // const [disabled, setDisabled] = useState(false)

    const handleTypeChange = (value) => {
        setType(value)
        if (value === 'phone') {
            setDisplay('inline-block')
        } else {
            setDisplay('none')
        }
    }
    // const handleSend = () => {
    //     let value = ''
    //     if (type === 'email' && REG_EMAIL.test(inputValue)) {
    //         setDisabled(true);
    //         value = inputValue;
    //         sendEmailHttp({ email: value }).then(res => {
    //             if (res.data.code === 100) {
    //                 message.info(res.data.msg)
    //             }
    //         })
    //         return;
    //     }
    //     if (type === 'phone' && REG_PHONE.test(inputValue)) {
    //         setDisabled(true);
    //         value += `${countryCode}-${inputValue}`;
    //         sendPhoneHttp({ phone: value }).then(res => {
    //             if (res.data.code === 100) {
    //                 message.info(res.data.msg)
    //             }
    //         })
    //         return;
    //     }
    //     message.warning(t(63))
    // }
    const handleOK = () => {
        if (!inputValue) {
            message.warning(t(63))
            return false
        }
        let email = '';
        let phone = '';
        if (type === 'email') {
            email = inputValue
        }
        if (type === 'phone') {
            phone += `${countryCode}-${inputValue}`
        }
        findAccountHttp({ email, phone }).then(res => {
            if (res.data.code === 100) {
                message.info(res.data.msg)
            } else {
                message.warning(res.data.msg)
            }
        })
    }
    return (
        <div className='loginBox containerBox'>
            <Row className='loginTitle' >
                <Col span='6' onClick={() => history.go(-1)} > < LeftOutlined /> {t(28)}</Col>
                <Col span='18'></Col>
            </Row>
            <Row className='RowBox' >
                <Col className='labelTitle' span='4'> {t(131)} </Col>
                <Col span='20'>
                    <Input.Group compact>
                        <Select defaultValue={type} style={{ width: '30%' }} onChange={(value) => handleTypeChange(value)}>
                            <Option value="email">{t(39)}</Option>
                            <Option value="phone">{t(48)}</Option>
                        </Select>
                        <Select defaultValue={countryCode} style={{ width: '25%', display: display }} onChange={(value) => setCountryCode(value)}>
                            <Option value="+86">+86</Option>
                            <Option value="+87">+87</Option>
                        </Select>
                        <Input style={{ width: '45%' }} value={inputValue} onChange={(e) => setInputValue(e.target.value)} allowClear />
                    </Input.Group>
                </Col>
            </Row>
            <Row className='RowBox' >
                <Button type="primary" size='large' block onClick={handleOK} > {t(19)} </Button>
            </Row>
        </div>
    )
}
export default ForgetID