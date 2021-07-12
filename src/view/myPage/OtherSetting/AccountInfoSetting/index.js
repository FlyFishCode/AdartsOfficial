import { useState, useEffect } from 'react'
import { Row, Col, Input, Button, Radio, Upload, Modal, Select, message } from 'antd'
import { useTranslation } from 'react-i18next'
import { PlusOutlined } from '@ant-design/icons'
import { upLoadImg } from '@/common/Utlis.js'
import { accountInfoHttp } from '@/api'

const { Option } = Select;

const AccountInfoSetting = () => {
  const { t } = useTranslation()
  const [cardInfo, setCardInfo] = useState({});
  const [fileList, setFileList] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [countDown, setCountDown] = useState(59)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [areaPhoneCode, setAreaPhoneCode] = useState('+86')
  const [homeShop, setHomeShop] = useState('jack')
  const [nickname, setNickname] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [previewImage, setPreviewImage] = useState('')
  const [previewVisible, setPreviewVisible] = useState(false)
  const [acceptMail, setAcceptMail] = useState(1);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const handlePreview = (file) => {
    if (!file.url && !file.preview) {
      file.preview = getBase64(file.originFileObj);
    }
    setPreviewVisible(true)
    setPreviewImage(file.url || file.preview)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  };
  const handleChange = ({ fileList }) => {
    setFileList(fileList)
  }
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  const handleRequset = ({ file }) => {
    const formData = new FormData();
    formData.append("image", file);
    console.log(upLoadImg(formData));
  }
  const getCardInfo = () => {
    accountInfoHttp({ memberId: sessionStorage.getItem('websiteMemberId') || '' }).then(res => {
      const data = res.data.data
      setCardInfo(res.data.data)
      setPhone(data.phone)
      setEmail(data.email)
      setNickname(data.nickname)
      setHomeShop(data.homeShop)
      setAcceptMail(data.acceptMail)
      setFileList([{ url: data.portrait }])
    })
  }
  const handleOk = () => {
    console.log({
      phone: `${areaPhoneCode}-${phone}`,
      nickname,
      homeShop,
      email,
      acceptMail,
    });
    message.info(3)
  }
  useEffect(() => {
    let time = null
    console.log(countDown);
    if (disabled && countDown) {
      time = setTimeout(() => {
        setCountDown(count => count - 1)
      }, 1000)
    } else {
      setCountDown(59)
      setDisabled(false)
      clearTimeout(time)
    }
  }, [disabled, countDown])
  useEffect(() => {
    getCardInfo()
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='AccountInfoSetting'>{t(70)}</div>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(99)}</Col>
        <Button type="dashed">{cardInfo.country}</Button>
        <div className='AccountInfoBtn'><Button type="dashed">{cardInfo.languageName}</Button></div>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(34)}</Col>
        <Col span='20'>{cardInfo.account}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(44)}</Col>
        <Col span='20'>{cardInfo.name}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(45)}</Col>
        <Col span='20'>{cardInfo.gender ? t(53) : t(54)}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(35)}</Col>
        <Col span='20'>{cardInfo.cardNo}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(38)}</Col>
        <Col span='20'><Input placeholder="Basic usage" value={nickname} onChange={(e) => setNickname(e.target.value)} allowClear /></Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(23)}</Col>
        <Col span='20' className='selectBox'><Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={(value) => setHomeShop(value)}
          defaultValue={homeShop}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select></Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(102)}</Col>
        <Col span='20'>
          <Upload
            customRequest={handleRequset}
            listType="picture-card"
            fileList={fileList}
            onPreview={() => handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={() => setPreviewVisible(false)}
          >
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(47)}</Col>
        <Col span='20'>{cardInfo.birth}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(48)}</Col>
        <Col span='20'>
          <Input.Group compact>
            <Select defaultValue={areaPhoneCode} style={{ width: '20%' }} onChange={(value) => setAreaPhoneCode(value)} >
              <Option value="+81">+81</Option>
              <Option value="000">+000</Option>
            </Select>
            <Input style={{ width: '80%' }} defaultValue="Xihu District, Hangzhou" value={phone} onChange={(e) => setPhone(e.target.value)} allowClear />
          </Input.Group>
        </Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(39)}</Col>
        <Col span='20'>
          <div><Input placeholder="Basic usage" value={email} onChange={(e) => setEmail(e.target.value)} allowClear /></div>
          <div className='AccountInfoEmailBox'>
            <div><Button type="primary" onClick={() => setDisabled(true)} disabled={disabled}>{disabled ? countDown : t(59)}</Button></div>
            <div className='label'>{t(88)}</div>
            <div><Input placeholder="Basic usage" /></div>
            <div className='AccountInfoRadio'>
              <Radio.Group onChange={(e) => setAcceptMail(e.target.value)} value={acceptMail}>
                <Radio value='1'>{t(51)}</Radio>
                <Radio value='0'>{t(52)}</Radio>
              </Radio.Group>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(100)}</Col>
        <Col span='20'>{cardInfo.cardBindTime}</Col>
      </Row>
      <div className='btnBox'>
        <Button type="primary" onClick={handleOk}>{t(19)}</Button>
      </div>
    </div>
  )
}
export default AccountInfoSetting