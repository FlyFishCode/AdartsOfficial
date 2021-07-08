import { Row, Col, Form, Button, Select, Radio, DatePicker, Input, message } from 'antd'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { countryListHttp } from '@/api'
import { LeftOutlined } from '@ant-design/icons'
import { indexRegisterHttp } from '@/api'
const AddUser = () => {
    const [countryId, setCountry] = useState()
    const [countryList, setCountryList] = useState([])
    const [languageId, setLanguage] = useState('')
    const [acceptSMS, setAcceptSMS] = useState(0)
    const [birth, setBirth] = useState('')
    const [acceptMail, setAcceptMail] = useState(0)
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState(1)
    const [name, setName] = useState('')
    const [form] = Form.useForm()
    const { t } = useTranslation()
    const history = useHistory()
    const [registerFormData] = useState({
        account: null,
        cardNo: null,
        email: null,
        acceptMail: 0,
        nickname: null,
        password: null,
        confirmPassword: null,
    });
    const { Option } = Select;
    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 20,
        },
    };
    const dateChange = (date, dateString) => {
        setBirth(dateString)
    }
    const getCountryList = () => {
        countryListHttp().then(res => {
            setCountryList(res.data.data)
        })
    }
    const subitFrom = () => {
        form.validateFields().then(values => {
            const data = { ...values, gender, acceptSMS, phone, birth, name, countryId, languageId }
            indexRegisterHttp(data).then(res => {
                if (res.data.code === 100) {
                    message.info(res.data.msg)
                    history.push('login')
                } else {
                    message.warning(res.data.data)
                }
            })
        })
    }
    useEffect(() => {
        getCountryList()
    }, [])
    return (
        <div className='loginBox'>
            <div className='loginTitle'>
                <div onClick={() => history.go(-1)}><LeftOutlined /></div>
                <div>{t(30)}</div>
            </div>
            <Row className='registerHead RowBox'>
                <Col span='2' className='labelTitle'>{t(31)}</Col>
                <Col span='10' className='selectBox'>
                    <Select onChange={(value) => setCountry(value)}>
                        {countryList.map(i => {
                            return (
                                <Option value={i.countryId} key={i.countryId}>{i.countryName}</Option>
                            )
                        })}
                    </Select>
                </Col>
                <Col span='2' className='labelTitle'>{t(32)}</Col>
                <Col span='10' className='selectBox'>
                    <Select defaultValue="1" onChange={(value) => setLanguage(value)}>
                        <Option value="1">{t(1)}</Option>
                        <Option value="2">{t(2)}</Option>
                        <Option value="3">{t(3)}</Option>
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col span='4' className='registerTitle'>{t(33)}</Col>
            </Row>
            <Form
                {...layout}
                form={form}
                initialValues={registerFormData}
            >
                <Form.Item
                    label={t(34)}
                    name="account"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Id!',
                        },
                    ]}
                >
                    <Input placeholder={t(40)} />
                </Form.Item>

                <Form.Item
                    label={t(35)}
                    name="cardNo"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your cardNo!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t(36)}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label={t(37)}
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator (_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error(t(110)));
                            }
                        })
                    ]}
                >
                    <Input.Password placeholder={t(41)} />
                </Form.Item>
                <Form.Item
                    label={t(38)}
                    name="nickname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t(39)}
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        ({ getFieldValue }) => ({
                            validator (_, value) {
                                const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                if (!value || reg.test(value)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error(t(63)));
                            },
                        })
                    ]}
                >
                    <Input placeholder={t(42)} />
                </Form.Item>
                <Form.Item name='acceptMail' label={t(55)}>
                    <Radio.Group onChange={(e) => setAcceptMail(e.target.value)} value={acceptMail}>
                        <Radio value={0}>{t(51)}</Radio>
                        <Radio value={1}>{t(52)}</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
            <Row>
                <Col span='4' className='registerTitle'>{t(43)}</Col>
            </Row>
            <div className='tipsBox'>
                <div>{t(49)}</div>
                <div>{t(50)}</div>
            </div>
            <Row className='registerRow'>
                <Col span='4' className='registerLabel'>{t(44)}</Col>
                <Col span='20' className='selectBox'>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </Col>
            </Row>
            <Row className='registerRow'>
                <Col span='4' className='registerLabel'>{t(45)}</Col>
                <Col span='8' className='radioBox'>
                    <Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
                        <Radio value={1}>{t(53)}</Radio>
                        <Radio value={0}>{t(54)}</Radio>
                    </Radio.Group>
                </Col>
                <Col span='4' className='registerLabel'>{t(46)}</Col>
                <Col span='8' className='radioBox'>
                    <Radio.Group onChange={(e) => setAcceptSMS(e.target.value)} value={acceptSMS}>
                        <Radio value={0}>{t(51)}</Radio>
                        <Radio value={1}>{t(52)}</Radio>
                    </Radio.Group>
                </Col>
            </Row>
            <Row className='registerRow'>
                <Col span='4' className='registerLabel'>{t(47)}</Col>
                <Col span='8' className='selectBox'>
                    <DatePicker onChange={dateChange} allowClear />
                </Col>
                <Col span='4' className='registerLabel'>{t(48)}</Col>
                <Col span='8'>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} allowClear />
                </Col>
            </Row>
            <div className='tipsBox'>
                <div>{t(56)}</div>
            </div>
            <Row className='RowBox' justify="center">
                <Button type="primary" onClick={subitFrom}>{t(57)}</Button>
            </Row>
        </div >
    )
}
export default AddUser