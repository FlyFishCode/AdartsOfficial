
import { useState, useEffect } from 'react'
import { Progress } from 'antd'
import { myPageIndexUserCardInfoHttp } from '@/api'

const MyPageIndex = (props) => {
  const { changeCardId } = props;
  const [card, setCard] = useState({});
  const [cardId, setCardId] = useState('');
  const requsetData = {
    cardId,
    memberId: sessionStorage.getItem('websiteMemberId')
  }
  const getData = () => {
    myPageIndexUserCardInfoHttp(requsetData).then(res => {
      if (res.data.data) {
        setCard(res.data.data)
        setCardId(res.data.data.cardId)
        changeCardId(res.data.data.cardId)
      }
    })
  }
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <div className='myPageTitle' id='myPageIndex'>我的页面首页</div>
      <div className='MyPageIndex'>
        <div className='userCard'>
          <div className='userCardLeftBox' >
            <div className='userInfo'>
              <div>
                <div className='userCountryImg'>
                  {/* <img src={card.countryImg} alt="" /> */}
                </div>
                <div className='userInfoBox'>
                  <div className='userCardImg'>
                    <img src={card.portrait} alt="" />
                  </div>
                  <div className='userName'>{card.name}</div>
                </div>
              </div>
              <div className='userInfoGameBox'>
                <div><Progress type="circle" percent={card.rating} status="exception" format={percent => `${percent} RATING`} /></div>
                <div className='userInfoGame'>
                  <div>
                    <div>{card.ppd}</div>
                    <div className='fontStyle'>01 GAME</div>
                  </div>
                  <div>
                    <div>{card.mpr}</div>
                    <div className='fontStyle'>CRICKET</div>
                  </div>
                  <div>
                    <div>{card.countUpPoint}</div>
                    <div className='fontStyle'>COUNTUP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='userCardInfo'>
              <div className='fontStyle'>Adarts ID：</div>
              <div>{card.cardNo}</div>
            </div>
          </div>
          <div className='userCardRightBox'>
            <div className='userGameTotal'>
              <div className='fontStyle'>WIN</div>
              <div>{card.win}</div>
            </div>
            <div className='userGameTotal'>
              <div className='fontStyle'>LOSE</div>
              <div>{card.lose}</div>
            </div>
            <div className='userGameTotal'>
              <div className='fontStyle'>最高连胜记录</div>
              <div>{card.winContinued}</div>
            </div>
            <div>
              <div className='fontStyle'>WIN%</div>
              <div className='userWinsBox'><Progress type="circle" width={60} percent={card.winProbability} status="exception" format={percent => `${percent} %`} /></div>
            </div>
          </div>
        </div>
      </div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  )
}
export default MyPageIndex