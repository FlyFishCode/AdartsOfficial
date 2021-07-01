import { useState, useEffect } from 'react';
import { Button, Modal, Form, Input, message, Row, Col, Select, Radio, DatePicker } from 'antd';
import { indexLoginHttp } from '@/api/index.ts'
import { useTranslation } from 'react-i18next';
import { countryListHttp } from '@/api'
import './index.css'
const LoginBox = (props) => {
  const { loginBoxEmit } = props;
  const [SMS, setSMS] = useState('1')
  const [day, setDay] = useState('')
  const [agree, setagree] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('1')
  const [country, setCountry] = useState()
  const [language, setLanguage] = useState()
  const [userName, setUserName] = useState('')
  const [countryList, setCountryList] = useState([])
  const [registerUserName, setRegisterUserName] = useState('')
  const [loginVisible, setloginVisible] = useState(false);
  const [lossIDVisible, setLossIDVisible] = useState(false);
  const [lossPassWordVisible, setLossPassWordVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const currentUserName = sessionStorage.getItem('websiteUserName')
  const [form] = Form.useForm()
  const [loseId] = Form.useForm()
  const [registerForm] = Form.useForm()
  const [losePassword] = Form.useForm()
  const { Option } = Select;
  const { t } = useTranslation();
  useEffect(() => {
    if (currentUserName) {
      setUserName(currentUserName)
    }
    getCountryList()
    // indexNewsListHttp().then(res => {
    //     console.log((res));
    // })
  }, [currentUserName])
  const getCountryList = () => {
    countryListHttp().then(res => {
      setCountryList(res.data.data)
    })
  }
  const [loginFormData] = useState({
    username: null,
    password: null,
  });
  const [registerFormData] = useState({
    id: null,
    cardId: null,
    email: null,
    agree: '1',
    nickName: null,
    password: null,
    confirmPassword: null,
  });
  const [lossIDFormData] = useState({
    email: null,
    password: null,
  });
  const [lossPassWordFormData] = useState({
    ID: null,
    email: null,
  });
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };
  const tailLayout = {
    wrapperCol: {
      span: 24,
    },
  };
  const handleLoginOut = () => {
    sessionStorage.removeItem('websiteToken')
    sessionStorage.removeItem('websiteUserName')
    sessionStorage.removeItem('websiteMemberId')
    setUserName('')
    loginBoxEmit('')
  }
  const onFinish = (values) => {
    indexLoginHttp(values).then((res) => {
      if (res.data.code === 100) {
        setloginVisible(false)
        setUserName(res.data.data.username)
        loginBoxEmit(res.data.data.username)
        sessionStorage.setItem('websiteUserName', res.data.data.username)
        sessionStorage.setItem('websiteMemberId', res.data.data.memberId)
        sessionStorage.setItem('websiteToken', res.data.data.token)
      } else {
        message.warning(res.data.msg)
      }
    })
  };
  const lossIDFinish = (values) => {
    console.log(values);
    message.info(1)
  }
  const lossPassWordFinish = (values) => {
    console.log(values);
    message.info(2)
  }
  const dateChange = (date, dateString) => {
    setDay(dateString)
  }
  const handleCancel = (type) => {
    switch (type) {
      case 1:
        form.resetFields()
        setloginVisible(false)
        break;
      case 2:
        registerForm.resetFields()
        setRegisterVisible(false)
        break;
      case 3:
        loseId.resetFields()
        setLossIDVisible(false)
        break;
      default:
        losePassword.resetFields()
        setLossPassWordVisible(false)
        break;
    }
  }
  const subitFrom = () => {
    registerForm.validateFields().then(values => {
      const data = { ...values, gender, SMS, phone, day, registerUserName, country, language }
      console.log(data);
      message.info(3)
    })
  }
  return (
    <>
      <div className='loginInfoBox'>
        <div>{userName}</div>
        <div>{userName ? <Button type="primary" danger onClick={handleLoginOut}>{t(18)}</Button> : <Button type="primary" onClick={() => setloginVisible(true)}>{t(4)}</Button>}</div>
      </div>
      {/* 登录弹框 */}
      <Modal title={t(4)} visible={loginVisible} onCancel={() => handleCancel(1)} centered footer={null}>
        <Form
          {...layout}
          form={form}
          initialValues={loginFormData}
          onFinish={onFinish}
        >
          <Form.Item
            label={t(26)}
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t(27)}
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

          <Row className='loginBoxRow'>
            <Col offset='4'>
              <Button type="link" onClick={() => setLossIDVisible(true)}>{t(28)}</Button>
              <Button type="link" onClick={() => setLossPassWordVisible(true)}>{t(29)}</Button>
            </Col>
            <Col offset='5'>
              <Button type="dashed" onClick={() => setRegisterVisible(true)}>{t(30)}</Button>
            </Col>
          </Row>
          <Form.Item {...tailLayout}>
            <Button type="primary" block htmlType="submit">{t(4)}</Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* 注册会员弹框 */}
      <Modal title={t(30)} visible={registerVisible} onCancel={() => handleCancel(2)} centered footer={null} width='50%'>
        <Row className='registerHead'>
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
            <Select defaultValue="zh-jt" onChange={(value) => setLanguage(value)}>
              <Option value="zh-jt">{t(1)}</Option>
              <Option value="zh-ft">{t(2)}</Option>
              <Option value="zh-en">{t(3)}</Option>
            </Select>
          </Col>
        </Row>
        <Row>
          <Col span='4' className='registerTitle'>{t(33)}</Col>
        </Row>
        <Form
          {...layout}
          form={registerForm}
          initialValues={registerFormData}
        >
          <Form.Item
            label={t(34)}
            name="id"
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
            name="cardId"
            rules={[
              {
                required: true,
                message: 'Please input your card Id!',
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
            ]}
          >
            <Input.Password placeholder={t(41)} />
          </Form.Item>
          <Form.Item
            label={t(38)}
            name="nickName"
            rules={[
              {
                required: true,
                message: 'Please input your nickName!',
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
          <Form.Item name='agree' label={t(55)}>
            <Radio.Group onChange={(e) => setagree(e.target.value)} value={agree}>
              <Radio value='1'>{t(51)}</Radio>
              <Radio value='0'>{t(52)}</Radio>
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
            <Input value={registerUserName} onChange={(e) => setRegisterUserName(e.target.value)} />
          </Col>
        </Row>
        <Row className='registerRow'>
          <Col span='4' className='registerLabel'>{t(45)}</Col>
          <Col span='8' className='radioBox'>
            <Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
              <Radio value='1'>{t(53)}</Radio>
              <Radio value='2'>{t(54)}</Radio>
            </Radio.Group>
          </Col>
          <Col span='4' className='registerLabel'>{t(46)}</Col>
          <Col span='8' className='radioBox'>
            <Radio.Group onChange={(e) => setSMS(e.target.value)} value={SMS}>
              <Radio value='1'>{t(51)}</Radio>
              <Radio value='0'>{t(52)}</Radio>
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
        <Row justify="center">
          <Button type="primary" onClick={subitFrom}>{t(57)}</Button>
        </Row>
      </Modal>
      {/* 忘记账号弹框 */}
      <Modal title={t(58)} visible={lossIDVisible} onCancel={() => handleCancel(3)} centered footer={null} width='40%'>
        <Form
          form={loseId}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={lossIDFormData}
          onFinish={lossIDFinish}
        >
          <Form.Item
            label={t(60)}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label={t(61)}
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
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" block htmlType="submit">{t(59)}</Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* 忘记密码弹框 */}
      <Modal title={t(29)} visible={lossPassWordVisible} onCancel={() => handleCancel(4)} centered footer={null} width='40%'>
        <Form
          form={losePassword}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={lossPassWordFormData}
          onFinish={lossPassWordFinish}
        >
          <Form.Item
            label={t(62)}
            name="ID"
            rules={[
              {
                required: true,
                message: 'Please input your ID',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t(61)}
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
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" block htmlType="submit">{t(59)}</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
export default LoginBox;