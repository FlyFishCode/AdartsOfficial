import { Row, Col, Input, Button } from 'antd'
import { useTranslation } from 'react-i18next'
const AwardMsgSetting = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='myPageTitle' id='AwardMsgSetting'>{t(71)}</div>
      <div className='labelInfo'>{t(103)}</div>
      <div className='titleLabel'>{t(104)}</div>
      <div className='AwardMsgSettingAwardBox'>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>{t(106)}</Col>
          <Col span='12'>{t(105)}</Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>LOW TON</Col>
          <Col span='12'><Input placeholder="Input Message" allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>HIGH TON</Col>
          <Col span='12'><Input placeholder="Input Message" allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>HAT TON</Col>
          <Col span='12'><Input placeholder="Input Message" allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>THERE IN A BED</Col>
          <Col span='12'><Input placeholder="Input Message" allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>WHITE HORSE</Col>
          <Col span='12'><Input placeholder="Input Message" allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>TON 80</Col>
          <Col span='12'><Input placeholder="Input Message" allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>THERE IN THE BLACK</Col>
          <Col span='12'><Input placeholder="Input Message" allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>9MARK</Col>
          <Col span='12'><Input placeholder="Input Message" allowClear /></Col>
        </Row>
        <Row justify="center" className='rowBox'>
          <Button type="primary">{t(19)}</Button>
        </Row>
      </div>
    </div>
  )
}
export default AwardMsgSetting