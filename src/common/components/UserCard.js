import { useState, useEffect } from 'react'
import { Row, Col, Button, Progress } from 'antd'
import { LeftOutlined, RightOutlined, UserAddOutlined, GiftOutlined, MessageOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import m from '@/assets/img/m.png'
const UserCard = () => {
  const [userCard, setUserCard] = useState([]);
  const [friend, setFriend] = useState(0)
  const [gift, setGift] = useState(0)
  const [position, setPosition] = useState(0)
  const [positionIndex, setPositionIndex] = useState(0)
  const num = userCard.length
  useEffect(() => {
    setFriend(1)
    setGift(1)
    setUserCard([
      {
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
      },
      {
        id: 2,
        countryImg: m,
        userImg: m,
        userName: '李逍遥',
        rating: '65.02',
        '01Game': "20.52",
        cricket: '15.90',
        countup: "2501",
        win: 301,
        lose: 571,
        maxWinCount: 25,
        winP: 67,
        adartsId: '李逍遥19999999'
      },
      {
        id: 3,
        countryImg: m,
        userImg: m,
        userName: '刘长安',
        rating: '62.19',
        '01Game': "52",
        cricket: '16.48',
        countup: "304",
        win: 926,
        lose: 45,
        maxWinCount: 1,
        winP: 63,
        adartsId: '刘长安19999999'
      }
    ])
  }, [])
  useEffect(() => {
    const dom = document.querySelector('.userCardListBox');
    dom.style.left = `${position}px`
  }, [position])
  const { t } = useTranslation();
  const handleUserCardClick = (direction) => {
    if (direction === 'left') {
      if (positionIndex > 0) {
        setPositionIndex(positionIndex - 1)
        setPosition(position + 400)
      }
    } else {
      if (positionIndex < num - 1) {
        setPositionIndex(positionIndex + 1)
        setPosition(position - 400)
      }
    }
  }
  return (
    <Row className='userCardBox'>
      <Col span='1' offset='1' className='iconBox' onClick={() => handleUserCardClick('left')}><LeftOutlined /></Col>
      <Col span='8' offset='1' className='userCardListBg'>
        <div className='userCardListBox animate__animated animate__fadeInRight'>
          {userCard.map((i, index) => {
            return (
              <div className='userCard' key={index}>
                <div className='userCardLeftBox' >
                  <div className='userInfo'>
                    <div>
                      <div className='userCountryImg'>
                        <img src={i.countryImg} alt="" />
                      </div>
                      <div className='userInfoBox'>
                        <div className='userCardImg'>
                          <img src={i.userImg} alt="" />
                        </div>
                        <div className='userName'>{i.userName}</div>
                      </div>
                    </div>
                    <div className='userInfoGameBox'>
                      <div><Progress type="circle" percent={i.rating} status="exception" format={percent => `${percent} RATING`} /></div>
                      <div className='userInfoGame'>
                        <div>
                          <div>{i['01Game']}</div>
                          <div className='fontStyle'>01 GAME</div>
                        </div>
                        <div>
                          <div>{i.cricket}</div>
                          <div className='fontStyle'>CRICKET</div>
                        </div>
                        <div>
                          <div>{i.countup}</div>
                          <div className='fontStyle'>COUNTUP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='userCardInfo'>
                    <div className='fontStyle'>Adarts ID：</div>
                    <div>{i.adartsId}</div>
                  </div>
                </div>
                <div className='userCardRightBox'>
                  <div className='userGameTotal'>
                    <div className='fontStyle'>WIN</div>
                    <div>{i.win}</div>
                  </div>
                  <div className='userGameTotal'>
                    <div className='fontStyle'>LOSE</div>
                    <div>{i.lose}</div>
                  </div>
                  <div className='userGameTotal'>
                    <div className='fontStyle'>最高连胜记录</div>
                    <div>{i.maxWinCount}</div>
                  </div>
                  <div>
                    <div className='fontStyle'>WIN%</div>
                    <div className='userWinsBox'><Progress type="circle" width={60} percent={i.winP} status="exception" format={percent => `${percent} %`} /></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='positionIndexBox'>
          {userCard.map((i, index) => {
            return (
              <div className={index === positionIndex ? 'isActive' : 'positionIndex'} key={index}></div>
            )
          })}
        </div>
      </Col>
      <Col span='1' offset='1' className='iconBox' onClick={() => handleUserCardClick('right')}><RightOutlined /></Col>
      <Col span='8' offset='1' className='userCardOther'>
        <div className='otherMoreBox'>
          {/* <Button block >{t('1')}<RightOutlined /></Button> */}
          <Button block >{t(16)}<RightOutlined /></Button>
          <Button block >{t(17)}<RightOutlined /></Button>
          <hr />
        </div>
        <div className='otherInfoBox'>
          <div className='contentInfoBox'>
            <div className='iconBox'><UserAddOutlined /></div>
            <div>有 <span className='linkText'>{friend}</span> 好友邀请</div>
          </div>
          <div className='contentInfoBox'>
            <div className='iconBox'><GiftOutlined /></div>
            <div>已收到 <span className='linkText'>{gift}</span> 礼品</div>
          </div>
          <div className='contentInfoBox'>
            <div className='iconBox'><MessageOutlined /></div>
            <div>Award消息</div>
            <div className='awardChangeBox'>【更改】</div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
export default UserCard