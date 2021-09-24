import { useState, useEffect } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { adartsMegGetHttp, adartsMegSetHttp } from '@/api';

const AwardMsgSetting = () => {
  const { t } = useTranslation();
  const [lowTon, setLowTon] = useState('');
  const [highTon, setHighTon] = useState('');
  const [hatTrick, setHatTrick] = useState('');
  const [thereInABed, setThereInABed] = useState('');
  const [whiteHorse, setWhiteHorse] = useState('');
  const [ton80, setTon80] = useState('');
  const [thereInABlack, setThereInABlack] = useState('');
  const [nineMark, setNineMark] = useState('');
  const getData = () => {
    adartsMegGetHttp({ memberId: sessionStorage.getItem('websiteMemberId') }).then(res => {
      console.log(res.data.msg);
    })
  };
  const setData = () => {
    const obj = {
      lowTon,
      hatTrick,
      highTon,
      ton80,
      thereInABed,
      whiteHorse,
      thereInABlack,
      nineMark
    }
    adartsMegSetHttp(obj).then(res => {
      if (res.data.code === 100) {
        console.log(res.data.msg)
      }
    })
  }
  useEffect(() => {
    getData();
  }, [])
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
          <Col span='12'><Input placeholder="Input Message" value={lowTon} onChange={(e) => setLowTon(e.target.value)} allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>HIGH TON</Col>
          <Col span='12'><Input placeholder="Input Message" value={highTon} onChange={(e) => setHighTon(e.target.value)} allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>HAT TRICK</Col>
          <Col span='12'><Input placeholder="Input Message" value={hatTrick} onChange={(e) => setHatTrick(e.target.value)} allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>THERE IN A BED</Col>
          <Col span='12'><Input placeholder="Input Message" value={thereInABed} onChange={(e) => setThereInABed(e.target.value)} allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>WHITE HORSE</Col>
          <Col span='12'><Input placeholder="Input Message" value={whiteHorse} onChange={(e) => setWhiteHorse(e.target.value)} allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>TON 80</Col>
          <Col span='12'><Input placeholder="Input Message" value={ton80} onChange={(e) => setTon80(e.target.value)} allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>THERE IN THE BLACK</Col>
          <Col span='12'><Input placeholder="Input Message" value={thereInABlack} onChange={(e) => setThereInABlack(e.target.value)} allowClear /></Col>
        </Row>
        <Row className='rowBox'>
          <Col span='12' className='AccountInfoLabel'>9MARK</Col>
          <Col span='12'><Input placeholder="Input Message" value={nineMark} onChange={(e) => setNineMark(e.target.value)} allowClear /></Col>
        </Row>
        <Row justify="center" className='rowBox'>
          <Button type="primary" onClick={setData}>{t(19)}</Button>
        </Row>
      </div>
    </div>
  )
}
export default AwardMsgSetting;