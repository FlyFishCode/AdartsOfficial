import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Input, message } from 'antd'
import useDeleteBox from '@/common/components/deleteBox.js'

import m from '@/assets/img/m.png'
import A from '@/assets/img/Adarts.png'
import L from '@/assets/img/League.png'

const AdartsCardSetting = () => {
  const { show, CustomModal } = useDeleteBox();
  const { t } = useTranslation();
  const [cardList, setCardList] = useState([]);
  const getCardList = () => {
    setCardList([
      {
        id: 1,
        userName: 'Alvin',
        icon: 0,
        cardNo: '0254 9625 1289 3509 657',
        ranting: '14.95',
        ppd: '27.12',
        mpr: '2.64',
      },
      {
        id: 2,
        userName: 'Alvin',
        icon: 1,
        cardNo: '0254 9625 1289 3509 657',
        ranting: '14.95',
        ppd: '27.12',
        mpr: '2.64',
      }
    ])
  };
  const handleCopy = (value) => {
    const selectDom = document.createElement('input');
    selectDom.setAttribute('style', 'position:absolute;top:0;left:0px;opacity:0;zIndex:--10')
    selectDom.value = value
    document.body.appendChild(selectDom)
    selectDom.select()
    document.execCommand('copy')
    document.body.removeChild(selectDom)
    message.info(t(125))
  }
  const handleAddCrad = () => {
    console.log(1);
  }
  const handleBtnClick = (value) => {
    if (value) {
      console.log(value);
    }
  }
  useEffect(() => {
    getCardList()
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='AdartsCardSetting'>{t(69)}</div>
      {cardList.map(i => {
        return (
          <div key={i.id} className='AdartsCardBox'>
            <div className='AdartsCardImgBox'>
              <div><img src={m} alt="" /></div>
              <div>{i.userName}</div>
            </div>
            <div className='AdartsCardInfoBox'>
              <div className='AdartsCardInfo'>
                <div className='AdartsCardIconBox'>{i.icon ? <img src={A} alt="" /> : <img src={L} alt="" />}</div>
                <div>卡号：{i.cardNo}</div>
              </div>
              <div className='AdartsCardLine'></div>
              <div className='AdartsCardResultBox'>
                <div>{`Rating | ${i.ranting}`}</div>
                <div>{`PPD | ${i.ppd}`}</div>
                <div>{`MPR | ${i.mpr}`}</div>
              </div>
            </div>
            <div className='AdartsCardBtnBox'>
              <Button type="primary" onClick={() => handleCopy(i.cardNo)}>{t(96)}</Button>
              <Button type="primary" danger onClick={() => show()}>{t(97)}</Button>
            </div>
          </div>
        )
      })}
      {cardList.length < 3 ?
        <div className='AdartsCardBox'>
          <div className='AdartsCardName'>卡号：</div>
          <div className='AdartsCardAddCard'><Input /></div>
          <div className='AdartsCardBtnBox'><Button type="primary" onClick={handleAddCrad}>{t(98)}</Button></div>
        </div>
        : ''}
      <CustomModal handleBtnClick={handleBtnClick} />
    </div>
  )
}
export default AdartsCardSetting