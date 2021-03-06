import { useState, useEffect } from 'react'
import { Row, Col, Input, Button, Upload, Modal, Select, message } from 'antd'
import { useTranslation } from 'react-i18next'
import { PlusOutlined } from '@ant-design/icons'
import { accountInfoHttp, upLoadImgHttp, accountInfoUpdateHttp, shopListHttp, countryListHttp, sendEmailHttp, sendPhoneHttp } from '@/api'
import { REG_EMAIL } from '@/common/Utlis'
import { REG_PHONE } from '../../../../common/Utlis'


const { Option } = Select;

const AccountInfoSetting = () => {
  const { t } = useTranslation();
  const [cardInfo, setCardInfo] = useState({});
  const [homeShopId, setHomeShopId] = useState('');
  const [shopList, setShopList] = useState([]);
  const [countryId, setCountryId] = useState();
  const [countryList, setCountryList] = useState([]);
  const [languageId, setLanguage] = useState('lucy');
  const [fileList, setFileList] = useState([]);
  const [emailBtnDisabled, setEmailBtnDisabled] = useState(false);
  const [phoneBtnDisabled, setPhoneBtnDisabled] = useState(false);
  const [emailCountDown, setEmailCountDown] = useState(59);
  const [phoneCountDown, setPhoneCountDown] = useState(59);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailCode, setCode] = useState('');
  const [phoneCode, setPhoneCode] = useState('+86');
  const [nickname, setNickname] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);
  const memberId = sessionStorage.getItem('websiteMemberId');

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const getCountryList = () => {
    countryListHttp().then(res => {
      setCountryList(res.data.data)
    })
  }
  const getShopList = () => {
    shopListHttp({ countryId: sessionStorage.getItem('') }).then(res => {
      if (res.data.code === 100) {
        setShopList(res.data.data)
      }
    })
  }
  const handlePreview = (file) => {
    if (!file.url && !file.preview) {
      file.preview = getBase64(file.originFileObj);
    }
    setPreviewVisible(true)
    setPreviewImage(file.url || file.preview)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  };
  const handleChange = ({ file }) => {
    if (file.status === "removed") {
      setFileList([])
    }
  };
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
    upLoadImgHttp(formData).then(res => {
      setFileList([{ uid: '1', url: res.data.data }])
    })
  }
  const getCardInfo = (memberId) => {
    accountInfoHttp({ memberId }).then(res => {
      if (res.data.code === 100) {
        const data = res.data.data
        setCardInfo(res.data.data);
        setPhoneCode(data.phone && data.phone.split('-')[0]);
        setPhone(data.phone && data.phone.split('-')[1]);
        setEmail(data.email);
        setHomeShopId(data.homeShopId);
        setCountryId(data.countryId);
        setLanguage(data.languageId);
        setNickname(data.nickname);
        setFileList([{ uid: new Date().getTime(), url: data.portrait }])
      }
    })
  }
  const handleOk = () => {
    const data = {
      memberId,
      phone: `${phoneCode}-${phone}`,
      portrait: (fileList[0] && fileList[0].url) || '',
      homeShopId,
      countryId,
      languageId,
      nickname,
      email,
      emailCode,
      acceptMail: 1,
    }
    accountInfoUpdateHttp(data).then(res => {
      if (res.data.code === 100) {
        message.info(res.data.msg)
      } else {
        message.warning(res.data.msg)
      }
    })
  }
  const handleEmailBtnClick = () => {
    if (REG_EMAIL.test(email)) {
      setEmailBtnDisabled(true);
      sendEmailHttp({ email }).then(res => {
        message.info(res.data.msg)
      })
    } else {
      message.warning(t(63))
    }
  }
  const handlePhoneBtnClick = () => {
    if (REG_PHONE.test(phone)) {
      setPhoneBtnDisabled(true);
      sendPhoneHttp({ phone: phoneCode + phone }).then(res => {
        if (res.data.code === 100) {
          message.info(res.data.msg)
        }
      })
    } else {
      message.warning(t(63))
    }
  }
  useEffect(() => {
    let time = null
    if (phoneBtnDisabled && phoneCountDown) {
      time = setTimeout(() => {
        setPhoneCountDown(count => count - 1)
      }, 1000)
    } else {
      setPhoneCountDown(59)
      setPhoneBtnDisabled(false)
    }
    return () => clearTimeout(time)
  }, [phoneBtnDisabled, phoneCountDown])
  useEffect(() => {
    let time = null
    if (emailBtnDisabled && emailCountDown) {
      time = setTimeout(() => {
        setEmailCountDown(count => count - 1)
      }, 1000)
    } else {
      setEmailCountDown(59)
      setEmailBtnDisabled(false)
    }
    return () => clearTimeout(time)
  }, [emailBtnDisabled, emailCountDown])
  useEffect(() => {
    if (memberId) {
      getShopList()
      getCountryList()
      getCardInfo(memberId)
    }
    return () => {
      setShopList([]);
      setCountryList([]);
    }
  }, [memberId])
  return (
    <div>
      <div className='myPageTitle' id='AccountInfoSetting'>{t(70)}</div>
      <Row className='rowBox'>
        <Col lg={6} xs={15} className='AccountInfoLabel'>{t(99)}</Col>
        <Col lg={6} xs={9} className='selectBox'>
          <Select
            showSearch
            placeholder="Select country"
            optionFilterProp="children"
            onChange={(value) => setCountryId(value)}
            value={countryId}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {countryList.map(i => <Option key={i.countryId} value={i.countryId}>{i.countryName}</Option>)}
          </Select>
        </Col>
        {/* <Col span='5' offset='1' className='selectBox'>
          <Select
            showSearch
            placeholder="Select language"
            optionFilterProp="children"
            onChange={(value) => setLanguage(value)}
            value={languageId}
            filterOption={(input, option) =>
              option.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col> */}
      </Row>
      <Row className='rowBox'>
        <Col span='6' className='AccountInfoLabel'>{t(34)}</Col>
        <Col span='18'>{cardInfo.account}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='6' className='AccountInfoLabel'>{t(44)}</Col>
        <Col span='18'>{cardInfo.nickname}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='6' className='AccountInfoLabel'>{t(45)}</Col>
        <Col span='18'>{cardInfo.gender ? t(53) : t(54)}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='6' className='AccountInfoLabel'>{t(35)}</Col>
        <Col span='18'>{cardInfo.cardNo}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='6' className='AccountInfoLabel'>{t(38)}</Col>
        <Col span='18'><Input placeholder="Basic usage" value={nickname} onChange={(e) => setNickname(e.target.value)} allowClear /></Col>
      </Row>
      <Row className='rowBox'>
        <Col span='6' className='AccountInfoLabel'>{t(23)}</Col>
        <Col span='18' className='selectBox'>
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={(value) => setHomeShopId(value)}
            value={homeShopId}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {shopList.map(i => <Option key={i.shopId} value={i.shopId}>{i.shopName}</Option>)}
          </Select>
        </Col>
      </Row>
      <Row className='rowBox'>
        <Col span='6' className='AccountInfoLabel'>{t(102)}</Col>
        <Col span='18'>
          <Upload
            customRequest={handleRequset}
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
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
        <Col lg={6} xs={10} className='AccountInfoLabel'>{t(47)}</Col>
        <Col lg={18} xs={10}>{cardInfo.birth}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='6' className='AccountInfoLabel'>{t(48)}</Col>
        <Col lg={6} xs={18}>
          <Input.Group compact>
            <Select defaultValue={phoneCode} style={{ width: '40%' }} onChange={(value) => setPhoneCode(value)} >
              <Option value="+86">+86</Option>
              <Option value="000">+000</Option>
            </Select>
            <Input style={{ width: '60%' }} value={phone} onChange={(e) => setPhone(e.target.value)} allowClear />
          </Input.Group>
        </Col>
        <Col lg={{ span: 5 }} xs={{ span: 11 }}>
          <Button type="primary" onClick={handlePhoneBtnClick} disabled={phoneBtnDisabled}>{phoneBtnDisabled ? phoneCountDown : t(59)}</Button>
        </Col>
        <Col lg={7} xs={13}>
          <Input placeholder={t(89)} onChange={(e) => setCode(e.target.value)} allowClear />
        </Col>
      </Row>
      <Row className='rowBox'>
        <Col span='6' className='AccountInfoLabel'>{t(39)}</Col>
        <Col lg={6} xs={18}><Input placeholder="Basic usage" value={email} onChange={(e) => setEmail(e.target.value)} allowClear /></Col>
        <Col lg={{ span: 5 }} xs={{ span: 11 }}><Button type="primary" onClick={handleEmailBtnClick} disabled={emailBtnDisabled}>{emailBtnDisabled ? emailCountDown : t(59)}</Button></Col>
        <Col lg={7} xs={13}><Input placeholder={t(89)} onChange={(e) => setCode(e.target.value)} allowClear /></Col>
      </Row>
      {/* <Row type="flex" justify="center" style={{ marginBottom: "10px" }}>
        <Radio.Group onChange={(e) => setAcceptMail(e.target.value)} value={acceptMail}>
          <Radio value={1}>{t(51)}</Radio>
          <Radio value={0}>{t(52)}</Radio>
        </Radio.Group>
      </Row> */}
      <Row className='rowBox'>
        <Col span='6' className='AccountInfoLabel'>{t(100)}</Col>
        <Col span='18'>{cardInfo.cardBindTime}</Col>
      </Row>
      <div className='btnBox'>
        <Button type="primary" onClick={handleOk}>{t(19)}</Button>
      </div>
    </div>
  )
}
export default AccountInfoSetting;
