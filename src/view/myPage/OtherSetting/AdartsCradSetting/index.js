import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, message } from 'antd';
import useDeleteBox from '@/common/components/deleteBox.js';

import { adartsCardListHttp, adartsCardDeleteHttp, adartsBindHttp } from '@/api';

import adartsCard from '@/assets/img/adartsCard.png';
import A from '@/assets/img/Adarts.png';
import L from '@/assets/img/League.png';

const AdartsCardSetting = () => {
  const { t } = useTranslation();
  const { show, CustomModal } = useDeleteBox();
  const [cardList, setCardList] = useState([]);
  const [cardNo, setCardNo] = useState('');
  const [cardId, setCardId] = useState('');
  const memberId = sessionStorage.getItem('websiteMemberId');
  const handleDeleteBtn = (cardId) => {
    setCardId(cardId)
    show()
  }
  const getCardList = () => {
    adartsCardListHttp({ memberId }).then(res => {
      if (res.data.code === 100) {
        setCardList(res.data.data)
      }
    })
  };
  // const handleCopy = (value) => {
  //   const selectDom = document.createElement('input');
  //   selectDom.setAttribute('style', 'position:absolute;top:0;left:0px;opacity:0;zIndex:--10');
  //   selectDom.value = value;
  //   document.body.appendChild(selectDom);
  //   selectDom.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(selectDom);
  //   message.info(t(125));
  // }
  const handleSetMainCard = (value) => {
    console.log(value);
  }
  const handleAddCrad = () => {
    adartsBindHttp({ cardNo, memberId }).then(res => {
      if (res.data.code === 100) {
        message.info(res.data.msg)
        getCardList()
      } else {
        message.warning(res.data.msg)
      }
    })
  }
  const handleBtnClick = (bool) => {
    if (bool) {
      adartsCardDeleteHttp({ cardId }).then(res => {
        if (res.data.code === 100) {
          message.info(res.data.msg)
          getCardList();
        }
      })
    }
  }
  useEffect(() => {
    getCardList()
    return () => setCardList([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='AdartsCardSetting'>{t(69)}</div>
      {cardList.map(i => {
        return (
          <div key={i.cardId} className='AdartsCardBox'>
            <div>
              <div className='AdartsCardImgBox'><img src={adartsCard} alt="" /></div>
              <div className='AdartsCardUserName'>{i.name}</div>
            </div>
            <div className='AdartsCardInfoBox'>
              <div className='AdartsCardInfo'>
                <div className='AdartsCardIconBox'>{i.cardType === 1 ? <img src={A} alt="" /> : <img src={L} alt="" />}</div>
                <div>{t(35)}：{i.cardNo}</div>
              </div>
              <div className='AdartsCardLine'></div>
              <div className='AdartsCardResultBox'>
                <div>{`Rating | ${i.rating}`}</div>
                <div>{`PPD | ${i.ppd}`}</div>
                <div>{`MPR | ${i.mpr}`}</div>
              </div>
            </div>
            <div className='AdartsCardBtnBox'>
              {!i.isMainCard ? <Button type="primary" onClick={() => handleSetMainCard(i.cardNo)}>{t(144)}</Button> : null}
              {/* <Button type="primary" onClick={() => handleCopy(i.cardNo)}>{t(96)}</Button> */}
              <Button type="primary" danger onClick={() => handleDeleteBtn(i.cardId)}>{t(97)}</Button>
            </div>
          </div>
        )
      })}
      {cardList.length < 3 ?
        <div className='AdartsCardBox'>
          <div className='AdartsCardName'>卡号：</div>
          <div className='AdartsCardAddCard'><Input onChange={(e) => setCardNo(e.target.value)} /></div>
          <div className='AdartsCardBtnBox'><Button type="primary" onClick={handleAddCrad}>{t(98)}</Button></div>
        </div>
        : ''}
      <CustomModal handleBtnClick={handleBtnClick} />
    </div>
  )
}
export default AdartsCardSetting