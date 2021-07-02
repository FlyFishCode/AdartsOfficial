
import { useState, useEffect } from 'react'
import { Progress } from 'antd'

import m from '@/assets/img/m.png'
const MyPageIndex = () => {
  const [data] = useState({
    id: 1,
    countryImg: m,
    userImg: m,
    userName: 'Alvin',
    rating: '14.90',
    '01Game': "27.12",
    cricket: '7.12',
    countup: "1111",
    win: 1234,
    lose: 5678,
    maxWinCount: 905,
    winP: 39,
    adartsId: 'Alvin19999999'
  })
  const getData = () => {
    // setData()
  }
  useEffect(() => {
    getData()
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
                  <img src={data.countryImg} alt="" />
                </div>
                <div className='userInfoBox'>
                  <div className='userCardImg'>
                    <img src={data.userImg} alt="" />
                  </div>
                  <div className='userName'>{data.userName}</div>
                </div>
              </div>
              <div className='userInfoGameBox'>
                <div><Progress type="circle" percent={data.rating} status="exception" format={percent => `${percent} RATING`} /></div>
                <div className='userInfoGame'>
                  <div>
                    <div>{data['01Game']}</div>
                    <div className='fontStyle'>01 GAME</div>
                  </div>
                  <div>
                    <div>{data.cricket}</div>
                    <div className='fontStyle'>CRICKET</div>
                  </div>
                  <div>
                    <div>{data.countup}</div>
                    <div className='fontStyle'>COUNTUP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='userCardInfo'>
              <div className='fontStyle'>Adarts ID：</div>
              <div>{data.adartsId}</div>
            </div>
          </div>
          <div className='userCardRightBox'>
            <div className='userGameTotal'>
              <div className='fontStyle'>WIN</div>
              <div>{data.win}</div>
            </div>
            <div className='userGameTotal'>
              <div className='fontStyle'>LOSE</div>
              <div>{data.lose}</div>
            </div>
            <div className='userGameTotal'>
              <div className='fontStyle'>最高连胜记录</div>
              <div>{data.maxWinCount}</div>
            </div>
            <div>
              <div className='fontStyle'>WIN%</div>
              <div className='userWinsBox'><Progress type="circle" width={60} percent={data.winP} status="exception" format={percent => `${percent} %`} /></div>
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