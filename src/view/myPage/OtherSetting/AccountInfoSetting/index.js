import { useState, useEffect } from 'react'
import { Row, Col, Input, Button, Radio } from 'antd'
import { useTranslation } from 'react-i18next'
const AccountInfoSetting = () => {
  const { t } = useTranslation()
  const [cardInfo, setCardInfo] = useState({});
  const [agree, setAgree] = useState(1);
  const getCardInfo = () => {
    setCardInfo({
      country: 1,
      language: 1,
      ID: 1,
      userName: 1,
      gender: 1,
      cardNo: 1,
      homeShop: 1,
      birthday: 1,
      phoneNumber: 1,
      email: 1,
      cardReDay: 1,
    })
  }
  useEffect(() => {
    getCardInfo()
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='AccountInfoSetting'>{t(70)}</div>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(99)}</Col>
        <Col span='2'>{cardInfo.country}</Col>
        <Col span='2'>{cardInfo.language}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(34)}</Col>
        <Col span='20'>{cardInfo.ID}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(44)}</Col>
        <Col span='20'>{cardInfo.userName}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(45)}</Col>
        <Col span='20'>{cardInfo.gender}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(35)}</Col>
        <Col span='20'>{cardInfo.cardNo}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(38)}</Col>
        <Col span='20'><Input placeholder="Basic usage" /></Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(23)}</Col>
        <Col span='20'>{cardInfo.homeShop}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(47)}</Col>
        <Col span='20'>{cardInfo.birthday}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(48)}</Col>
        <Col span='20'><Input placeholder="Basic usage" /></Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(39)}</Col>
        <Col span='20'>
          <div><Input placeholder="Basic usage" /></div>
          <div className='AccountInfoEmailBox'>
            <div><Button type="primary">{t(59)}</Button></div>
            <div className='label'>{t(88)}</div>
            <div><Input placeholder="Basic usage" /></div>
            <div className='AccountInfoRadio'>
              <Radio.Group onChange={(e) => setAgree(e.target.value)} value={agree}>
                <Radio value='1'>{t(51)}</Radio>
                <Radio value='0'>{t(52)}</Radio>
              </Radio.Group>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(101)}</Col>
        <Col span='20'>{cardInfo.cardReDay}</Col>
      </Row>
      <Row className='rowBox'>
        <Col span='4' className='AccountInfoLabel'>{t(100)}</Col>
        <Col span='20'>{cardInfo.cardReDay}</Col>
      </Row>
    </div>
  )
}
export default AccountInfoSetting